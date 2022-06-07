function logarClasse(construtor: Function) {
    console.log(construtor)
}

function decoratorVazio(_: Function) {

}

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio
}

function decorator(a: string, b: number) {
    return function (construtor: Function) {
        console.log(`${a} ${b}`)
    }
}

// @logarClasse
// @logarClasseSe(true)
@decorator('Testando', 1234)
class EletroDomestico {
    constructor() {
        console.log('novo...')
    }
}

type Construtor = { new(...args: any[]): Object }

function logarObjeto(construtor: Construtor) {
    return class extends construtor { 
        constructor(...args: any[]) {
            console.log('Antes')
            super(...args)
            console.log('Depois')
        }
    }
}

class ContaCorrente {
    @naoNegativo
    private saldo: number
    constructor(saldo: number) {
        this.saldo = saldo
    }
    @congelar
    sacar(valor: number): boolean {
        if (valor <= this.saldo) {
            this.saldo -= valor
            return true
        } else {
            return false
        }
    }
    @congelar
    getSaldo() {
        return this.saldo
    }
}

const cc = new ContaCorrente(10000.00)
cc.sacar(5000)
console.log(cc.getSaldo())

function congelar(alvo: any, nomePropriedade: string, descritor: PropertyDescriptor) {
    console.log(alvo)
    console.log(nomePropriedade)
    descritor.writable = false
}


function naoNegativo(alvo: any, nomePropriedade: string) {
    delete alvo[nomePropriedade]
    Object.defineProperty(alvo, nomePropriedade, {
        get: function (): any {
            return alvo[`_ ${nomePropriedade}`]
        },

        set: function (valor: any): void {
            if (valor < 0) {
                 throw new Error('Saldo inválido!')
            } else {
                alvo[`alvo ${nomePropriedade}`] = valor
            }
        }
    }) 
}