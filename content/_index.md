---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      # Apply a gradient background
      css_class: hbx-bg-gradient
      # Avatar customization
      avatar:
        size: medium
        shape: circle
  
  - block: markdown
    content:
      title: 'My Research'
      subtitle: ''
      text: |-
        I am an early career researcher focused on cryosphere, particularly snow and permafrost processes. My research addresses the fundamental challenge of quantifying and predicting the response of the cryosphere (permafrost, snow) to climate change and its impact on water resources and natural hazards. I apply and develop physically-based models **[GEOtop](https://github.com/geotopmodel/geotop)**, **[GEOframe](https://github.com/geoframecomponents)** to bridge the gap between field observations and theoretical understanding, aiming to reduce uncertainty in water resource predictions for high-altitude regions.

        ---

        ### Supervision & Opportunities
        
        I am actively looking for motivated **Master's students** and potential **PhD candidates** interested in:
        * Modelling of snow and permafrost.
        * Physically-based hydrological modeling.
        * Multi-Modal Comparison of Snow Dynamics in the Nordic Region. (Masters Thesis open for University of Trento students)
        * Many more...

        If you are interested in writing your thesis on these topics, please reach out!

        <a href="mailto:johnmohd.wani@unitn.it" class="btn btn-primary">
          <i class="fas fa-envelope"></i> Contact Me
        </a>
    design:
      columns: '1'

  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 2

  - block: collection
    content:
      title: Recent Publications
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation

  - block: collection
    id: talks
    content:
      title: Recent & Upcoming Talks
      filters:
        folders:
          - events
    design:
      view: card

  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: ''
      text: ''
      page_type: post
      count: 5
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      offset: 0
      order: desc
    design:
      view: card
      spacing:
        padding: [0, 0, 0, 0]
---