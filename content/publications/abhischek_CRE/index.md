---
title: 'An integrated computational framework for high-dimensional parameter optimization in coupled hydro-thermal permafrost modelling'

# Authors
# Use `admin` for John Mohd Wani to link to the site author profile
authors:
  - Abhishek Bamby Alphonse
  - Marzena Osuch
  - admin
  - Nicole Hanselmann

date: '2026-04-20T00:00:00Z'
doi: '10.1016/j.coldregions.2026.104950'

# Schedule page publish date (NOT the paper's date).
publishDate: '2026-04-20T00:00:00Z'

# Publication type.
# 1 = Conference paper, 2 = Journal article, 3 = Preprint, 4 = Report, 5 = Book, 6 = Book section, 7 = Thesis, 8 = Patent
publication_types: ['2']

# Publication name and optional abbreviated publication name.
publication: '*Cold Regions Science and Technology*'
publication_short: ''

# Summary. An optional shortened abstract.
summary: A novel GEOtop-MATLAB framework for automated calibration and sensitivity analysis of coupled hydro-thermal permafrost models, applied to three boreholes near Hornsund, Svalbard.

tags:
  - Permafrost
  - GEOtop
  - Calibration

# Display this page in the Featured widget?
featured: true

image:
  caption: ''
  focal_point: ''
  preview_only: false

links:
  - name: Download Paper
    url: https://doi.org/10.1016/j.coldregions.2026.104950
---

## Abstract

Frozen ground behavior in high latitudes is controlled by coupled subsurface moisture and temperature. Modelling these multi-physics processes is a significant challenge in computational geoscience due to highly non-linear phase changes and the problem of identifying vertical soil stratigraphy and parameterizing vertical heterogeneity within the 1D column. We developed a novel integrated computational framework coupling the physically based **[GEOtop](https://github.com/geotopmodel/geotop)** 3.0 with a MATLAB control environment, applied to three boreholes (Meteo, Brzydal, Lola) near the Polish Polar Station, Hornsund, Svalbard (2017–2025). This framework automates the modelling lifecycle, enabling high-dimensional parameter identification. We utilized Particle Swarm Optimization to calibrate 101 parameters per borehole, while Global Sensitivity Analysis (Morris method) identified key drivers. Our analysis revealed that model performance, and thus the simulated ground thermal regime, was controlled by hydraulic-thermal coupling, specifically van Genuchten retention parameters (α, n) and saturated water content. Deep permafrost temperatures were simulated with high accuracy during both calibration and validation (RMSE < 0.2 °C). Near-surface temperatures exhibit larger errors, with RMSE values of 0.84–1.63 °C. At the Lola borehole, near-surface RMSE approximately doubled during validation. These results reflect the inherent challenges of numerically capturing the rapid, non-linear phase-change transitions within the active layer, the zone critical for foundation and ground structural integrity. This work provides a robust and reproducible computational tool for the parameterization and evaluation in cold-regions.