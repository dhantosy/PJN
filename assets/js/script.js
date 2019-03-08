$(document).ready(function () {

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

  $("#videoModal").on('hidden.bs.modal', function (e) { 
    var $this = $(this); 
    var $frame = $this.find('iframe'); 
    $frame.attr("src", $frame.attr("src")); 
  });

  $("input[name=status]").on("change", function() {
    var test = $(this).val();

    if (test === "siswa") {
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