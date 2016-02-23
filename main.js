$(function(f){
    var element = f('.navbar');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 400 ? 'In': 'Out')](300);           
    });
});

