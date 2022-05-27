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
// Desafio
let funcionario = {
    supervisores: ['Milenna', 'João', 'Williams'],
    baterPonto(hora) {
        if (hora <= 8) {
            return 'normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.baterPonto(9));
// never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco < 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
//# sourceMappingURL=tipagem-expl%C3%ADcita.js.map