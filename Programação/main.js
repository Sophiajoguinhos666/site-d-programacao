function Toca () {
    document.querySelector('#som_tecla_toim').play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < 9) {
    lista [Contador].onclick = Toca;
    Contador = Contador + 1;
    console.log(Contador);
}
