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
console.info(libros)

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

