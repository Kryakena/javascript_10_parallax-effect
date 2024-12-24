$(document).ready(function () {
    $window.scroll(function(event){
        var s=$(this).scrollTop(); //s - пиксели, которые мы прокручиваем в окне браузера
        var w=$(this).outerWidth(); //w - какая ширина окна, чтобы на неё опираться
        var h=$('.content').outerHeight(); //h - высота контентной части
        var h_b=$('.parallax').outerHeight(); //h - высота верхнего блока
        var p = s/h*100; //p - вычислим % (прокрутка разделенная на всю высоту контентой части * 100
        var p_b = s/h_b*100; ////p_b - вычислим % (прокрутка только верхней части)
        var o = 1-1/100*p_b; //o - вычисление будущей непрозрачности

        var z_1=1+(w/10000*p_b); //z_1 - прокрутка тумана вместе с текстом
      $('.parallax_fog').css('transform','scale('+z_1+')'); //непрозрачность тумана
      $('.parallax_fog').css('opacity',o); //значение o (английская буква)

        var z_2=1+(w/5000000*p); //прокрутка всей контентной части
      $('.parallax_mountain_1').css('transform','scale('+z_2+')');
      //гору на заднем плане увеличить чуть-чуть при прокрутке контента

        var hr=w/2000*p_b; //hr - горизонталь
        var z_3=1+(w*0.000005*p_b);
      $('.parallax_mountain_2').css('transform','translate3d('+hr+'px,0,0)','scale('+z_3+')');

        var hr_2=w/1500*p_b; //hr - горизонталь
        var z_4=1+(w*0.00001*p_b);
      $('.parallax_mountain_3').css('transform','translate3d('+hr_2+'px,0,0)','scale('+z_4+')');
    });
});