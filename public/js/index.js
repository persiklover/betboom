"use strict";

console.log('It works!');

function scrollToElement(selector, callback) {
  $('html').animate({
    scrollTop: $(selector).offset().top + 'px'
  }, 500, callback);
}

$('a[href^="#"]').click(function (e) {
  e.preventDefault();
  scrollToElement($(this).attr('href'));
}); // Your code goes here...

var $gallery = $('.gallery');
$gallery.children().each(function (index) {
  $(this).attr('data-position', index); // NB: .attr() instead of .data()
});
$gallery.addClass("owl-carousel").owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  items: 4,
  margin: 10,
  responsive: {
    0: {
      items: 1,
      mouseDrag: true,
      touchDrag: true
    },
    768: {
      items: 4,
      mouseDrag: false,
      touchDrag: false
    }
  }
});
var prevPosition = 0;
$(document).on('click', '.owl-item > *', function () {
  // BUG: решить, что делать, когда position < prevPosition
  var speed = 300;
  var position = $(this).data('position');
  var len = position - prevPosition;
  console.log(prevPosition, position, len);
  prevPosition = position;

  for (var i = 0; i < len; i++) {
    $gallery.trigger('next.owl.carousel', [speed]);
  }
});