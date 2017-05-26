function Cancha (){

	/**cosas que tiene que tener:
		
		array de asteroides (debe)
		array de ovnis
		la nave (dentro estan las vidas, dentro el metodo disparar que lanza las balas)
		el marcador
		

		mas adelante
		los limites "refractores"

	*/

	var puntuacion = 0;
	var nave = new Nave();
	var asteroides = new Array();
	var ovnis = new Array();

	//crea ovnis a razon del numero que le pases, para cada oleada
	function crearOvnis(max) {
		
		for (var i = 0; i < max; i++) {
			var ovni = new ovni();
			ovni.name = "ovni " + (i + 1);
			ovnis.push(ovni);
		}
	}

	//crea asteroides a razon del numero que le pases, para cada oleada
	function crearAsteroides(i) {
		

	}

	this.wrapAround = function (mesh) {
		if(!revisarObjetoCamara(mesh)){
            if(mesh.position.y > window.innerHeight / 2){ // limite inferior de la pantalla
                mesh.position.y = - window.innerHeight / 2;
            }
            else if(mesh.position.y < - window.innerHeight / 2){ // limite superior de la pantalla
                console.log(mesh.position.y + " " + window.innerHeight / 2);
                mesh.position.y =  window.innerHeight / 2;
            }
            else if(mesh.position.x > window.innerWidth / 2){ // limite derecho
                mesh.position.x = - window.innerWidth / 2;
            }
            else if(mesh.position.x < 0){ // limite izquierdo
                mesh.position.x = window.innerWidth / 2;
            }
        }
	}
}