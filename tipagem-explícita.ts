const a: string = 'Teste TS (web)';

console.log(a)

// enums
enum Cor {
    Cinza, 
    Verde = 100,
    Azul = 2,
    Larnja,
    Amarelo
}

let minhaCor: Cor = Cor.Azul
console.log(minhaCor)
console.log(Cor.Amarelo, Cor.Larnja)


// tipos em funções

function digaOi(): void {
    console.log('Oi')
}
digaOi()

function multiplicar(a: number, b: number):number {
    return a * b
}


let calculo: (numeroA: number, numeroB: number) => number 

calculo = multiplicar
console.log(multiplicar(6, 5))



// Desafio

let funcionario : {
    supervisores: string[],
    baterPonto: (horas:number) => string
    
} = {
    supervisores: ['Milenna', 'João', 'Williams'],
     baterPonto(hora: number):string {
    if (hora <= 8) {
        return 'normal'
    } else {
        return 'Fora do horário'
    }
}
}
console.log(funcionario.baterPonto(9))

// never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto() { 
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        } if (this.preco < 0) {
            falha('Preço inválido')
        }
    }
}

produto.validarProduto()