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