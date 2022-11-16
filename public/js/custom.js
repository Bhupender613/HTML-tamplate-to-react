 var swiper1  = new Swiper('.best-seller .swiper-container', {
      slidesPerView: 5,
      spaceBetween: 25,
	  loop:true,
       navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      },
	   breakpoints: {
		1: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		414: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 5,
        },
      }
	  
 });
 
 ////2nd slider///
	 var swiper2 = new Swiper('.free-pattern-slider .free-slider', {
      slidesPerView: 5,
      spaceBetween: 25,
	  loop:true,
       navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
	     breakpoints: {
		1: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		414: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 5,
        },
      }
    });
	 ////2nd slider///
	 var swiper3 = new Swiper('.top-categories-slider .swiper-container', {
      slidesPerView: 5,
      spaceBetween: 25,
	  loop:true,
       navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
      },
	  	     breakpoints: {
		1: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		414: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 5,
        },
      }
    });
	////2nd slider///
	  var swiper4 = new Swiper('.lover-slider', {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
	
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });

$(document).ready(function(){
  $(".toggle").click(function(){
    $(".sidebar").addClass("active-sidebar");
	$(".overlay").addClass("active-overlay");
  });
  $(".sidebar-cross").click(function(){
    $(".sidebar").removeClass("active-sidebar");
	$(".overlay").removeClass("active-overlay");
  });
   $(".overlay").click(function(){
    $(".sidebar").removeClass("active-sidebar");
	$(".overlay").removeClass("active-overlay");
  });

});