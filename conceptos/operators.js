// aritmetic ones

console.log(1 + 2); // addition
console.log(1 - 2); // subtraction
console.log(1 * 2); // multiplication
console.log(1 / 2); // division
console.log(1 % 2); // modulo (resto de una division)
console.log(1 ** 2); // exponentiation

// assignment ones

let a = 1;

a = a + 5; // aumentar a en 5
a += 5; // aumentar a en 5
a ++ // aumentar a en 1

console.log(a); 

// comparison ones

let c = 10;

console.log(c > 5); // retorna true si c es mayor que 5
console.log(c == '10'); // retorna true si c es igual a 10 sin importar el tipo de dato
console.log(c != 10); // retorna true si c es distinto a 10 sin importar el tipo de dato
console.log(c === 10); // retorna true si c es igual a 5 y el tipo de dato es el mismo

// logical ones

console.log(true && false); // AND, ambos deben ser verdaderos para que el resultado sea verdadero
console.log(true || false); // OR, alguno debe ser verdadero para que el resultado sea verdadero
console.log(!true); // NOT, inverte el valor booleano

// boolean ones

console.log(true); // true
console.log(false); // false


// falsys
// False values

// false
// 0
// ""
// undefined
// null
// NaN


// True values

// true
// 1
// "1"
// []
// {}


let nombre = '';
let username = nombre || 'Guest';
console.log(username); // retorna Guest si nombre es vacio, username si no


// ternary operator

let edad = 16;
let acceso =  edad > 17 ? 'Acceso Permitido' : 'Acceso Denegado'; 

console.log(acceso); // retorna Acceso Permitido si edad es mayor a 17, Acceso Denegado si no