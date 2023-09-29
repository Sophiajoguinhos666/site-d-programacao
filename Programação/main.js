function Toca (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;


while (Contador < lista.length) {
    const tecla = lista[Contador]
    const classe = tecla.classList[1]
    const idAudio = `#som_${classe}`;

    tecla.onclick = function () {
        Toca(idAudio);
    }

    Contador = Contador + 1;
    tecla.onkeydown = function (evento) {
tecla.classList.add('ativa');
console.log(evento.code === 'Space' || evento.code === 'Enter' );
    }

tecla.onkeyup = function () {
tecla.classList.remove('ativa');

}
}