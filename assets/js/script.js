$(document).ready(function () {

  $('.section__tab--title a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $('.slider__container').slick({
    prevArrow: '<i class="icon-left"></i>',
    nextArrow: '<i class="icon-right"></i>',
    fade: true
  });

  $("#videoModal").on('hidden.bs.modal', function (e) { 
    var $this = $(this); 
    var $frame = $this.find('iframe'); 
    $frame.attr("src", $frame.attr("src")); 
  });

});