$(document).ready(function(){$(".section__tab--title a").click(function(a){a.preventDefault(),$(this).tab("show")}),$(".slider__container").slick({prevArrow:'<i class="icon-left"></i>',nextArrow:'<i class="icon-right"></i>',fade:!0}),$("#videoModal").on("hidden.bs.modal",function(a){var i=$(this).find("iframe");i.attr("src",i.attr("src"))}),$("input[name=status]").on("change",function(){"siswa"===$(this).val()?($("#data-sekolah").show(),$("#data-universitas").hide()):($("#data-universitas").show(),$("#data-sekolah").hide())})});