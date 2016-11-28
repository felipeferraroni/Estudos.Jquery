/* Aula 04 de Java Script */

$(document).ready(function () {

    // Procurando Atributo
    $("a[name]").css("background-color", "#00ff7f");

    // Procura atributo com valor
    $("a:not([name=menu])").css("font-size", "14pt");

    // Procura atributo com valor
    $("a[name=menu]").css("background-color", "#c0c0c0");

    // Contem no atributo
    $("a[href*=Scripts]").css("background-color", "#ffff00");

    // Termina
    $("a[href$=js]").css("color", "#000080");

    // Começa
    $("a[href^=mailto]").css("color", "#FFFFFF");

});