# John Mohd Wani · Research website

![Deploy Status](https://github.com/Johniitr/johniitr.github.io/actions/workflows/deploy.yml/badge.svg)
[![Hugo](https://img.shields.io/badge/Built%20with-Hugo-blueviolet)](https://gohugo.io)

Source of my academic website, **[johniitr.github.io](https://johniitr.github.io)**: research on mountain
snow and permafrost, publications, talks, trainings and blog.

The site is built with [Hugo](https://gohugo.io) and a custom design that lives in this repository
(no external theme). The contour lines in the header and footer are the real terrain of the Ladakh Range
above Leh, drawn from NASA SRTM elevation data with [`tools/ladakh-contours.R`](tools/ladakh-contours.R).

## Editing content

Everything is Markdown with a short settings block (front matter) at the top:

| What | Where |
|---|---|
| Name, job title, links, education, positions, skills | `content/authors/admin/_index.md` |
| Homepage headline, field sites, numbers, students box | `content/_index.md` |
| Research themes (homepage and Research page) | `content/research/index.md` |
| A publication | `content/publications/<name>/index.md` + `cite.bib` + `featured.jpg` |
| A blog post | `content/blog/<name>/index.md` (+ images in the same folder) |
| A talk | `content/events/<name>/index.md` |
| Workshops and trainings | `content/trainings/index.md` |
| Menu | `config/_default/menus.yaml` |
| CV PDF | `static/uploads/resume.pdf` |

## Previewing locally

```bash
hugo server            # live preview at http://localhost:1313 (no search)
npm install            # once, installs Pagefind
npm run build          # full build in public/, including the search index
npx pagefind --site public --serve   # preview the full build with search
```

## Publishing

Push to `main`. GitHub Actions builds the site with Hugo, indexes it with [Pagefind](https://pagefind.app)
and publishes it to GitHub Pages.

## Stack

* **Engine:** Hugo 0.152 (extended)
* **Design:** hand-written HTML templates (`layouts/`), CSS and a little JavaScript (`assets/`)
* **Fonts:** Newsreader, IBM Plex Sans and IBM Plex Mono, self-hosted (SIL Open Font License)
* **Search:** Pagefind
* **Deployment:** GitHub Actions → GitHub Pages
* **Models featured:** GEOtop, GEOframe
