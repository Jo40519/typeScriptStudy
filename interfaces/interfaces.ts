interface Humano {
    nome: String
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}


function saudarComOla(pessoa: Humano) {
        console.log(`Olá ${pessoa.nome}`)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joooao'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log(`Olá, meu nome é ${pessoa.nome} ${sobrenome} `)
    },
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
pessoa.saudar('Lobato')


class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date  = new Date
    saudar(sobrenome: string): void {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}, minha última compra foi ${this.ultimaCompra}`)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
meuCliente.saudar('Solo')
meuCliente.ultimaCompra.toLocaleDateString()

// InterfaceFuncao

interface FuncaoCalculo {
    (a: number, b:number): number
}

let potencia: FuncaoCalculo

potencia = function (base: number, exp: number): number {
    return base ** exp
}
console.log(potencia(3, 10))