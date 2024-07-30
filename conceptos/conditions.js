// if
edad = 16;

if (edad > 17) {
    console.log('Acceso permitido.');
}
else {
    console.log('Acceso denegado.');
}

// else if

if (edad > 17) {
    console.log('Acceso permitido.');
} else if (edad < 12) {
    console.log('No se permiten niños menores de 12 años.');
} else {
    console.log('Acceso denegado.');
}

// switch
let opcion = prompt('Seleccione una opción');
switch (opcion) {
    case '3':
        console.log('Has seleccionado 3.')
        break;
    case '4':
        console.log('Has seleccionado 4.')
        break;
    default:
        console.log('Opción invalida');
        break;
}

