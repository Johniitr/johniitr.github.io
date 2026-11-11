# Real-terrain contour artwork: Ladakh Range above Leh (Indus valley to Khardung La).
# Input: 4 AWS Terrain Tiles (terrarium encoding, zoom 10, x 732-733, y 407-408).
# Elevation (m) = R*256 + G + B/256 - 32768. Output: SVG with 200 m contours, index lines every 1000 m.
suppressMessages(library(terra))
args <- commandArgs(TRUE); dir <- args[1]; out <- args[2]
# terra reads a PNG without georeferencing upside-down (south row first), so flip each tile to north-up.
elev_tile <- function(f) { r <- suppressWarnings(rast(f)); v <- values(r); m <- matrix(v[,1]*256 + v[,2] + v[,3]/256 - 32768, 256, 256, byrow = TRUE); m[256:1, ] }
Z <- rbind(cbind(elev_tile(file.path(dir, "t_732_407.png")), elev_tile(file.path(dir, "t_733_407.png"))),
           cbind(elev_tile(file.path(dir, "t_732_408.png")), elev_tile(file.path(dir, "t_733_408.png"))))
# crop rows to 34.40N (row 174) .. 34.08N (row 456); full width = 77.34E .. 78.04E
Z <- Z[175:456, ]
cat(sprintf("crop %d x %d px, elevation %.0f-%.0f m\n", ncol(Z), nrow(Z), min(Z), max(Z)))
# light smoothing (3x3 mean, twice) and 2x bilinear upsampling for smooth curves
r <- rast(Z); r <- focal(r, 3, mean, na.rm = TRUE); r <- focal(r, 3, mean, na.rm = TRUE)
r <- disagg(r, 2, method = "bilinear"); Z <- as.matrix(r, wide = TRUE)
W <- 1600; H <- round(W * nrow(Z) / ncol(Z))
xs <- seq(0, W, length.out = ncol(Z)); ys <- seq(0, H, length.out = nrow(Z))
levs <- seq(floor(min(Z)/200)*200 + 200, ceiling(max(Z)/200)*200, by = 200)
cl <- contourLines(xs, ys, t(Z), levels = levs)
# Douglas-Peucker simplification
dp <- function(x, y, tol) {
  n <- length(x); if (n < 3) return(rep(TRUE, n)); keep <- rep(FALSE, n); keep[c(1, n)] <- TRUE
  stack <- list(c(1, n))
  while (length(stack)) { s <- stack[[length(stack)]]; stack[[length(stack)]] <- NULL; a <- s[1]; b <- s[2]
    if (b - a < 2) next; i <- (a + 1):(b - 1)
    dx <- x[b] - x[a]; dy <- y[b] - y[a]; L <- sqrt(dx^2 + dy^2)
    d <- if (L == 0) sqrt((x[i] - x[a])^2 + (y[i] - y[a])^2) else abs(dy * x[i] - dx * y[i] + x[b] * y[a] - y[b] * x[a]) / L
    k <- which.max(d); if (d[k] > tol) { m <- i[k]; keep[m] <- TRUE; stack[[length(stack) + 1]] <- c(a, m); stack[[length(stack) + 1]] <- c(m, b) } }
  keep }
path_d <- function(l) {
  x <- l$x; y <- l$y
  if (sum(sqrt(diff(x)^2 + diff(y)^2)) < 60) return(NA_character_)
  k <- dp(x, y, 0.9); x <- round(x[k]); y <- round(y[k])
  keep <- c(TRUE, diff(x) != 0 | diff(y) != 0); x <- x[keep]; y <- y[keep]
  if (length(x) < 3) return(NA_character_)
  paste0("M", x[1], " ", y[1], "l", paste(diff(x), diff(y), collapse = " "))
}
lev <- sapply(cl, `[[`, "level"); minor <- c(); major <- c()
for (i in seq_along(cl)) { d <- path_d(cl[[i]]); if (is.na(d)) next
  if (lev[i] %% 1000 == 0) major <- c(major, d) else minor <- c(minor, d) }
svg <- c(sprintf('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true" focusable="false">', W, H),
  "<!-- Contours of the Ladakh Range above Leh, 200 m interval (index every 1000 m). Data: NASA SRTM via AWS Terrain Tiles. -->",
  sprintf('<path stroke-width="0.8" opacity=".5" d="%s"/>', paste(minor, collapse = "")),
  sprintf('<path stroke-width="1.5" opacity=".9" d="%s"/>', paste(major, collapse = "")), "</svg>")
writeLines(svg, out)
cat(sprintf("%s: %d lines (%d index), %.0f KB\n", basename(out), length(minor) + length(major), length(major), file.size(out) / 1024))
