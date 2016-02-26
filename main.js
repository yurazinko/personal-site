// Navigation menu on top
$(function(f) {
    var element = f('.navbar');
    f(window).scroll(function() {
        element['fade' + (f(this).scrollTop() > 400 ? 'In' : 'Out')](300);
    });
});

// Scrolling to elements
$(document).ready(function() {
    $('a[href^="#"], a[href^="."]').click(function() { 
        var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500); 
        }
        return false; 
    });
});


$('.toggle').click(function (event) {
	event.preventDefault();
	var target = $(this).attr('href');
	$(target).toggleClass('hidden show');
});