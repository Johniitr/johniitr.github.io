---
title: "Research"
summary: "I study how mountain snow and permafrost respond to a warming climate, combining field observations with physically based models."
layout: research

# Research themes. They appear on the homepage and on this page, in this order.
# "tags": a publication or blog post belongs to a theme when it carries one of these tags
# (used for the theme filters on the publication lists and the "related" lists).
# "plate: true" shows the image whole on a white background (for figures and maps).
# "key_papers": folder names in content/publications/, shown as links under the theme on the homepage.
themes:
  - id: permafrost
    title: "Permafrost in the Himalaya"
    short: "Permafrost"
    image: ladakh-valley.jpg
    image_alt: "A glacial valley in the Ladakh Range, Indian Himalaya"
    image_credit: "Ladakh Range, Indian Himalaya · photo J. M. Wani"
    summary: "Field evidence and modelling of permafrost in the cold-arid Ladakh Range: the energy balance that sustains it, how deep it thaws each summer, and its role in mountain hazards such as the 2021 Chamoli disaster."
    tags: [Permafrost, Active layer thickness, Debris flow, Hanging glacier]
    key_papers: [permafrost-TC, permafrost-stoten, chamoli-2021]
    body: |
      Permafrost (ground that stays at or below 0 °C for at least two consecutive years) underlies large parts of the cold-arid trans-Himalaya, yet it is almost unmonitored. In the upper Ganglass catchment of the Ladakh Range I combined field measurements, near-surface ground-temperature loggers spread between 4,700 and 5,612 m, with the GEOtop model to provide the first field-based permafrost characteristics for the Indian Himalayan region.

      The results point to permafrost at all monitored sites above 4,900 m, with active layers from 0.1 to 4.2 m thick, sustained by a surface energy balance shaped by very dry air and strongly negative long-wave radiation. The same tools help explain hazards: in the 2021 Chamoli (Rishiganga) disaster, permafrost modelling suggested warm permafrost and conditions favourable for frost cracking at the source of the ice-rock avalanche.

  - id: snow
    title: "Mountain snow and water"
    short: "Snow & water"
    image: po-peak-swe-map.jpg
    plate: true
    image_alt: "Map of the Po River District with the long-term peak snow water equivalent, 1991–2021"
    image_credit: "Long-term peak snow water equivalent in the Po River District, 1991–2021"
    summary: "A 30-year, daily, 500 m snow water equivalent record for the Po River District, and what three decades of it reveal about snow loss below 2,000 m and snow drought."
    tags: [Snow Hydrology, SWE, Snow, Po Basin, Po River Basin]
    key_papers: [swe-data-po, preprint]
    body: |
      Seasonal snow is a natural reservoir that releases water to the valleys in spring and summer. With colleagues at Waterjade, the Po River District Authority and the University of Trento, I helped build a 30-year (1991–2021) snow water equivalent dataset for the Po River District at daily and 500 m resolution, combining the GEOtop model with in-situ snow observations and satellite snow products. The data are open on [Zenodo](https://zenodo.org/records/11196628).

      Three decades of these maps show the largest losses of snow water storage below 2,000 m, where both snow volume and the length of the snow season decline. That shift matters for water availability and for monitoring snow drought in Italy’s largest river basin.

  - id: models
    title: "Physics-based cryosphere models"
    short: "Models"
    image: geotop-snow-maps.png
    plate: true
    image_alt: "GEOtop simulations of snow depth across the Non Valley, Trentino, in January and May"
    image_credit: "GEOtop snow depth, Non Valley (Trentino), January vs May"
    summary: "Developing and applying GEOtop and GEOframe, from a thermodynamic framework for freezing soil to automated calibration of coupled heat-and-water permafrost models."
    tags: [GEOtop, GEOframe, Calibration, Thermodynamics, Freezing Soil, Soil Physics]
    key_papers: [freezing-soil-gge-2026, abhischek_CRE]
    body: |
      I use and help develop open-source, physically based models: [GEOtop](https://github.com/geotopmodel/geotop), which couples the energy and water budgets at and below the land surface, and the component-based [GEOframe](https://github.com/geoframecomponents) system, into which I am integrating new process-based cryo-hydrological components.

      Recent work derives the freezing of soil water from a single thermodynamic starting point, treating capillarity, dissolved solutes and adsorption as terms of one chemical potential. It also automates the calibration of 101 parameters of coupled heat-and-water permafrost models at boreholes near Hornsund, Svalbard. I teach these models in hands-on courses, from EGU in Vienna to ICIMOD in Kathmandu.
---

My research addresses one question: how the mountain cryosphere, snow and permafrost, responds to climate change, and what that means for water resources and natural hazards in high-altitude regions. I work across scales, from loggers buried in Himalayan scree to basin-wide snow reanalyses, and I use physically based models to connect field observations with theory.
