/* Aula 04 de Java Script */

$(document).ready(function () {
    //Seletor de descendentes
    $("div span").css("background-color", "yellow");
    // Filhos do elemento
    $("li > ul").css("color", "red");
    // Elementos todos irmões
    $("#item1_1 ~ li").css("color", "green");
    // Elementos 1 irmão
    $("#item1_1 + li").css("color", "violet");

});