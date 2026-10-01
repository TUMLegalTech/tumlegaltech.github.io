$(document).ready(function() {
  // Init Masonry — skip the people and projects pages (CSS grid there)
  var $grid = $('.grid').not('.people .grid, .projects .grid').masonry({
    gutter: 10,
    horizontalOrder: true,
    itemSelector: '.grid-item',
    transitionDuration: 0
  });
  // Layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
});
