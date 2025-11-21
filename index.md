---
layout: single   # <--- CHANGED: 'single' allows the right sidebar
author_profile: true
title: "John Mohd Wani" # Required for single layout to look good

# 1. THE HEADER PHOTO CONFIGURATION
header:
  overlay_image: /assets/images/IMG_1742.jpg # Replace with your file name
  overlay_filter: 0.5 # Darkens image (0.0 to 1.0) so white text is readable
  caption: "Photo credit: [**John Wani**]()"


# 2. THE RIGHT SIDEBAR CONFIGURATION
sidebar:
  nav: "right_sidebar" # We will create this "menu" in the next step
---


I am an early career researcher specializing in **Cryosphere Science**. My research addresses the fundamental challenge of quantifying and predicting the response of the cryosphere (permafrost, snow) to climate change and its impact on water resources and natural hazards.

## Research Focus

### **1. Model Development**
I am currently developing and integrating new, object-oriented components (in OMS3) into the GEOframe modeling system. Specifically, I am enhancing the WHETGEO-1D model **[Tubini and Rigon, Geosci. Model Dev, 2022](https://doi.org/10.5194/gmd-15-75-2022)** to explicitly simulate permafrost dynamics and physically-based snow processes. This work, which I am co-supervising with a PhD student, moves me from a user of models to a developer of new community tools.

### **2. Snow Processes and Modeling**
My recent work (Wani et al., The Cryosphere, under review) provides the first comprehensive 30-year analysis of snow water equivalent (SWE) changes in the Po River District, Italy, one of Europe’s second most climate-sensitive regions. Using a high-resolution, 30-year dataset **[Dall’Amico et al., Scientific Data, 2025](https://doi.org/10.1038/s41597-025-04633-5)**, we identified two critical findings: 1) a profound loss of snow volume below 2000 meters (over 30% in some elevation bands), and 2) a fundamental shift in the seasonal snow regime, driven primarily by a delayed onset of winter accumulation, not just earlier spring melt. 

### **3. High Mountain Permafrost Processes & Modeling**
Understanding the characteristics and thermal regime of high-altitude mountain permafrost. This research, published in **[Wani et al., Science of the Total Environment 2020](https://doi.org/10.1016/j.scitotenv.2019.134631)** and **[Wani et al., The Cryosphere 2021](https://doi.org/10.5194/tc-15-2273-2021)**, provided the first-ever field based permafrost characteristics in the Indian Himalayan region. This work filled a critical research gap in-comparison to the well-studied Tibetan Plateau region and gave new impetus to mountain permafrost research in the region.

### **4. Natural Hazards**
I have also applied my expertise to assess high-impact cryosphere hazards, such as the 2021 Hanging glacier avalanche and debris flow disaster in Uttarakhand, India **[Thayyen et al., Natural Hazards, 2022](https://doi.org/10.1007/s11069-022-05454-0)**.

---

## 📢 Latest Research Updates

### Upcoming Training & Workshops

* **May 03-08, 2026:** **Convener** for the *Introducing GEOtop and GEOframe: Open Source Tools for Modeling Snow Dominated Catchments* short course at **EGU 2026, Vienna, Austria**. [More Details](/workshops/)

### Recent Presentations

* **Oct 2025:** Presented findings on *Impact of forest disturbances on snow dynamics* at the **XII IAHS 2025, Roorkee, India**.
* **Sept 2025:** Presented findings on *Three decades of snow water equivalent dynamics in the Po River Basin* at the **IMC 2025, Innsbruck, Austria**. [Read more](/publications/).

### From the Blog

{% for post in site.posts limit:3 %}
<div class="list__item">
  <article class="archive__item">
    <p class="archive__item-excerpt" itemprop="description">
      <strong>{{ post.date | date: "%b %Y" }}:</strong> <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
    </p>
  </article>
</div>
{% endfor %}

<p style="margin-top: 20px;">
  <a href="/year-archive/" class="btn btn--info btn--small">View All Posts</a>
</p>