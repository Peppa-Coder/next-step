function cualEsMayor(a,b) {
    return a > b ? a : b;
}

let mayor = cualEsMayor(5,10)

console.log(mayor)

//******************************************************************* */
// buscar solo existentes del array
function getByIdx(arr, idx) {
    return idx < 0 || idx >= arr.length ? 'No existe' : arr[idx]
}

resultado = getByIdx([1,2], -3);

console.log(resultado)


//******************************************************************* */
// solo numeros impares
function imparNumbers(cantidad) {
    let i = 1;
    while (i <= cantidad) {
        i % 2 !== 0 ? console.log(i, 'es impar') : null;
        i++;
    }
}

const numero = prompt('Ingresa un número');

imparNumbers(numero);

//******************************************************************* */
// Mayor y menor valor de un array en otro array
let array = [4,3,2,1,5,102,-10,1,50,23,13]

function getMayorMenor(arr) {
    mayor = arr[0]
    menor = arr[0]
    for(num of arr) {
        menor = menor < num ? menor : num
        mayor = mayor > num ? mayor : num
    }
    return [menor, mayor]
}

let result = getMayorMenor(array)

console.log(result)
//******************************************************************* */
//  Cuantos numeros positivos hay en el array

function countPositives(arreglo) {
    contador = 0
    for (elemento of arreglo) {
        elemento > 0 ? contador++ : contador
    }
    return contador
}

res = countPositives(array)

console.log(res)