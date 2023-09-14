function Toca () {
    document.querySelector('#som_tecla_toim').play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < 9) {
    lista [Contador].onclick = Toca;
    contador = contador + 1;
    console.log(contador);
}
