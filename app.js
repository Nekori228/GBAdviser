function changeColor() {
    var button = document.querySelector('.button');
}

$(document).ready(function() {
    $("ul li a").click(function() {
        // Убираем класс 'active' у всех элементов списка
        $("ul li a").removeClass("active");

        // Добавляем класс 'active' только к выбранному элементу
        $(this).addClass("active");
    });
});