---
title: "30 Years of Snow Water Equivalent in the Po River District"
date: 2025-03-20
categories:
  - Datasets
  - Research
tags:
  - Po River
  - Open Data
  - SWE
  - GEOtop
  - Remote Sensing
layout: single
excerpt: "Presenting a daily, 500m resolution snow water equivalent dataset (1991-2021) for the Po River District."
header:
  overlay_image: /assets/images/IMG_1742.jpg
  overlay_filter: 0.5
  caption: "The Po River District"
gallery:
  - url: /assets/images/po_river.jpg
    image_path: /assets/images/po_river.jpg
    caption: "Credits: Gaia"
---

We are pleased to announce the publication of a comprehensive new snow water equivalent dataset: **"30-years (1991-2021) Snow Water Equivalent Dataset in the Po River District, Italy"**, now published in **[Scientific Data](https://doi.org/10.1038/s41597-025-04633-5)**.

This dataset addresses a critical need for high-resolution, long-term snow water equivalent data in one of Europe's most productive and climate-sensitive regions.

The Po River District covers a vast and complex topography, including parts of the Alps and Apennines. Understanding historical snow dynamics here is crucial for water management.

* **Time Span:** 1991 – 2021 (30 Years)
* **Resolution:** 500 m (Spatial) / Daily (Temporal)
* **Coverage:** Po River District (Alps & Apennines)

<figure class="align-center">
  <img src="/assets/images/po_study.jpg" alt="Overview map of the Po River District">
  <figcaption>
    <strong>Fig.:</strong> Overview map of the Po River District (red and dashed) showing the topographic and hydrological features annotated with region names. Blue colored overlay shows the long-term peak SWE distribution for the period 1991-2021.
     <br>
    <span style="font-size: 0.85em; color: #777;">
      &copy; 2025 John Mohd Wani. All rights reserved.
    </span>
  </figcaption>
</figure>

Generating consistent data over complex terrain requires more than just interpolation. We utilized a **hybrid modeling approach** that integrates:

1.  **Physically-based Modeling:** Using the **[GEOtop model](https://github.com/geotopmodel/geotop)** to simulate the snow dynamics.
2.  **Data Assimilation:** Enhancing model estimates by assimilating in-situ snow depth measurements and Earth Observation (satellite) snow products.

This combination allows us to fill observational gaps while maintaining physical consistency in the snowpack simulation.

## Why This Dataset is Unique?

We believe that this dataset fills a critical gap in the scientific understanding of hydrology in the region. It represents an unprecedented piece of information for four key reasons:

1.  **Longest Time Series:** It reports the longest time series of coherent SWE cartography at daily aggregation in Italy (surpassing existing datasets which typically cover shorter periods).
2.  **Homogeneity:** The maps are homogeneous in terms of modeling approach across the full 30 years and the whole domain, which significantly facilitates the interpretation of long-term climatic trends.
3.  **Drought Monitoring:** The maps can be interrogated to calculate the **SWE anomaly** of a given position relative to the 1991–2021 statistical distribution. This is a vital tool for addressing drought alerts.
4.  **Benchmarking:** It serves as a high-quality benchmark to validate temperature-index models and other simple models frequently used for operational purposes.

---

### Access the Data

This dataset is open-access and ready for use in climate impact studies like snow droughts, hydrological modeling, and water resource management.

<div class="notice--success">
  <h4>Citation & Download</h4>
  <p><strong>Dall’Amico, M., Tasin, S., Di Paolo, F., Wani, J.M., et al. (2025).</strong><br>
  <em>30-years (1991-2021) Snow Water Equivalent Dataset in the Po River District, Italy.Scientific Data, 12, 374.</em><br>
  </p>
  
  <a href="https://doi.org/10.1038/s41597-025-04633-5" class="btn btn--inverse">View Paper</a> 
  <a href="https://zenodo.org/records/11196628" class="btn btn--inverse">Download Data</a>

</div>

<div class="notice--info">
  <h4>See the Data in Action</h4>
  <p>Want to see what this data reveals about snow water storage?</p>
  <p>We performed a comphrehensive analysis using this exact dataset. Read the key findings in our recent blog post:<br>
  
  👉 <strong><a href="{% post_url 2025-11-18-alps-are-losing-snow %}">The Alps are Losing Snow</a></strong></p>
</div>

<figure class="align-full">
  <img src="/assets/images/po_river.jpg" alt="Po River" style="width: 100%;">
  
  <figcaption style="text-align: center; font-size: 0.9em; color: #666; margin-top: 5px;">
    Photo credit: <strong>Gaia</strong>
  </figcaption>
</figure>