"use strict";
var area;
(function (area) {
    const PI = 3.14;
    function circunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    area.circunferencia = circunferencia;
    function retangulo(base, altura) {
        return base * altura;
    }
    area.retangulo = retangulo;
})(area || (area = {}));
console.log(area.circunferencia(10));
console.log(area.retangulo(10, 20));
//# sourceMappingURL=namespaces.js.map

function abrevieName(str) {
    let arr = str.split('')
    console.log(arr)
}

console.log('Sam Harris')