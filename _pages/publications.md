---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 3
use_mediaTUM: false
---

<div class="publications">

{% if page.use_mediaTUM %}
  {% include mediaTUM.html %}
{% else %}

<div class="publication-filters">

  {% assign years = site.scholar.bibliography | map: "year" | uniq | sort %}
  <select id="year-filter">
    <option value="all">All Years</option>
  </select>

  {% assign author_names = site.people | map: "name" %}
  <select id="author-filter">
    <option value="all">All Authors</option>
    {% for author in author_names %}
      <option value="{{ author }}">{{ author }}</option>
    {% endfor %}
  </select>

  <!-- NEW KEYWORD FILTER -->
  <select id="type-filter">
    <option value="all">All Document Types</option>
    <option value="peer-reviewed-conference">Peer Reviewed Technical Conference Papers</option>
    <option value="academic-legal">Academic Legal Literature</option>
    <option value="magazine">Magazine Articles</option>
    <option value="blog">Blog Posts</option>
  </select>

</div>

{% bibliography -f {{ site.scholar.bibliography }} %}

{% endif %}
</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  const yearFilter = document.getElementById('year-filter');
  const authorFilter = document.getElementById('author-filter');
  const typeFilter = document.getElementById('type-filter');

  const yearHeadings = Array.from(
    document.querySelectorAll('.publications h2.bibliography')
  )
    .map(h => (h.textContent || '').trim())
    .filter(t => /^\d{4}$/.test(t));

  const uniqueYears = Array.from(new Set(yearHeadings))
    .sort((a, b) => Number(b) - Number(a));

  yearFilter.querySelectorAll('option:not(:first-child)').forEach(o => o.remove());

  uniqueYears.forEach(y => {
    const opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y;
    yearFilter.appendChild(opt);
  });

  function filterPublications() {
    const selectedYear = yearFilter.value;
    const selectedAuthor = authorFilter.value.split(' ').pop();
    const selectedType = typeFilter.value;

    // IMPORTANT: data-* live on the .row (from _layouts/bib.html), not on <li>
    const rows = Array.from(
      document.querySelectorAll('.publications .row[data-year][data-author]')
    );

    // Filter each row, but hide/show its parent <li>
    rows.forEach(row => {
      const li = row.closest('li');
      if (!li) return;

      const yearMatch =
        selectedYear === 'all' || row.dataset.year === selectedYear;

      const authorMatch =
        selectedAuthor === 'all' || (row.dataset.author || '').includes(selectedAuthor);

      const typeMatch =
        selectedType === 'all' || (row.dataset.keywords || '').includes(selectedType);

      li.style.display = (yearMatch && authorMatch && typeMatch) ? 'list-item' : 'none';
    });

    // Hide empty year headings + their <ol>
    const yearHeadings = Array.from(
      document.querySelectorAll('.publications h2.bibliography')
    );

    yearHeadings.forEach(heading => {
      const list = heading.nextElementSibling; // should be <ol class="bibliography">
      if (!list || !list.matches('ol.bibliography')) return;

      const anyVisible = Array.from(list.querySelectorAll('li'))
        .some(li => li.style.display !== 'none');

      heading.style.display = anyVisible ? '' : 'none';
      list.style.display = anyVisible ? '' : 'none';
    });
  }

  yearFilter.addEventListener('change', filterPublications);
  authorFilter.addEventListener('change', filterPublications);
  typeFilter.addEventListener('change', filterPublications);

  filterPublications();
});
</script>

<style>
.publication-filters {
  margin-bottom: 2rem;
}

.publication-filters select {
  margin-right: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
