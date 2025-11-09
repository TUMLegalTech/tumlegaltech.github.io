---
layout: page
permalink: /teaching/
title: teaching
description: Courses at the Chair
nav: true
nav_order: 2
display_categories: ["2025", "2024/25"]
horizontal: false
---

<!-- pages/teaching.md -->
<div class="teaching">
{%- if site.enable_teaching_categories and page.display_categories %}
  <!-- Display categorized courses -->
  {%- for category in page.display_categories -%}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_courses = site.teaching | where: "category", category -%}
  {%- assign sorted_courses = categorized_courses | sort: "importance" %}
  <!-- Generate cards for each course -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for course in sorted_courses -%}
      {% include courses_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for course in sorted_courses -%}
      {% include courses.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display courses without categories -->
  {%- assign sorted_courses = site.courses | sort: "importance" -%}
  <!-- Generate cards for each course -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for course in sorted_courses -%}
      {% include courses_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for course in sorted_courses -%}
      {% include courses.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>
