// namespace area {
//     const PI = 3.14

//     export function circunferencia(raio: number): number {
//         return PI * Math.pow(raio, 2)
//     }

//     export function retangulo(base: number, altura: number): number {
//         return base * altura
//     }
// }

// console.log(area.circunferencia(10))
// console.log(area.retangulo(10, 20))


// export const digitize = (n: number): number[] => {
//     let arr = String(n).split('').reverse().map(elemento => {
//             return Number(elemento)
//     })
//     return arr
//     console.log(arr)
// }
// console.log(digitize(35231))

// export function removeChar(str: string) {
//     let arr = str.split('')
//     let first = arr.shift()
//     let last = arr.pop()
//     let strAgain = arr.join('')
//     return strAgain
// }

// console.log(removeChar('eloquent'))

// export function noSpace(x: string) {
//     let arr  = x.replace(/ /g, '')
//     console.log(arr)
//     return arr
// }

// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))


// export class Kata {
//     static highAndLow(number: string) {
//         let arr = number.split(' ').map(elemento => {
//             return Number(elemento)
//         })
//         let maxMin = [Math.min(...arr), Math.max(...arr)].join(', ')
//         console.log(maxMin)
//         return maxMin
//     }
// }

// console.log(Kata.highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))

export function abrevieName(str: string) {
    let array = str.split(' ').map((elemento, i) => {
        return elemento[0].toUpperCase()
    }).join('.')
    console.log(array)
    return array
}

console.log(abrevieName('Sam Harris'))