---
layout: single   # <--- CHANGED: 'single' allows the right sidebar
author_profile: true
title: "John Mohd Wani" # Required for single layout to look good

# 1. THE HEADER PHOTO CONFIGURATION
header:
  overlay_image: /assets/images/IMG_1742.jpg # Replace with your file name
  overlay_filter: 0.5 # Darkens image (0.0 to 1.0) so white text is readable
  caption: "Photo credit: [**John Wani**]()"
  actions: # Optional: Add a button on top of the photo
    - label: "Download CV"
      url: "/assets/documents/john_wani_vitae_cv.pdf"

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

## 📢 Latest Updates

<div class="grid__wrapper">

  <div class="grid__item">
    <h3>🎤 Recent Presentations</h3>
    <ul>
      <li>
        <strong>Oct 2025:</strong> Presented findings on <em>Impact of forest disturbances on snow dynamics</em> at the <strong>XII IAHS 2025, Roorkee, India</strong>.
      </li>
      <li>
        <strong>Sept 2025:</strong> Presented findings on <em>Three decades of snow water equivalent dynamics</em> at the <strong>IMC 2025, Innsbruck, Austria</strong>. <a href="/publications/">[Read more]</a>
      </li>
    </ul>
  </div>

  <div class="grid__item">
    <h3>📝 From the Blog</h3>
    <ul>
      {% assign posts = site.posts | sort: 'date' | reverse | limit: 3 %}
      {% for post in posts %}
      <li>
        <strong>{{ post.date | date: "%b %Y" }}:</strong> <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
      {% endfor %}
    </ul>
    <p><a href="/year-archive/" class="btn btn--info btn--small">View All Posts</a></p>
  </div>

</div>

