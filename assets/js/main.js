/* Site behaviour: dark/light switch, phone menu, search (Pagefind), citation dialog, theme filters.
   Everything is progressive enhancement: the site reads fine without JavaScript. */
(() => {
  const d = document, root = d.documentElement;

  /* dark / light: the OS setting is used until the visitor chooses; the choice is remembered */
  d.querySelectorAll("[data-theme-toggle]").forEach((b) => b.addEventListener("click", () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) { /* private mode */ }
  }));

  /* phone menu */
  const menuBtn = d.querySelector("[data-menu]"), links = d.getElementById("nav-links");
  const setMenu = (open) => { links.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", String(open)); };
  if (menuBtn && links) {
    menuBtn.addEventListener("click", () => setMenu(!links.classList.contains("open")));
    d.addEventListener("keydown", (e) => { if (e.key === "Escape" && links.classList.contains("open")) { setMenu(false); menuBtn.focus(); } });
    d.addEventListener("click", (e) => { if (links.classList.contains("open") && !e.target.closest(".nav")) setMenu(false); });
  }

  /* dialogs: close button and click on the backdrop */
  d.querySelectorAll("dialog").forEach((dlg) => {
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
    dlg.querySelectorAll("[data-close]").forEach((b) => b.addEventListener("click", () => dlg.close()));
  });

  /* search: Pagefind's index exists only on the built site (npm run build / GitHub deploy) */
  const sDlg = d.getElementById("search-dialog");
  let searchLoaded = false;
  const openSearch = () => {
    if (!sDlg || sDlg.open) return;
    sDlg.showModal();
    if (searchLoaded) { const i = sDlg.querySelector("input"); if (i) i.focus(); return; }
    searchLoaded = true;
    const base = sDlg.dataset.base, msg = d.getElementById("search-msg");
    const css = d.createElement("link"); css.rel = "stylesheet"; css.href = base + "pagefind-ui.css"; d.head.appendChild(css);
    const s = d.createElement("script"); s.src = base + "pagefind-ui.js";
    s.onload = () => {
      /* global PagefindUI */
      new PagefindUI({ element: "#search", showSubResults: true, showImages: false, autofocus: true, resetStyles: false });
      if (msg) msg.remove();
    };
    s.onerror = () => { if (msg) msg.textContent = "Search works on the published site: its index is built when the site is deployed."; };
    d.head.appendChild(s);
  };
  d.querySelectorAll("[data-search]").forEach((b) => b.addEventListener("click", openSearch));
  d.addEventListener("keydown", (e) => {
    const typing = /^(input|textarea|select)$/i.test((d.activeElement || {}).tagName || "");
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSearch(); }
    else if (e.key === "/" && !typing) { e.preventDefault(); openSearch(); }
  });

  /* "Cite": show the paper's cite.bib with copy and download */
  const cDlg = d.getElementById("cite-dialog");
  d.addEventListener("click", async (e) => {
    const b = e.target.closest("[data-cite]");
    if (!b || !cDlg) return;
    const pre = cDlg.querySelector("pre"), dl = cDlg.querySelector("[data-download]");
    pre.textContent = "Loading…"; dl.href = b.dataset.cite; cDlg.showModal();
    try { const r = await fetch(b.dataset.cite); if (!r.ok) throw r; pre.textContent = (await r.text()).trim(); }
    catch (err) { pre.textContent = "Could not load the citation here; use “Download .bib”."; }
  });
  const copyBtn = cDlg && cDlg.querySelector("[data-copy]");
  if (copyBtn) copyBtn.addEventListener("click", async () => {
    const pre = cDlg.querySelector("pre");
    try { await navigator.clipboard.writeText(pre.textContent); copyBtn.textContent = "Copied"; }
    catch (err) { const r = d.createRange(); r.selectNodeContents(pre); const s = getSelection(); s.removeAllRanges(); s.addRange(r); copyBtn.textContent = "Selected: press Ctrl+C"; }
    setTimeout(() => { copyBtn.textContent = "Copy BibTeX"; }, 2200);
  });

  /* theme filters on publication lists */
  d.querySelectorAll("[data-filters]").forEach((f) => {
    const scope = d.getElementById(f.dataset.filters);
    f.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b || !scope) return;
      f.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      const k = b.dataset.f;
      scope.querySelectorAll("[data-k]").forEach((el) => { el.hidden = !(k === "all" || el.dataset.k.split(" ").includes(k)); });
      scope.querySelectorAll("[data-group]").forEach((g) => { g.hidden = !g.querySelector("[data-k]:not([hidden])"); });
    });
  });
})();
