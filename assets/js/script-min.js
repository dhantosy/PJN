$(document).ready(function(){$(window).width()<481&&$(window).scroll(function(){$(document).scrollTop()>300?($("header").addClass("active"),$(".nav__mobile").addClass("active")):($("header").removeClass("active"),$(".nav__mobile").removeClass("active"))}),$(".hamburger").on("click",function(){$(this).toggleClass("is-active"),$(".nav__mobileMenu").toggleClass("active"),$("body").toggleClass("active"),$("header").hasClass("active")&&($(".nav__mobile").hasClass("active")?$(this).removeClass("active"):$(this).addClass("active"))}),$(".nav__mobileMenu--item a").on("click",function(){$(".hamburger").removeClass("is-active"),$(".nav__mobileMenu").removeClass("active"),$("body").removeClass("active"),$(".nav__mobile").removeClass("active")}),$("#select-tab").on("change",function(t){$(".section__tab--title a").eq($(this).val()).tab("show")}),$("section").hasClass("section__gallery")&&$(".gallery__item a").fancybox({arrows:!0,helpers:{title:{type:"outside"}},afterLoad:function(){var t=this.title?this.title:" ",a=$(this.element).find("img").attr("alt")?$(this.element).find("img").attr("alt"):" ";this.title="<h4>"+t+"</h4>"+a+"<br />"}}),$(".section__tab--title a").click(function(t){t.preventDefault(),$(this).tab("show")}),$(".slider__container").slick({prevArrow:'<i class="icon-left"></i>',nextArrow:'<i class="icon-right"></i>',fade:!0}),$("#videoModal").on("hidden.bs.modal",function(t){var a=$(this).find("iframe");a.attr("src",a.attr("src"))}),$("input[name=status]").on("change",function(){"siswa"===$(this).val()?($("#data-sekolah").show(),$("#data-universitas").hide()):($("#data-universitas").show(),$("#data-sekolah").hide())});var t=1;function a(a){var e=a.clone(),i=t+1,s=$("input",e).attr("id");$("select",e).attr("name");t=i,a.data("count",i),e.find("input").val(""),e.attr("id",a.attr("id").split("_")[0]+"_"+i),e.data("id",i),$("input",e).attr("id",s.split("_")[0]+"_"+i),$("input",e).attr("name",s.split("_")[0]+"_"+i),$("select",e).attr("id",s.split("_")[0]+"_"+i),$("select",e).attr("name",s.split("_")[0]+"_"+i),e.appendTo(a.parent())}$("#tambah-kegiatan-sosial").on("click",function(){return a($("#kegiatanSosialForm_1")),!1}),$("#tambah-prestasi").on("click",function(){return a($("#prestasiForm_1")),!1}),$("#tambah-organisasi").on("click",function(){return a($("#organisasiForm_1")),!1}),$("body").on("click",".btn__removeClone",function(){$(this).parents(".can-clone").remove()})});