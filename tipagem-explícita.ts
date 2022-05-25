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