"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
exports.Data = Data;
const aniversario = new Data(3, 10, 2000);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
// Desafio Produto
// Atributos: Nome, preco e Desconto
// Criar o construtor
// Obs: Desconto é Opcional(desconto é 0)
// Obs2: Criar dois produtos: passando dois e três params
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        const produto1 = new Produto('', 1, 0);
        produto1.nome = 'Sabão';
        produto1.preco = 0.50;
        produto1.desconto = 0;
        const produto2 = new Produto('', 1, 0);
        produto2.nome = 'Ventilador';
        produto2.preco = 120;
        produto2.desconto = 50;
    }
}
class Carro {
    constructor(marca, model, velocidadeMaxima = 200) {
        this.marca = marca;
        this.model = model;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelociade = this.velocidadeAtual + delta;
        const velocidadeValida = this.velocidadeAtual >= 0 && this.velocidadeMaxima <= 0;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelociade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(15);
    }
    freiar() {
        return this.alterarVelocidade(-15);
    }
}
const carro1 = new Carro('Chvrolet', 'Cobalt', 185);
Array(50).fill(0).forEach(() => {
    carro1.acelerar();
});
console.log(carro1.acelerar());
class Ferrari extends Carro {
}
const f40 = new Ferrari('Ferrari', 'F40');
console.log(f40.marca);
console.log(f40.model);
console.log(f40.acelerar());
console.log(f40.freiar());
// getters & setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(value) {
        if (value >= 0 && value <= 120) {
            this._idade = value;
        }
    }
}
const novaPessoa = new Pessoa();
console.log(novaPessoa.idade = 10);
// Singleton
class Unico {
    constructor() { }
    getInstance() {
        return Unico.instance;
    }
}
Unico.instance = new Unico;
// Somente leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Boing-737', 'Gol');
//# sourceMappingURL=classes.js.map