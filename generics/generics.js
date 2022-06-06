"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./../classes/classes");
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado(27));
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
console.log(avaliacoes);
// Class com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria(3, 7).executar())
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 8).executar());
class DiferenacaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/ ${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `A difernça é de ${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const novo = new classes_1.Data(1, 1, 2020);
const d2 = new classes_1.Data(23, 2, 2020);
console.log(new DiferenacaEntreDatas(novo, d2).executar());
//# sourceMappingURL=generics.js.map