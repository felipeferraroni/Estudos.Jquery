/* Aula 09 de Java Script */

$(document).ready(function () {
    $(":button").click(function () {
        // Recupera o atributo title
        //alert($("img").attr("title"));

        // Altera os atributos
        //$("img").attr("src", "../Imagens/img2.jpg")
        //.attr("title", "Imagem 2")
        //.attr("alt", "Iamgem 2");

        //Altera atributos no formato Json
        //$("img").attr({
        //    src: "../Imagens/img2.jpg",
        //    title: "Imagem 2",
        //    alt:"Imagem2"
        //});

        //Remove atributo
        //$("img").removeAttr("title")
        //.removeAttr("alt");

        //$("img").addClass("destaque");

        //$("img").parent().addClass("destaque");

        //$("img").removeClass("destaque");

        $("img").toggleClass("destaque");
    });
});