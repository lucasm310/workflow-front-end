/*
Mostra a data na tela
*/

;(function(){
    'use strict';
    var dateContainer = document.getElementById('containerDate');

    /* recupera a data e retorna na variavel dateInfo */
    var dateInfo = (function(){
        var today     = new Date()
        ,     date     = today.getDate() + '/' + today.getMonth() + 1 + '/' + today.getFullYear();

        console.log('a data que irá retornar é: '+ date);

        return date;
    })();

    // mostra a data na tela

    dateContainer.appendChild(document.createTextNode(dateInfo));
})();
