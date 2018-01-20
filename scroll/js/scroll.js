
var getScrollInicial = function(){
    return window.scrollY | document.body.scrollTop | document.documentElement.scrollTop;
}


var getScrollFinal = function(elemento){
  return Math.floor(elemento.getBoundingClientRect().top + getScrollInicial()); 
}


var animatedScrollTo = function(targetElement,time,originElement){
    var posicionInicial = getScrollInicial();
    var posicionFinal = getScrollFinal(targetElement);
    var distanciaScroll = posicionFinal - posicionInicial;
    var scrollFragment = distanciaScroll / time;
    animatedScroll(scrollFragment,posicionFinal);  
}


var animatedScroll = function(scrollFragment,posicionFinal){
    var y = 0;
    var actual = 0; 
   // var valorcrollInicial = getScrollInicial();
    var animatedScroll = setInterval(function(){
        y =+ scrollFragment;
        if(scrollFragment > 0){
            window.scrollBy(0,y);
            if(getScrollInicial() >= (posicionFinal - scrollFragment / 2) || getScrollInicial() == actual) {
                clearInterval(animatedScroll);
                actual = 0;
            }else actual = getScrollInicial();
        }else{
            window.scrollBy(0,y);
            if(getScrollInicial() <= (posicionFinal - scrollFragment / 2)) clearInterval(animatedScroll);
        }
    },1);
}

var animatedScrollEvent = function(originElement,time){
     
    if(originElement.tagName === 'A' && originElement.hash !== ''){
        var targetElement = document.getElementById(originElement.hash.slice(1));
        originElement.addEventListener('click',function(e){
            e.preventDefault();
            animatedScrollTo(targetElement,time);
        });
    }
}

var animatedScrollAllLinks = function(time){
   var links = document.links;

   var i = 0;
   for( i ; i < links.length ; i++){
       animatedScrollEvent(links[i],time);
   }
}

animatedScrollAllLinks(200);


 
