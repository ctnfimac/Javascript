
// Variables
let menu_var = document.getElementById('menu__boton');
let nav = document.getElementById('nav');

let posicionMenu = -100;
let menuVisible = false;
let antiRuidoActivado = false;

// Temporizadores
let timerMenu; 

// Eventos 
menu_var.addEventListener('click',menu);

// Funciones
function menu(){
	if(!antiRuidoActivado){
		antiRuidoActivado = true;
		if(menuVisible) timerMenu = setInterval(desapareceMenu,3);
		else 			timerMenu = setInterval(apareceMenu,3);
		menuVisible = !menuVisible;
	}
}

function apareceMenu(){
		if( posicionMenu == 0){
			clearInterval(timerMenu);
			antiRuidoActivado = false;
		} else{
			posicionMenu++;
			nav.style.left = posicionMenu + "%";
			console.log(posicionMenu);
		}	
}

function desapareceMenu(){
	if( posicionMenu == -100){
		clearInterval(timerMenu);
		antiRuidoActivado = false;
	}else{
		posicionMenu--;
		nav.style.left = posicionMenu + "%";
		console.log(posicionMenu);
	}	
}

