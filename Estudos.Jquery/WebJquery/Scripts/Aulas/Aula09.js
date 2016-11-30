/* Aula 09 de Java Script */

$(document).ready(function () {

    // seletor de input
    $(":button").click(function () {

        // seletor de input
        $(":input").css("border", "3px solid blue");

        // seletor de input
        $(":password").css("border", "3px solid red");

        // seletor de input
        $(":radio").parent().css("border", "3px solid green");

        // Checkbox
        $(":checkbox").parent().css("border", "3px solid yellow");

        // seletor de input
        $(":selected").css("border", "3px solid violet");

        // seletor de input
        $("textarea").css("border", "3px solid aquamarine");

        // seletor de input
        $(":file").css("border", "3px solid brown");

        // seletor de input
        $(":disabled").css("border", "3px solid coral");

        // seletor de input
        $(":checked").prev().css("border", "3px solid red");
    });

});