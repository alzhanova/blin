$(document).ready(function(){
	$('.slider').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1000,
		dots: true,
		slidesToShow: 1,
		centerPadding: '10px',
		responsive: [
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 805,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1
      }
    }
  ]
    });
    $('.interier').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1000,
		dots: true,
		slidesToShow: 3,
		centerPadding: '10px',
		responsive: [
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 805,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1
      }
    }
  ]
    });
});