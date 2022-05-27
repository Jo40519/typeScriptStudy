// Arrow Function

const subtrair = (n1: number, n2: number):number => {
    return n1 - n2
}

console.log(subtrair(4, 2))

// Spread e Rest

let numbers = [1, 2, 3, 90989087, 57257895790435790578345743]
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Vitor', 'Nunes']
const turmaB: string[] = ['Millenna', 'Williams', ...turmaA]
console.log(turmaB)

function retornaArray(...args: number[]): number[] {
    return args
}

console.log(retornaArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
console.log(retornaArray(...numbers))