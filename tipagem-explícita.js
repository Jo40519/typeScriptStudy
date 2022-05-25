"use strict";
const a = 'Teste TS (web)';
console.log(a);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Larnja"] = 3] = "Larnja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
})(Cor || (Cor = {}));
let minhaCor = Cor.Azul;
console.log(minhaCor);
console.log(Cor.Amarelo, Cor.Larnja);
// tipos em funções
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(a, b) {
    return a * b;
}
let calculo;
calculo = multiplicar;
console.log(multiplicar(6, 5));
