//alerta
//alert(:c)


function Toca(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const lista = document.querySelectorAll('.tecla');

for (let Contador = 0; Contador < lista.length;Contador++  ) {
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

<script>
        function calcular() {
            var numero1 = parseFloat(document.getElementById("numero1").value);
            var numero2 = parseFloat(document.getElementById("numero2").value);
            var operador = document.getElementById("operador").value;
            var resultado = 0;

            switch (operador) {
                case "+":
                    resultado = numero1 + numero2;
                    break;
                case "-":
                    resultado = numero1 - numero2;
                    break;
                case "*":
                    resultado = numero1 * numero2;
                    break;
                case "/":
                    resultado = numero1 / numero2;
                    break;
                case "**":
                    resultado = numero1 ** numero2;
                    break;
            }

            document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
        }
        
    </script>