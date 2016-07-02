$(document).ready(function() {
  $("#owl-examples").owlCarousel({
    navigation : true,
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem: true,
    navigationText: [
      "<span class='glyphicon glyphicon-menu-left' aria-hidden='true'></span>",
      "<span class='glyphicon glyphicon-menu-right' aria-hidden='true'></span>"
    ]
  });
});
