$(document).ready(function(){$(".hamburger").on("click",function(){$(this).toggleClass("is-active"),$(".nav__mobileMenu").toggleClass("active"),$("body").toggleClass("active"),$(".nav__mobile").toggleClass("active")}),$(".nav__mobileMenu--item a").on("click",function(){$(".hamburger").removeClass("is-active"),$(".nav__mobileMenu").removeClass("active"),$("body").removeClass("active"),$(".nav__mobile").removeClass("active")}),$("#select-tab").on("change",function(t){$(".section__tab--title a").eq($(this).val()).tab("show")}),$("section").hasClass("section__gallery")&&$(".gallery__item a").fancybox({arrows:!0,helpers:{title:{type:"outside"}},afterLoad:function(){var t=this.title?this.title:" ",a=$(this.element).find("img").attr("alt")?$(this.element).find("img").attr("alt"):" ";this.title="<h4>"+t+"</h4>"+a+"<br />"}}),$(".section__tab--title a").click(function(t){t.preventDefault(),$(this).tab("show")}),$(".slider__container").slick({prevArrow:'<i class="icon-left"></i>',nextArrow:'<i class="icon-right"></i>',fade:!0}),$("#videoModal").on("hidden.bs.modal",function(t){var a=$(this).find("iframe");a.attr("src",a.attr("src"))}),$("input[name=status]").on("change",function(){"siswa"===$(this).val()?($("#data-sekolah").show(),$("#data-universitas").hide()):($("#data-universitas").show(),$("#data-sekolah").hide())});var t=1;function a(a){var i=a.clone(),e=t+1,n=$("input",i).attr("id");$("select",i).attr("name");t=e,a.data("count",e),i.find("input").val(""),i.attr("id",a.attr("id").split("_")[0]+"_"+e),i.data("id",e),$("input",i).attr("id",n.split("_")[0]+"_"+e),$("input",i).attr("name",n.split("_")[0]+"_"+e),$("select",i).attr("id",n.split("_")[0]+"_"+e),$("select",i).attr("name",n.split("_")[0]+"_"+e),i.appendTo(a.parent())}$("#tambah-kegiatan-sosial").on("click",function(){return a($("#kegiatanSosialForm_1")),!1}),$("#tambah-prestasi").on("click",function(){return a($("#prestasiForm_1")),!1}),$("#tambah-organisasi").on("click",function(){return a($("#organisasiForm_1")),!1}),$("body").on("click",".btn__removeClone",function(){$(this).parents(".can-clone").remove()})});