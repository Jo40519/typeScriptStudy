"use strict";
function saudarComOla(pessoa) {
    console.log(`Olá ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joooao';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${pessoa.nome} ${sobrenome} `);
    },
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('Lobato');
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}, minha última compra foi ${this.ultimaCompra}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
meuCliente.saudar('Solo');
meuCliente.ultimaCompra.toLocaleDateString();
//# sourceMappingURL=interfaces.js.map