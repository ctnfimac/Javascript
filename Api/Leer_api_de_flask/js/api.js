

function traerPersonas(){
    fetch('http://127.0.0.1:5000/persona')
    .then( response => response.json())
    .then(data =>{
        //console.log(data.personas[0].apellido)
        //rta_traerPersonas.innerHTML = data.personas
        rta_traerPersonas.innerHTML = jsonTemplate(data.personas)
    })
    .catch(function(error) {
        console.log('Hubo un problema con la petición, ' + error.message);
        document.getElementById('rta_traerPersonas').innerHTML = '<div class="ml-2 alert alert-dismissible alert-danger">'
                +'<strong>Hubo un problema con la petición, ' + error.message +'</strong>'
                +'</div>'
    });
}

function traerPersona(codigo){
    fetch('http://127.0.0.1:5000/personadata/'+codigo)
    .then( response => response.json())
    .then(data =>{
        console.log(data.persona)
        document.getElementById('rta_traerPersona').innerHTML = jsonTemplate(data.persona)
    })
    .catch(function(error) {
        console.log('Hubo un problema con la petición, ' + error.message);
        document.getElementById('rta_traerPersona').innerHTML = '<div class="ml-2 alert alert-dismissible alert-danger">'
                +'<strong>Hubo un problema con la petición, ' + error.message +'</strong>'
                +'</div>'
    });
}

function mostrarPersona(codigo){
    fetch('http://127.0.0.1:5000/personadata/'+codigo)
    .then( response => response.json())
    .then(data =>{
        codigo= document.getElementById('upd_codigo');
        nombre= document.getElementById('upd_nombre');
        apellido = document.getElementById('upd_apellido');
        nacimiento = document.getElementById('upd_nacimiento');
        codigo.value = data.persona[0].codigo;
        nombre.value = data.persona[0].nombre;
        apellido.value = data.persona[0].apellido;
        fecha = new Date(data.persona[0].fecha_nacimiento)
        fecha_str =  parseInt(fecha.getFullYear()+ 1) + '-'+ parseInt(fecha.getMonth()+ 1)  + '-' + parseInt(fecha.getDay()+ 1) 
        nacimiento.value = fecha_str;
        btn_modificar.style.display = "block"
    })
    .catch(function(error) {
        console.log('Hubo un problema con la petición, ' + error.message);
        document.getElementById('rta_modificarPersona').innerHTML = '<div class="ml-2 alert alert-dismissible alert-danger">'
                +'<strong>Error, puede que falte poner el codigo</strong>'
                +'</div>'
    });
}

function agregarPersona(personaNueva){
    fetch('http://127.0.0.1:5000/persona',{
        method: 'POST',
        body: JSON.stringify(personaNueva),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( response => response.json())
    .catch(function(error) {
        console.log('Hubo un problema con la petición, ' + error.message);
        document.getElementById('rta_agregarPersona').innerHTML = '<div class="ml-2 alert alert-dismissible alert-danger">'
                +'<strong>Hubo un problema con la petición, o con el código ingresado</strong>'
                +'</div>'
    })
    .then(response => console.log('Success:', response));
}

function eliminarPersona(codigo){
    fetch('http://127.0.0.1:5000/personadelete/'+codigo,{
        method: 'DELETE',
    })
    .then(data =>{
        //console.log(data.personas[0].apellido)
        //console.log(data)
        document.getElementById('rta_EliminarPersona').innerHTML = '<div class="ml-2 alert alert-dismissible alert-warning">'
                +'<strong>Persona Elimninada</strong>'
                +'</div>';
    })
    .catch(function(error) {
        console.log('Hubo un problema con la petición, ' + error.message);
        document.getElementById('rta_EliminarPersona').innerHTML = '<div class="ml-2 alert alert-dismissible alert-danger">'
                +'<strong>Hubo un problema con la petición, ' + error.message +'</strong>'
                +'</div>'
    });
}


function modificarPersona(codigo, personaModificada){
    fetch('http://127.0.0.1:5000/persona/'+codigo,{
        method: 'PUT',
        body: JSON.stringify(personaModificada),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then( response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        console.log('updated:', response)
        document.getElementById('rta_modificarPersona').innerHTML = '<div class="ml-2 alert alert-dismissible alert-success">'
                +'<strong>Se modifico la persona correctamente</strong>'
                +'</div>';
        document.getElementById('upd_codigo').value = null;
        document.getElementById('upd_nombre').value = null;
        document.getElementById('upd_apellido').value = null;
        document.getElementById('upd_nacimiento').value = null;
        btn_modificar.style.display = "none";
    });
}

