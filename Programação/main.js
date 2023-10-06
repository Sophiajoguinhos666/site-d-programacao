//alert
//alert(:c)


function Toca (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;


while (Contador < lista.length) {
    const tecla = lista[Contador]
    const classe = tecla.classList[1]
    // console.log(classe);

    const idAudio = `#som_${classe}`;
// console.log(classe);

lista[contador].onliclick = funnction () {
    toca(isAudio);
}

Contador = Contador + 1;
//console.log(Contador);

    tecla.onkeydown = function (evento) {
tecla.classList.add('ativa');
console.log(evento.code === 'Space' || evento.code === 'Enter' );
    }

tecla.onkeyup = function () {
tecla.classList.remove('ativa');

}
}