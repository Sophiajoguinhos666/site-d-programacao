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



/*-----------------------------------------CALCULADORA----------------------------------------------------------*/
// pego os elementos li e div input
var btn 	  = document.querySelectorAll(".key li"),
	input 	  = document.querySelector(".input-valor"),
	operador  = document.querySelectorAll(".operador");

// Percorro o array para usar todas as informações
for(var i = 0; i < btn.length; i++){
	document.onkeypress = function(event){
		var key = event.charCode; // Mudança de keyCode para charCode, por que o firefox não aceitou keyCode
		//console.log(key);
		//console.log(String.fromCharCode(47));
		for(var e = 0; e <= 10; e++){
			if(key === (48+e)){
				input.innerHTML += e;
			}
		}
		switch (key){
			case 42:
				input.innerHTML += "*";
				break;
			case 43:
				input.innerHTML += "+";
				break;
			case 45:
				input.innerHTML += "-";
				break;
			case 46:
				input.innerHTML += ".";
				break;
			case 47:
				input.innerHTML += "/";
				break;
			case 13:
			case 61:
				var equacao = input.innerHTML;
				if(equacao){
					try {
						input.innerHTML = eval(equacao);
					} catch (e) {
						alert('Erro na expressão');

					} 
				}
				break;
			case 67:
			case 99:
				input.innerHTML = "";
				break;						
			default:
				//console.log("Procurando erros?");
				break;
		}
	};
	btn[i].addEventListener('click',function(){
		var btnVal 	 = this.innerHTML,
			inputVal = input.innerHTML;
		//console.log(btnVal);

		// crio um clear caso o c for clicado
		switch (btnVal){
			case "c":
				input.innerHTML = "";
				break;
			case "=":
				// Crio a variável de equação aqui eu utilizo a função eval do javascript
				var equacao = inputVal;
				
				if(equacao){
					try {
						input.innerHTML = eval(equacao);
					} catch (e) {
						alert('Erro na expressão');

					} 
				}
				break;
			default:
				input.innerHTML += btnVal;
				break;	
		}

	});
}