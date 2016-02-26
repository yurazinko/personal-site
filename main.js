// hide navigation menu on top
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

// show-hide map
$('.toggle').click(function (event) {
	event.preventDefault();
	var target = $(this).attr('href');
	$(target).toggleClass('hidden show');
});


// Scrolling previous-next

function scrollToPosition(element) {
    if (element !== undefined) {
        $(".wrap").scrollTo(element, 800, {
            margin: true
        });
    }
}

$(function() {

    //Create an Array of sections
    var posts = $('.section');
    var position = 0; //Start Position
    var next = $('#next');
    var prev = $('#prev').hide();

    //Better performance to use Id selectors than class selectors
    next.click(function(evt) {
        //Scroll to next position
        prev.show();
        scrollToPosition(posts[position += 1]);
        if (position === posts.length - 1) {
            next.hide();
        }
    });

    prev.click(function(evt) {
        //Scroll to prev position    
        next.show();
        scrollToPosition(posts[position -= 1]);
        if (position === 0) {
            prev.hide();
        }
    });

});
