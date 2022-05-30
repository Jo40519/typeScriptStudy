// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.Data = void 0;
// class Data {
//     constructor(dia, mes, ano) {
//         this.dia = dia;
//         this.mes = mes;
//         this.ano = ano;
//     }
// }
// exports.Data = Data;
// const aniversario = new Data(3, 10, 2000);
// aniversario.dia = 4;
// console.log(aniversario.dia);
// console.log(aniversario);
// // Desafio Produto
// // Atributos: Nome, preco e Desconto
// // Criar o construtor
// // Obs: Desconto é Opcional(desconto é 0)
// // Obs2: Criar dois produtos: passando dois e três params
// class Produto {
//     constructor(nome, preco, desconto = 0) {
//         this.nome = nome;
//         this.preco = preco;
//         this.desconto = desconto;
//         const produto1 = new Produto('', 1, 0);
//         produto1.nome = 'Sabão';
//         produto1.preco = 0.50;
//         produto1.desconto = 0;
//         const produto2 = new Produto('', 1, 0);
//         produto2.nome = 'Ventilador';
//         produto2.preco = 120;
//         produto2.desconto = 50;
//     }
// }
//# sourceMappingURL=classes.js.map


let filterInt = function (value) {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {
        return Number(value)
    }
    return NaN
}

let strA = '4'
let strB = '5'

let sum = filterInt(strA + strB)
console.log(sum)