(function(){
    var socket = io();
      
    function cambiaAzul(){
        // console.log('cambiaAzul')
        socket.emit('enciende');
    }

    function apagaLed(){
        socket.emit('apaga');
    }

    let btn_cambiaAzul = document.getElementById('led_13')//.onclick = cambiaAzul;
    let btn_led_13_off = document.getElementById('led_13_off')
    btn_cambiaAzul.addEventListener('click',cambiaAzul)
    btn_led_13_off.addEventListener('click',apagaLed)
})()

