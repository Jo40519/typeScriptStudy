import { Data } from './../classes/classes';
function echoMelhorado<T>(objeto: T): T {
    return objeto
}

console.log(echoMelhorado(27))

const avaliacoes: Array <number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
console.log(avaliacoes)

// Class com Generics

abstract class OperacaoBinaria<T ,R> {
    constructor(public operando1: T, public operando2: T) {

    }

    abstract executar() : R
}

// console.log(new OperacaoBinaria(3, 7).executar())

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(3, 8).executar())

class DiferenacaEntreDatas extends OperacaoBinaria<Data, string> {
    getTime(data: Data): number {
        let { dia, mes, ano } = data
        return new Date(`${mes}/ ${dia}/${ano}`).getTime()
    }

    executar(): string {
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)

        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `A difernça é de ${Math.ceil(diferenca / dia)} dia(s)`
    }
} 

const novo = new Data(1, 1, 2020)
const d2 = new Data(23, 2, 2020)
console.log(new DiferenacaEntreDatas(novo, d2).executar())