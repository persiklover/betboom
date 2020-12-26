console.log('It works!');

function scrollToElement(selector, callback) {
  $('html').animate({
    scrollTop: $(selector).offset().top + 'px'
  }, 500, callback);
}

$('a[href^="#"]').click(function(e) {
  e.preventDefault();
  scrollToElement( $(this).attr('href') );
});

// Your code goes here...

$('.gallery')
  .addClass("owl-carousel")
  .owlCarousel({
    loop: true,
    nav:  false,
    dots: true,
    items:  4,
    margin: 10,
    // onInitialized: onPortfolioSliderUpdate,
    responsive: {
      0: {
        mouseDrag: true,
        touchDrag: true,
      },
      768: {
        mouseDrag: false,
        touchDrag: false,
      }
    }
  })