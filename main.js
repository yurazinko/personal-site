$(function(f){
    var element = f('.navbar');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 150 ? 'In': 'Out')](300);           
    });
});