let str = 'Rdam'
let arr = str.split('').map(e => {
    if (e[0] == 'R') {
        return e[0] + 'play banjo'
    }
}).join(' ')



console.log(arr)