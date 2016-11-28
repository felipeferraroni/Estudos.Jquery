/* Aula 04 de Java Script */

$(document).ready(function () {

    // First Marca a primeira tag do seletor que encontrar
    $("tbody tr:first").css("background-color", "#CCCCCC");

    // Last Marca a ultima tag do seletor que encontrar
    $("tbody tr:last").css("background-color", "#CCCCCC");

    // Exceção no seletor
    $("tbody tr:not(tbody tr:last )").css("color", "#555555");

    // Even Seleção pares
    $("tbody tr:even").css("background-color", "#fffacd");

    // Odd Seleão Pares
    $("tbody tr:odd").css("background-color", "#b0e0e6");

    // Indece Igual 
    $("tbody tr:eq(4)").css("background-color", "#00ced1");

    // Maior que 4
    $("tbody tr:gt(4)").css("color", "#800000");

    // Menor que quatro
    $("tbody tr:lt(4)").css("color", "#0000ff");

    //Animação
    $("tbody td:animated").toggleClass("ccolor");

    $(":header").css("color", "#006400");

    // Seletor de Animação
    function animateIt() {
        $("#mover").slideToggle("slow", animateIt);
    }

    animateIt();
});