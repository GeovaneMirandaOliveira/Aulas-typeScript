"use strict";
var buttonTeste = document.getElementById('button');
function somarImplicito(parametro1, parametro2) {
    return parametro1 + parametro2;
}
buttonTeste.addEventListener('click', function () {
    console.log('Funcionou');
});
