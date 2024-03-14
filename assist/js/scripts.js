jQuery(document).ready(function() {

  let box = document.getElementById("box");
    jQuery(".search-bar .search-input input").click(function(){
      box.style.display = "block";
      jQuery(".search-bar .search-input").addClass("sug-active");
      jQuery(".search-bar form").addClass("form-shawdo");
    });
    window.addEventListener('mouseup', function(event){
      var let = document.getElementById('box');
        if(event.target != box && event.target.parentNode != box){
           box.style.display = 'none';
           jQuery(".search-bar .search-input").removeClass("sug-active");
          jQuery(".search-bar form").removeClass("form-shawdo");
        }
  }); 

    $(".carousel-one").owlCarousel({
      loop: true,
      items: 5,
      margin: 20,
      autoplay: true,
      nav: false,
      dots: false,
      responsive : {
        0 : {
          items: 1,
        },
        500: {
          items:2,
        },
        768 : {
          items: 3,
        },
        992: 5,
      }
  });





});