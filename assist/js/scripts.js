jQuery(document).ready(function() {

  jQuery(".search-bar .search-input input").click(function(){
    jQuery(".search-sug").slideToggle();
    jQuery(".search-bar .search-input").toggleClass("sug-active");
    jQuery(".search-bar form").toggleClass("form-shawdo");
  })





});