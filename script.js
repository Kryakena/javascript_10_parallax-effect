$(document).ready(function () {
    $window.scroll(function(event){
        var s=$(this).scrollTop(); //s - пиксели, которые мы прокручиваем в окне браузера
        var w=$(this).outerWidth(); //w - какая ширина окна, чтобы на неё опираться
        var h=$('.content').outerHeight(); //h - высота контентной части
        var h_b=$('.parallax').outerHeight(); //h - высота верхнего блока
    });
});