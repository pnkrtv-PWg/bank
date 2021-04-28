$(document).ready(function () {
    //big slider
    $('.main-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    // news slider
    $('.news-slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow: '<button type="button" class="slick-prev"><span class="mdi mdi-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="mdi mdi-chevron-right"></span></button>',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    variableWidth: false,
                }
            }
        ]
    });
});

$(document).ready(function () {
    var leftmarg = (($(window).width() - $('.container').width()) / 2) - 120;
    var rightmarg = (($(window).width() - $('.container').width()) / 2) - 150;
    
    $('.news-slider').css('padding-left', leftmarg);
    if ($(window).width() < 1025) {
        var leftmarg = (($(window).width() - $('.container').width()) / 2);
        $('.news-slider').css('padding-left', leftmarg);
    }

    $('.news-slider').css('padding-right', rightmarg);
    if ($(window).width() < 1025) {
        var rightmarg = (($(window).width() - $('.container').width()) / 2);
        $('.news-slider').css('padding-right', rightmarg);
    }

    // news slider arrow
    $('.news .slick-next.slick-arrow').css('right', rightmarg - 10);
    $('.news .slick-prev.slick-arrow').css('right', rightmarg + 25);
    if ($(window).width() < 1300) {
        $('.news .slick-next.slick-arrow').css('right', rightmarg - 0);
        $('.news .slick-prev.slick-arrow').css('right', rightmarg + 30);
    }
    if ($(window).width() < 576) {
        var leftmarg = (($(window).width() - $('.container').width()) / 2);
        $('.news-slider').css('padding-left', leftmarg);
    }
    if ($(window).height() < 501) {
        var leftmarg = (($(window).width() - $('.container').width()) / 2);
        $('.news-slider').css('padding-left', leftmarg);
    }
});

$(document).ready(function () {
    const BackTo = document.querySelector(".back-to");
    window.addEventListener("scroll",scrollfunction);
    function scrollfunction(){
        if(window.pageYOffset>300){
            if(!BackTo.classList.contains("enter")){
             BackTo.classList.remove("exit");
             BackTo.classList.add("enter");
            BackTo.style.display="block";
            }
        }
    
        else{
         if(BackTo.classList.contains("enter")){
             BackTo.classList.remove("enter"); 
         BackTo.classList.add("exit");
         setTimeout (function(){
             BackTo.style.display="none";}, 250);
        }
        }
    }   
    
    BackTo.addEventListener("click",topmove);
    function topmove(){
        window.scrollTo(0,0);
    }
});

//MAP
if ($('*').is('#map')) {
  function initMap() {
    if ($(window).width() < 768) {
          var lat = 48.52325356156942;
          var lng = 23.501049772500366;
      } else {
          var lat = 48.52325356156942;
          var lng = 23.501049772500366;
      }
      map = new google.maps.Map(document.getElementById("map"), {
          center: {
              lat: lat, lng: lng
          }
          , zoom: 17, mapTypeId: "roadmap", panControl: !1, zoomControl: !1, scaleControl: !1, disableDefaultUI: !0, styles: [

          ],
      }
      );

     var marker = new google.maps.Marker({
          position: new google.maps.LatLng(48.523617, 23.5011501),
          map: map,
          icon: {
              url: "image/pin.svg",
              scaledSize: new google.maps.Size(40, 40)
          }
      });
  }
}
