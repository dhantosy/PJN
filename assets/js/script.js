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
    nextElement($('#kegiatanSosialForm_1'));
    return false;
  })
  
  function nextElement(element){ 
    if (current_id !== 9) {
      var newElement = element.clone();
      var id = current_id + 1;
      var field = $('input', newElement).attr("id");

      current_id = id;
      element.data('count', id);     
      newElement.attr("id",element.attr("id").split("_")[0]+"_"+id);
      newElement.data('id',id);
      
      $('input', newElement).attr("id", field.split("_")[0]+"_"+id );
      $('select', newElement).attr("id", field.split("_")[0]+"_"+id );
      newElement.appendTo(element.parent());
    }
  }

  $('body').on("click", '.btn__removeClone', function() {
    $(this).parents('.can-clone').remove();
  });

});