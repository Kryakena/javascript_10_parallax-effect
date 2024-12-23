# Параллакс эффект

Источник: видео "Как сделать параллакс эффект на CSS HTML jQuery. Туториал // Как это сделать? // 
Фрилансер по жизни" https://vkvideo.ru/video-125918837_456239139?entrypoint=list_all

1. скачать изображение горы в тумане для заднего плана и 2х фотографий гор для переднего плана.
Также скачать гифку с туманом

2. создаем создаем файлы index.html, style.css, script.js в папке проекта

3. в файле index.html готовим шаблон

```html
<!--сообщаем браузеру, как стоит обрабатывать эту страницу-->
<!DOCTYPE html>
<!--оболочка документа, указываем язык содержимого-->
<html lang="ru">
<!--заголовок страницы, контейнер для других важных данных (не отображается)-->
<head>
    <!--заголовок страницы в браузере-->
    <title>Параллакс-эффект: Горы</title>
    <!--подключаем CSS-->
    <link rel="stylesheet" href="style.css">
    <!--кодировка страницы-->
    <meta charset="utf-8">
    <!--адаптив-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
</head>
<!--отображаемое тело страницы-->
<body>
<!--оболочка для демонстрации-->
<div class="wrapper">
    <!--контент-->

</div>
<!--подключаем jQuery-->
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
<!--подключаем файл JS скриптов-->
<script src="script.js"></script>
</body>
</html>
```

4. в файле index.html пишем структуру html кода. Для начала создаем общий блок page в разделе body.
 В нем блок parallax. Также в блоке parallax создаем div наших гор - все 3 штуки.
Завершаем блок гифкой с туманом

```html
<div class="wrapper">
 <!--контент-->
 <div class="page">
  <div class="parallax">
   <div class="parallax_mountain parallax_mountain_1"></div>
   <div class="parallax_mountain parallax_mountain_2"></div>
   <div class="parallax_mountain parallax_mountain_3"></div>
   <div class="parallax_fog"></div>
  </div>
 </div>
</div>
```

5. в файле index.html - верстка контентной части. Создаем общий блок контента в body с классом content.
В нем создаем content body, который будет контролировать нашу ширину. А в нем content header для заголовков.
Далее в нем h1 title для большого заголовка и h2 subtitle для маленького заголовка.
В созданном article заполняем два параграфа большим текстом

```html
<div class="content">
 <div class="content_body">
  <div class="content_header">
   <h1 class="content_title">Привет!</h1>
   <h2 class="content_subtitle">Зима близко!</h2>
  </div>
  <div class="content_article">
   <p>
    Lorem ipsum odor amet, consectetuer adipiscing elit. Nec dictum fermentum nullam class faucibus mi. Fusce volutpat per ultricies tristique, libero velit cursus ultrices. Malesuada euismod litora odio dictum fringilla libero. Mattis duis est elementum semper dolor, cubilia non. Vehicula sodales habitasse viverra erat eleifend? Senectus magnis metus finibus erat class.

    Dui turpis libero ultricies; elit nunc ridiculus himenaeos purus. Quam penatibus primis at penatibus dis sagittis laoreet. Aliquam id nunc convallis; finibus ante scelerisque enim tincidunt finibus. Efficitur sagittis augue etiam turpis viverra interdum himenaeos blandit integer. Litora ultrices interdum dis, mi himenaeos nulla. Metus nec convallis leo cubilia at sodales mollis. Nam orci cubilia nisi metus netus, elementum ut posuere. Aliquet eleifend donec hac volutpat sollicitudin laoreet? Mi dapibus dapibus mus vulputate fusce accumsan; tempor ante.

    Massa netus nunc felis hac ante. Vel a tristique, dui laoreet leo odio vivamus. Sodales nulla fermentum porta blandit habitasse. Sollicitudin aptent magna metus ultricies vel porttitor phasellus mauris. Eget platea consectetur etiam phasellus eget auctor vulputate ullamcorper maecenas. Posuere aptent donec vulputate primis a felis sit penatibus purus. Purus pulvinar commodo orci ante dolor fusce justo. Gravida conubia nam felis varius litora faucibus est magnis morbi.

    Lectus bibendum platea montes dictumst viverra metus eros. Auctor maecenas proin massa scelerisque proin netus. Diam condimentum sapien habitant; bibendum conubia et. Aptent sagittis fusce nibh dictumst dignissim cubilia mus. Cursus ipsum finibus egestas leo aptent consequat fermentum rhoncus scelerisque. Conubia himenaeos cursus blandit suspendisse a varius litora tortor. Facilisis natoque sagittis inceptos consequat vestibulum pretium sollicitudin. Posuere accumsan dignissim dictum tempus etiam facilisi. Risus vitae habitasse etiam, nulla dapibus sit.

    Acursus rutrum aenean habitasse; potenti congue. Nisl sodales natoque amet nullam dictum consectetur sollicitudin aptent. Tortor sodales cursus morbi nibh condimentum dapibus condimentum. Egestas lectus sociosqu elementum iaculis tristique. Dui augue neque primis in; donec porta arcu. Aenean nibh gravida curae varius; arcu duis. Est sapien tortor euismod purus himenaeos litora. Vestibulum scelerisque ante scelerisque et rhoncus fermentum ad? Leo litora consectetur auctor blandit ultrices augue.
   </p>
   <p>
    Lorem ipsum odor amet, consectetuer adipiscing elit. Nec dictum fermentum nullam class faucibus mi. Fusce volutpat per ultricies tristique, libero velit cursus ultrices. Malesuada euismod litora odio dictum fringilla libero. Mattis duis est elementum semper dolor, cubilia non. Vehicula sodales habitasse viverra erat eleifend? Senectus magnis metus finibus erat class.

    Dui turpis libero ultricies; elit nunc ridiculus himenaeos purus. Quam penatibus primis at penatibus dis sagittis laoreet. Aliquam id nunc convallis; finibus ante scelerisque enim tincidunt finibus. Efficitur sagittis augue etiam turpis viverra interdum himenaeos blandit integer. Litora ultrices interdum dis, mi himenaeos nulla. Metus nec convallis leo cubilia at sodales mollis. Nam orci cubilia nisi metus netus, elementum ut posuere. Aliquet eleifend donec hac volutpat sollicitudin laoreet? Mi dapibus dapibus mus vulputate fusce accumsan; tempor ante.

    Massa netus nunc felis hac ante. Vel a tristique, dui laoreet leo odio vivamus. Sodales nulla fermentum porta blandit habitasse. Sollicitudin aptent magna metus ultricies vel porttitor phasellus mauris. Eget platea consectetur etiam phasellus eget auctor vulputate ullamcorper maecenas. Posuere aptent donec vulputate primis a felis sit penatibus purus. Purus pulvinar commodo orci ante dolor fusce justo. Gravida conubia nam felis varius litora faucibus est magnis morbi.

    Lectus bibendum platea montes dictumst viverra metus eros. Auctor maecenas proin massa scelerisque proin netus. Diam condimentum sapien habitant; bibendum conubia et. Aptent sagittis fusce nibh dictumst dignissim cubilia mus. Cursus ipsum finibus egestas leo aptent consequat fermentum rhoncus scelerisque. Conubia himenaeos cursus blandit suspendisse a varius litora tortor. Facilisis natoque sagittis inceptos consequat vestibulum pretium sollicitudin. Posuere accumsan dignissim dictum tempus etiam facilisi. Risus vitae habitasse etiam, nulla dapibus sit.

    Acursus rutrum aenean habitasse; potenti congue. Nisl sodales natoque amet nullam dictum consectetur sollicitudin aptent. Tortor sodales cursus morbi nibh condimentum dapibus condimentum. Egestas lectus sociosqu elementum iaculis tristique. Dui augue neque primis in; donec porta arcu. Aenean nibh gravida curae varius; arcu duis. Est sapien tortor euismod purus himenaeos litora. Vestibulum scelerisque ante scelerisque et rhoncus fermentum ad? Leo litora consectetur auctor blandit ultrices augue.
   </p>
  </div>
 </div>
</div>
```

6. в файл style.css вставляем шаблон

```css
/*Обнуление*/
*,*:before,*:after{
padding: 0;
margin: 0;
border: 0;
box-sizing: border-box;
}
html,body{
height: 100%;
}
/*Стили для демонстрации*/
body{
font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.wrapper{
width: 100%;
min-height: 100%;
overflow: hidden;
}
/*Основные стили*/
```

7. в файл style.css вставляем классы из html

```css
.page {}
.parallax {}
.parallax_mountain {}
.parallax_mountain_1 {}
.parallax_mountain_2 {}
.parallax_mountain_3 {}

.parallax_fog {}

.content {}
.content_body {}
.content_header {}
.content_title {}
.content_subtitle {}
.content_article {}
```

8. в файле style.css стандартно заполняем page

```css
.page {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
```

9. в файл style.css parallax, который содержит горы-туман. Контент (текст) уедет вниз на второй экран

```css
.parallax {
    position: relative;
    height: 100%;
}
```

10. в файл style.css заполняем общий класс горы

```css
.parallax_mountain {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
```
11. в файл style.css вставляем в другие 3 класса 3 картинки с горами

```css
.parallax_mountain_1 {
    background: url('../img/parallax_mountain.jpg') 0 0 / cover no-repeat;
}
```