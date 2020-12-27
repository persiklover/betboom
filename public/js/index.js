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
}); // Подать заявку

var $formSlider = $(".form-steps");

function onFormSubmit() {
  console.log("Submit!");
  $formSlider.trigger("next.owl.carousel");
}

function onFromSliderChanged(event) {
  var current = event.item.index + 1;
  var total = event.item.count - 3;
  var $step = $formSlider.find(".form-step")[current - 1];
  var title = $step.dataset.title;
  $(".js-form-current").text(current);
  $(".js-form-total").text(total);
  $formSlider.find(".owl-dots").attr("hidden", current > 2);
  $(".form__title-prefix").attr("hidden", current > 2);

  if (title) {
    $(".js-form-title").text(title);
  }
}

$formSlider.addClass("owl-carousel").owlCarousel({
  loop: false,
  nav: false,
  dots: true,
  items: 1,
  margin: 1,
  mouseDrag: false,
  touchDrag: false,
  onInitialized: onFromSliderChanged,
  responsive: {
    0: {
      autoHeight: true
    },
    768: {
      autoHeight: false
    }
  }
}).on("changed.owl.carousel", onFromSliderChanged);
$(".js-form-next").click(function (e) {
  e.preventDefault();
  $formSlider.trigger("next.owl.carousel");
});
$(".js-form-prev").click(function (e) {
  e.preventDefault();
  $formSlider.trigger("prev.owl.carousel");
});
$(".form").submit(function (e) {
  e.preventDefault();
  onFormSubmit();
}); // Галерея

var $gallery = $('.gallery');
$gallery.children().each(function (index) {
  $(this).attr('data-position', index);
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
$(document).on('click', '.gallery .owl-item > *', function () {
  // BUG: решить, что делать, когда position < prevPosition
  var speed = 300;
  var position = $(this).data('position');
  var len = position - prevPosition;
  prevPosition = position;

  for (var i = 0; i < len; i++) {
    $gallery.trigger('next.owl.carousel', [speed]);
  }
});