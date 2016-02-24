// Navigation menu on top
$(function(f) {
    var element = f('.navbar');
    f(window).scroll(function() {
        element['fade' + (f(this).scrollTop() > 400 ? 'In' : 'Out')](300);
    });
});

// Scrolling to elements
$(document).ready(function() {
    $('a[href^="#"], a[href^="."]').click(function() { // если в href начинается с # или ., то ловим клик
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
});


$('.toggle').click(function (event) {
	event.preventDefault();
	var target = $(this).attr('href');
	$(target).toggleClass('hidden show');
});