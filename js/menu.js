$(document).ready(function() {
	$(".burger_btn").on("click", function() {
		$("nav.burger_nav > ul").toggleClass("open");
	});

	$("#nav").on("click", "a", function(event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id = $(this).attr("href");

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		var top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$("body,html").animate({scrollTop: top}, 800);
	});
});

var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки
	$(document).ready(function() {
    	$(window).scroll(function () { // При прокрутке попадаем в эту функцию
      	/* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      	if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      	else $('#top').fadeOut();
    });
    	$('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      	/* Плавная прокрутка наверх */
      	$('body, html').animate({
        	scrollTop: 0
      	}, delay);
    });
  });
