$(document).ready(function() {
  // Init Masonry — skip the people page
  var $grid = $('.grid').not('.people .grid').masonry({
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
