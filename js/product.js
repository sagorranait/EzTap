var owl;

owl = $('.owl-carousel').owlCarousel({
  autoplay: false,
  smartSpeed: 3000,
  loop: true,
  items: 1,
  dots: true,
  slideSpeed: 2000,
  nav: false,
  margin: 70,
  dotsContainer: '#carousel-custom-dots',
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

$('.owl-dot').click(function () {
  owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});