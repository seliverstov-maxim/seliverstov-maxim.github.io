$(document).ready(function() {

  $("#owl-examples").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
      navigationText: [
        "<i class='icon-chevron-left icon-white'><</i>",
        "<i class='icon-chevron-right icon-white'>></i>"
      ]

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

});
