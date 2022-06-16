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

// export function abrevieName(str: string) {
//     let array = str.split(' ').map((elemento, i) => {
//         return elemento[0].toUpperCase()
//     }).join('.')
//     console.log(array)
//     return array
// }
// console.log(abrevieName('Sam Harris'))

// export const fakeBin = (x: string) => {
//     let arr = x.split('').map(elemento => {
//         return Number(elemento)
//     }).map(elemento => {
//         if (elemento > 5) {
//             return 1
//         } else if (elemento < 5) {
//             return 0
//         }
//     }).join('')
//     return arr
//     console.log(arr)
// }

// console.log(fakeBin('45385593107843568'))

// export class Kata {
//     static squareDigits(num: number) {
//         let str = String(num).split('').map(elemento => {
//             return Number(elemento)
//         }).map(elemento => {
//             return elemento ** 2
//         }).join('')
//         let number = Number(str)
//         console.log(number)
//         console.log(str)
//     }
// }

// console.log(Kata.squareDigits(9119))

// export function solution(nums: number[]): number[] {
//     let arr: number[] = []
//     if (nums.length > 0) {
//         return arr = nums.sort((a, b) => {
//         return a - b
//     })
//     }
//     if (nums.length < 0) {
//         return arr = []
//     }
//     return arr
// }

// console.log(solution([1, 2, 10, 50, 5]))