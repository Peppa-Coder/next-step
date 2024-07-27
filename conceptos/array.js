lista = ['colocolino', 'chuncho weco', 'monja kl'] 

lista.pop(); // remove last element from the array

lista.shift(); // remove first element from the array

lista.push('xdend'); // add new element to the end of the array

lista.unshift('xdstart'); // add new element to the beginning of the array

console.log(lista);


// ***************************************************************************

let lista2 = ['colocolino', 'chuncho weco', 'monja kl'];
let lista3 = ['colocolino', 'chuncho weco', 'monja kl'];

console.log(lista2 === lista3); // las listas son iguales pero retorna false porque son dos objetos diferentes en memoria, sin  importar el contenido de cada uno de ellos


// ***************************************************************************


let listComparision = JSON.stringify(lista2) === JSON.stringify(lista3); 

console.log(listComparision) // al pasarlo a json y compararlo, ahi si son iguales


// ***************************************************************************


// pero si lista 3 hiciera referencia a lista2, no es necesario transformar a json para compararlos, ya que hace referencia la mismo objeto en memoria y retornara true

lista2 = lista3;
console.log(lista2 === lista3); // ahora retorna true porque son dos objetos iguales en memoria, sin  importar el contenido de cada uno de ellos


console.log(typeof lista2);