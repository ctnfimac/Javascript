
var slider = document.querySelector(".slider"),
    siguiente = document.getElementById("btn-next"),
    anterior = document.getElementById("btn-prev");

// variable que evita el "ruido" por si apreto muchas veces repetidas en intervalos muy cortos de tiempo el boton
var funcionamiento = 0;

// selecciono todas las fig del slider y las guardo en un array
var array = document.querySelectorAll('.slider figure');

// pongo el elemento 2 antes del elemento que esta en la pos 0
slider.insertBefore( array[2] , array[0]);
refrescoArray();


// hago un margin de -100% para que se muestre la primera imagen
slider.style.marginLeft="-"+100+"%"; //equivalente al renglon de abajo


//voy de -100% a -200%
function desplazamientoD(valor){
    valor = valor + 100;
    slider.style.marginLeft = "-"+valor+"%";
}

// voy de -100% a 0%
function desplazamientoI(valor){
    slider.style.marginLeft = (valor-100)+"%";
}


// refresca las posiciones en el array luego de usar el insertBefore
function refrescoArray(){
    array = document.querySelectorAll('.slider figure')
}

function moverD(){
  if( funcionamiento == 0 ){
    funcionamiento = 1;  
    for( i = 0 ; i <= 100; i++){
        setTimeout( (function(i){
            return function(){
                desplazamientoD(i);
                if( i == 100 ){
                   slider.insertBefore( array[0] , array[2].nextSibling);// nextSibling coloca despues del indicado lo cambia de lugar ojo sino no se entiende lo que esta dos lineas mas abajo
                    refrescoArray();
                    slider.style.marginLeft="-"+100+"%"; // regreso al -100% por que antes estaria en -200% y al haber intercambiado en la sentencia dos renglones arriba quedaria visible la ultima imagen
                    funcionamiento = 0;
                }
            }
        })(i), i*10 )
    }
  }       
}

function moverI(){
   if( funcionamiento == 0 ){
    funcionamiento = 1; 
      for( i = 0 ; i <= 100; i++){
        setTimeout( (function(i){
            return function(){
                desplazamientoI(i);
                if( i == 100 ){
                   slider.insertBefore( array[0] , array[2]);
                    refrescoArray();
                    slider.style.marginLeft="-"+100+"%";
                     funcionamiento = 0;
                } 
            }
        })(i), i*10 )
    }
   }
}

function autoplay(){
    interval = setInterval(function(){
        moverD();
    },5000);
}

siguiente.addEventListener('click',moverD);
anterior.addEventListener('click',moverI);

autoplay();