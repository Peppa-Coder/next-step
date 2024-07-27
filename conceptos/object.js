let trabajador = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    sexo: 'masculino',
    direccion: 'Calle 123, 123',
    telefono: '123456789',
    email: 'juan@gmail.com',
    fechaNacimiento: '1990-01-01'
};

console.log(trabajador);

console.log("born date modified");
trabajador['fechaNacimiento'] = '30-11-2001';
console.log(trabajador);

console.log("deleted born date" +trabajador);
delete trabajador ['fechaNacimiento'];
