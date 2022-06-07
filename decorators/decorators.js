"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) {
}
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(a, b) {
    return function (construtor) {
        console.log(`${a} ${b}`);
    };
}
// @logarClasse
// @logarClasseSe(true)
let EletroDomestico = class EletroDomestico {
    constructor() {
        console.log('novo...');
    }
};
EletroDomestico = __decorate([
    decorator('Testando', 1234)
], EletroDomestico);
function logarObjeto(construtor) {
    return class extends construtor {
        constructor(...args) {
            console.log('Antes');
            super(...args);
            console.log('Depois');
        }
    };
}
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(10000.00);
cc.sacar(5000);
console.log(cc.getSaldo());
function congelar(alvo, nomePropriedade, descritor) {
    console.log(alvo);
    console.log(nomePropriedade);
    descritor.writable = false;
}
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo[`_ ${nomePropriedade}`];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Saldo inválido!');
            }
            else {
                alvo[`alvo ${nomePropriedade}`] = valor;
            }
        }
    });
}
//# sourceMappingURL=decorators.js.map