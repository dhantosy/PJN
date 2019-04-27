$(document).ready(function () {

  $("#contact form").on('submit', function(e){
    $('#modal-thankyou').modal('show');
    e.preventDefault();
  });

  if ($(window).width() < 481) {
    $(window).scroll(function() {
      var documentScrolled = $(document).scrollTop();
      if (documentScrolled > 300) {
        $('header').addClass("active");
        $('.nav__mobile').addClass("active");
      } else {
        $('header').removeClass("active");
        $('.nav__mobile').removeClass("active");
      }
    });
  };

  $('.hamburger').on("click", function() {
    $(this).toggleClass("is-active");
    $(".nav__mobileMenu").toggleClass("active");
    $("body").toggleClass("active");

    if ($("header").hasClass("active")) {
      if ($(".nav__mobile").hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
    }
  });

  $('.nav__mobileMenu--item a').on("click", function() {
    $(".hamburger").removeClass("is-active");
    $(".nav__mobileMenu").removeClass("active");
    $("body").removeClass("active");
    $(".nav__mobile").removeClass("active");
  });

  $('#select-tab').on('change', function (e) {
    $('.section__tab--title a').eq($(this).val()).tab('show');
  });

  if ($("section").hasClass("section__gallery")) {
    $(".gallery__item a").fancybox({
      arrows: true,
      helpers: {
        title: {
          type: 'outside'
        }
      },
      afterLoad: function () {
        var title = this.title ? this.title : " ";
        var alt = $(this.element).find('img').attr('alt') ? $(this.element).find('img').attr('alt') : " ";
        this.title = '<h4>' + title + '</h4>' + alt + '<br />';
      }
    });
  }

  $('.section__tab--title a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $('.slider__container').slick({
    prevArrow: '<i class="icon-left"></i>',
    nextArrow: '<i class="icon-right"></i>',
    fade: true
  });

  var videoSrc = $("#videoModal iframe").attr("src");
  $('#videoModal').on('show.bs.modal', function () {
    $("#videoModal iframe").attr("src", videoSrc+"?autoplay=1");
  });

  $("#videoModal").on('hidden.bs.modal', function (e) { 
    var $this = $(this); 
    var $frame = $this.find('iframe'); 
    $frame.attr("src", $frame.attr("src")); 
  });

  $('.animate__contact a').click(function(){
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
    return false;
});

  $("input[name=status]").on("change", function() {
    var inputVal = $(this).val();

    if (inputVal === "siswa") {
      $("#data-sekolah").show();
      $("#data-universitas").hide();
    } else {
      $("#data-universitas").show();
      $("#data-sekolah").hide();
    }
  });

  var current_id = 1;
  $('#tambah-kegiatan-sosial').on("click", function() {
    addFormElement($('#kegiatanSosialForm_1'));
    return false;
  })

  $('#tambah-prestasi').on("click", function() {
    addFormElement($('#prestasiForm_1'));
    return false;
  })

  $('#tambah-organisasi').on("click", function() {
    addFormElement($('#organisasiForm_1'));
    return false;
  })
  
  function addFormElement(element){ 
    var newElement = element.clone();
    var id = current_id + 1;
    var field = $('input', newElement).attr("id");
    var select = $('select', newElement).attr("name");

    current_id = id;
    element.data('count', id);
    newElement.find("input").val("");   
    newElement.attr("id",element.attr("id").split("_")[0]+"_"+id);
    newElement.data('id',id);
    
    $('input', newElement).attr("id", field.split("_")[0]+"_"+id );
    $('input', newElement).attr("name", field.split("_")[0]+"_"+id );
    $('select', newElement).attr("id", field.split("_")[0]+"_"+id );
    $('select', newElement).attr("name", field.split("_")[0]+"_"+id );
    newElement.appendTo(element.parent());
  }

  $('body').on("click", '.btn__removeClone', function() {
    $(this).parents('.can-clone').remove();
  });

});