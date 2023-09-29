function Toca (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;


while (Contador < lista.length) {
lista [Contador].onclick = function() {
        Toca(idAudio);
    }
    const classe = lista[Contador].classList[1];
    console.log(classe);    

    const idAudio = `#som_${classe}`;
console.log(idAudio);

    Contador = Contador + 1;
    console.log(Contador);

}


