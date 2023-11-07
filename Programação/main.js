//alerta
//alert(:c)


function Toca(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;


for (let Contador = 0; Contador < listaTeclas.length;Contador++  ) {
    const tecla = lista[Contador]
    const classe = tecla.classList[1]
    const idAudio = `#som_${classe}`;
    

    lista[Contador].onclick = function() {
        Toca(idAudio);
    }


    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
        //console.log(evento.code === 'Space' || evento.code === 'Enter');
    }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');

    }
}
