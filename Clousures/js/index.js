const lista_libros = document.getElementById('libros_lista')
const btn_devolver = document.getElementById('devolver')
const btn_tomar = document.getElementById('tomar')


const titulo = document.getElementById('titulo')
const isbn = document.getElementById('isbn')



let libros = [
    {
        isbn: 1,
        titulo: 'El Señor de los Anillos'
    },
    {
        isbn: 2,
        titulo: 'Harry Potter'
    },
    {
        isbn: 3,
        titulo: 'Codigo Davinci'
    }
]



/**
 * 
 * @brief funcion que sirve para funcionalidades de la libraria
 *  
 */
const libreria = (action = {}) => {
    switch(action.type){
        case 'DEVOLVER_LIBRO':
            return libros.push(action.payload);
        case 'RETIRAR_LIBRO':
            return libros = libros.filter( (b) => 
                 b.isbn !== action.payload.isbn
            )
        default:
            return libros;
    }
}


/**
 * 
 * @brief funcion que se encarga de completar la lista de libros disponibles
 *  
 */
const cargar_libros = function(){
    lista_libros.innerHTML = ''
    libros.forEach( elemento => {
        lista = document.createElement('ul');
        li_titulo = document.createElement('li')
        li_titulo.innerHTML = `Titulo: ${elemento.titulo}`  
        
        li_isbn = document.createElement('li')
        li_isbn.innerHTML = `ISBN: ${elemento.isbn}`
        
        lista.appendChild(li_titulo)
        lista.appendChild(li_isbn)

        lista_libros.appendChild(lista)
    });
}

cargar_libros()



/*****************
 * 
 * @brief EVENTOS
 *  
 ****************/


/**
 * 
 * @brief Evento para devolver un libro
 *  
 */

btn_devolver.addEventListener('click',fn_devolver)
btn_tomar.addEventListener('click',fn_tomar)


function fn_devolver(){
    console.log('devolviendo libro....')

    const libro_nuevo = {
        type: 'DEVOLVER_LIBRO',
        payload: {
            isbn: isbn.value,
            titulo: titulo.value
        }
    }

    libreria(libro_nuevo)
    cargar_libros()
}


function fn_tomar(){
    console.log('eliminando libro....')
    const libro_retirado = {
        type: 'RETIRAR_LIBRO',
        payload: {
            isbn: parseInt(isbn.value),
            titulo: titulo.value
        }
    }
    libreria(libro_retirado)
    cargar_libros()
}




// diferencia entre declarativa y expresiva
// las declarativas son evaluadas antes que cualquier otra expresion
// console.log(restar(10,3))
// function restar(a,b){
//     return a - b
// }
// const restar = function(a,b){
//     return a - b
// }


// const libreria = function(action={}){
//     switch(action.type){
//         case 'DEVOLVER_LIBRO':
//             return libros.push(action.payload);
//         case 'RETIRAR_LIBRO':
//             return libros = libros.filter( (b) => 
//                  b.isbn !== action.payload.isbn
//             )
//         default:
//             return libros;
//     }
// }


/*
// Agregar un libro
const libro_nuevo = {
    type: 'DEVOLVER_LIBRO',
    payload: {
        isbn: 4,
        titulo: 'Manual chiche'  
    }
}
libreria(libro_nuevo)
console.info(libros)


// eliminar el libro Codigo Davinci
const libro_eliminar = {
    type: 'RETIRAR_LIBRO',
    payload: {
        titulo: 'Codigo Davinci',
        isbn: 3
    }
}
libreria(libro_eliminar)
console.info(libros)
*/



/*
console.info(libros)

// Agrego un libro nuevo
const libro_1 = {
    isbn: 3,
    titulo: 'El llamado de los salvaje'
}

let action = {
    type: 'AGREGAR_LIBRO',
    payload: libro_1
}
libreria(action)
console.info(libros)


// Elimino el libro de Harri Potter
const libro_eliminar = {
    isbn: 2,
    titulo: 'Harry Potter'
}
action = {
    type: 'ELIMINAR_LIBRO',
    payload: libro_eliminar
}
libreria(action)
console.info(libros)
*/