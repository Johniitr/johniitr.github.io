---
title: "Research Topics (Tags)"
layout: tags
permalink: /tags/
author_profile: true
---

<div class="archive-tags">
  {% assign tags = site.tags | sort %}
  {% for tag in tags %}
    {% assign tag_name = tag | first %}
    <a href="/tags/#{{ tag_name | slugify }}" class="btn btn--info btn--small" style="margin-right: 5px; margin-bottom: 5px;">
      <i class="fas fa-tag"></i> {{ tag_name }}
    </a>
  {% endfor %}
</div>

<hr />