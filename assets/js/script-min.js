$(document).ready(function(){$(".section__tab--title a").click(function(i){i.preventDefault(),$(this).tab("show")}),$(".slider__container").slick({prevArrow:'<i class="icon-left"></i>',nextArrow:'<i class="icon-right"></i>',fade:!0}),$("#videoModal").on("hidden.bs.modal",function(i){var t=$(this).find("iframe");t.attr("src",t.attr("src"))})});