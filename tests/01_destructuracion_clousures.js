/**
 * La destructuracion en javascript es asignar valores a nombres de una tabla dada
 * o tambien puede ser de un objeto
 * 
 * 
 */

// -ARRAY-
// let lista_de_nombres = ['sub-zero','scorpion','liu-kan','jax','ermac']
// let nombre1, nombre2, nombre3, nombre4, nombre5

// la asignacion se hace por el orden que tiene el array 0 1 2 3 4
// en este caso solo se asignan sub-zero, scorpion, liu-kan
// let [nombre1, nombre2, nombre4] = lista_de_nombres

// console.log(nombre1, nombre2, nombre4) // salida: sub-zero scorpion liu-kan

// // -OBJETO-
const persona = {
    nombre: "Christian",
    apellido: "Peralta",
    edad: 33,
    pasatiempos: ['sacar a pasear a zahira y sasha','jugar al dota','aprender','quehaceres domesticos'],
    experiencia_anios: 2,
    trabajo_actual: "Gob de la Ciudad",
    mascotas: [{
        nombre: "Zahira",
        edad: 10
    },{
        nombre: "Sasha",
        edad: 13
    }]
}

// let {nombre, edad, trabajo_actual, mascotas} = persona
// console.log(nombre)
// console.log(edad)
// console.log(trabajo_actual)
// console.info("Las guapitas:")

// mascotas.forEach(mascota => {
//     console.log(`Nombre: ${mascota.nombre}, edad: ${mascota.edad}`) 
// });


/**
 * Clousures:
 *      Es una forma de tener cierta privacidad en los datos
 *      tengo que tener una variable, una funcion dentro de la funcion clausura que acceda a la variable, 
 * 
 * fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Closures
 * ejemplo: https://es.stackoverflow.com/questions/40788/cuando-usar-closures
 */

//  function creaSumador(y){
//      return function(x){
//          return x + y;
//      }
//  }

 let creaSumador = (y) => {
    return function(x){
        return x + y
    }
}


let sumador = creaSumador(20)
    // pienso que hace lo siguiente
    // sumador = function(x){
    //              return x + 20;
    //           }
console.info(sumador(5))

var suma5 = creaSumador(7)(10)
console.log(suma5)


let crearDivision = function(x){
    return function(y){
        return x / y;
    }
}

let division_1 = crearDivision(40)
console.info(division_1(8))

let division_2 = crearDivision(100)(50)
console.info(division_2)

