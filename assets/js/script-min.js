$(document).ready(function(){$(".section__tab--title a").click(function(t){t.preventDefault(),$(this).tab("show")}),$(".slider__container").slick({prevArrow:'<i class="icon-left"></i>',nextArrow:'<i class="icon-right"></i>',fade:!0}),$("#videoModal").on("hidden.bs.modal",function(t){var a=$(this).find("iframe");a.attr("src",a.attr("src"))}),$("input[name=status]").on("change",function(){"siswa"===$(this).val()?($("#data-sekolah").show(),$("#data-universitas").hide()):($("#data-universitas").show(),$("#data-sekolah").hide())});var t=1;function a(a){if(9!==t){var i=a.clone(),n=t+1,e=$("input",i).attr("id");t=n,a.data("count",n),i.attr("id",a.attr("id").split("_")[0]+"_"+n),i.data("id",n),$("input",i).attr("id",e.split("_")[0]+"_"+n),$("select",i).attr("id",e.split("_")[0]+"_"+n),i.appendTo(a.parent())}}$("#tambah-kegiatan-sosial").on("click",function(){return a($("#kegiatanSosialForm_1")),!1}),$("#tambah-prestasi").on("click",function(){return a($("#prestasiForm_1")),!1}),$("body").on("click",".btn__removeClone",function(){$(this).parents(".can-clone").remove()})});