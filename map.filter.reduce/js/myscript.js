let app = document.getElementById('app');
let resultado = document.getElementById('resultado');
const lista_resultado = document.createElement('ul');
lista_resultado.classList.add('lista');


let alumnos = [
	{
		nombre: "christian",
		edad: 31
	},
	{
		nombre: "Zahira",
		edad: 9
	},
	{
		nombre: "sasha",
		edad: 10
	},
	{
		nombre: "ricardo",
		edad: 26
	},
	{
		nombre: "Yrma",
		edad: 63
	},
	{
		nombre: "Teodorico",
		edad: 61
	},
	{
		nombre: "Aye",
		edad: 28
	},
	{
		nombre: "congona",
		edad: 35
	}
]

// agrego la lista de personas al dom
const lista = document.createElement('ul');
lista.id = 'lista';
lista.classList.add('lista');

for (const alumno of alumnos) {
	let item = document.createElement('li');
	item.classList.add('lista__item');
	item.textContent = `nombre: ${alumno.nombre}, edad: ${alumno.edad}`;
	lista.appendChild(item);
}

app.appendChild(lista);


/*
 * map()
 * guardo los nombres en otro vector usando mao()
 */
function mostrarNombres(){
	reset();
	let nombres = alumnos.map(alumnos => alumnos.nombre);
	
	for (const nombre of nombres) {
		let item = document.createElement('li');
		item.classList.add('lista__item');
		item.textContent = `nombre: ${nombre}`;
		lista_resultado.appendChild(item);
	}
	
	resultado.appendChild(lista_resultado);
}


/*
 * filter()
 * imprimo los alumnos con edad mayor 30 usando el metodo filter()
 */
function filtrarPorEdad(){
	reset();
	let personas = alumnos.filter( (alumnos)=> alumnos.edad > 30 );
	for (const alumno of personas) {
		let item = document.createElement('li');
		item.classList.add('lista__item');
		item.textContent = `nombre: ${alumno.nombre}`;
		lista_resultado.appendChild(item);
	}
	
	resultado.appendChild(lista_resultado);
}

/*
 * reduce()
 * saco el promedio de las edades usando el metodo reduce()
 */
function promedioDeEdades(){
	reset();
	let edades = alumnos.map(alumnos => alumnos.edad);
	let suma = edades.reduce((a,b)=> a + b );
	
	let item = document.createElement('li');
	item.classList.add('lista__item');
	item.textContent = `promedio: ${suma/edades.length}`;
	lista_resultado.appendChild(item);

	
	resultado.appendChild(lista_resultado);
}

let reset = function() {
	lista_resultado.innerHTML = ""; 
}