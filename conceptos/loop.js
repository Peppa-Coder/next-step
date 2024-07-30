// while

let i = 0
while (i < 4) {
    console.log(i);
    i++;
}

console.log('Primer while finalizado.');

i = 1   

while (i < 4) {
    if (i % 2 == 0) {
        console.log(i, 'es un numero par.');
    }
    console.log(i, 'es un numero impar.');
    i++;
}

console.log('Segundo While Finalizado')

i = 0


// do while

// do {
//     if (i % 2 == 0) {
//         console.log(i, 'es un numero par.');
//     }
//     console.log(i, 'es un numero impar.');
//     i++;
// } while (i < 4);

// La unica diferencia que tiene con el while, es que este evalúa la condición al final, en cambio while ejecuta el código siempre y cuando se cumpla la condición


// for
// el bucle for tiene 3 parametros, se inicializa, se hace una validación y se le indica una acción que hará si esa validación se cumple

console.log('Bucle For Iniciando...')

for (i = 0; i < 4; i++) {
    if (i % 2 == 0) {
        console.log(i, 'es un numero par.');
    } else {
        console.log(i, 'es un numero impar.');
    }
}

console.log('Bucle For Finalizado')


console.log('for of')

// for of
// ideal para iterar una lista

let animales = ['Chanchito', 'Perrito', 'Gatito']

for (let animal of animales ) {
    console.log (animal)
}

// for in
// ideal para iterar sobre las propiedades de un objeto

console.log('for In')

let user = {
    id: 1,
    name: 'Chanchito Feliz',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

