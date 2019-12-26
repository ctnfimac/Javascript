var contenido = document.querySelector('#contenido')

var btn_traerPersonas = document.getElementById('traerPersonas')
var btn_traerPersona = document.getElementById('traerPersona')
var rta_traerPersonas = document.getElementById('rta_traerPersonas')
var rta_traerPersona = document.getElementById('rta_traerPersona')
var btn_eliminarPersona = document.getElementById('EliminarPersona')
var btn_agregar = document.getElementById('agregar')

btn_traerPersonas.addEventListener('click', traerPersonas,true)
btn_traerPersona.addEventListener('click', fn_traerPersona,true)
btn_eliminarPersona.addEventListener('click', fn_eliminarPersona,true)
btn_agregar.addEventListener('click',fn_agregarPersona, true)


function fn_traerPersona(){
    codigo = document.getElementById('idTraerPersona').value;
    if (codigo != null && codigo != '') 
        traerPersona(codigo)
    else 
        document.getElementById('rta_traerPersona').innerHTML = '<div class="ml-2 alert alert-dismissible alert-danger">'
                +'<strong>Ingrese el código de la persona</strong>'
                +'</div>'
}

function fn_eliminarPersona(){
    codigo = document.getElementById('idEliminarPersona').value;
    if (codigo != null && codigo != '') 
        eliminarPersona(codigo)
    else 
        document.getElementById('rta_EliminarPersona').innerHTML = '<div class="ml-2 alert alert-dismissible alert-danger">'
                +'<strong>Ingrese el código de la persona</strong>'
                +'</div>'
}


function fn_agregarPersona(){
    codigo = document.getElementById('add_codigo').value;
    nombre= document.getElementById('add_nombre').value;
    apellido = document.getElementById('add_apellido').value;
    nacimiento = document.getElementById('add_nacimiento').value;

    if(codigo != '' && nombre != '' && apellido != '' && nacimiento != ''){
        console.log('codigo:', codigo, ', nombre: ', nombre, ', apellido:', apellido,', nacimiento', nacimiento)
        personaNueva = {
            "codigo": codigo,
            "nombre": nombre,
            "apellido": apellido,
            "fecha_nacimiento": nacimiento
        }
        agregarPersona(personaNueva)
    }
    else{
        document.getElementById('rta_agregarPersona').innerHTML = '<div class="ml-2 alert alert-dismissible alert-danger">'
        +'<strong>Complete todos los campos</strong>'
        +'</div>'
    }
}

function jsonTemplate(miobjeto){
    //console.log("tamanio: ",Object.keys(miobjeto).length)
    //console.log(miobjeto)
    tope = Object.keys(miobjeto).length
    respuesta = ""
    rta = '<table class="table table-dark">'
    +'<thead>'
       +'<tr>'
        +'<th scope="col">codigo</th>'
        +'<th scope="col">Nombre</th>'
        +'<th scope="col">Apellido</th>'
        +'<th scope="col">Nacimiento</th>'
        +'</tr>'
    +'</thead>'
    +'<tbody>';
    
    for(i = 0; i < tope; i++){
        fecha = new Date(miobjeto[i].fecha_nacimiento)
        fecha_str = parseInt(fecha.getDay()+ 1) + '-'+ parseInt(fecha.getMonth()+ 1) + '-'+ parseInt(fecha.getFullYear()+ 1)
        //console.log("codigo: ", miobjeto[i].codigo, ", nombre:" , miobjeto[i].nombre, ", apellido:" , miobjeto[i].apellido, "fecha_nacimiento:" , miobjeto[i].fecha_nacimiento )
        respuesta += "codigo: " + miobjeto[i].codigo + ", nombre:" + miobjeto[i].nombre + ", apellido:" +  miobjeto[i].apellido + "fecha_nacimiento:"  + miobjeto[i].fecha_nacimiento
        rta += '<tr>'
        +'<th scope="row">'+miobjeto[i].codigo+'</th>'
        +'<th scope="row">'+miobjeto[i].nombre+'</th>'
        +'<td>'+miobjeto[i].apellido+'</td>'
        +'<td>'+ fecha_str +'</td>'
        +'</tr>';
    }
    rta += '</tbody>'
        +'</table>';
    return rta
}
