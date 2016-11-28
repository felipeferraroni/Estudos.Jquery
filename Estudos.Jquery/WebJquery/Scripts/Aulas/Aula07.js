/* Aula 04 de Java Script */

$(document).ready(function () {

    // Conteudo preenchido
    $("th:contains('Filme 3')").css("background-color", "red");

    //procura conteudo em branco Em branco
    $("td:empty, th:empty").css("background-color", "#DDDDDD");

    // Has busca determindo elemento
    $("td:has(strong)").css("background-color", "#006400");

    $("td:parent").fadeTo(1500, 0.3);
});