function Partida (maxAsteroides, maxOvnis){

	/**cosas que tiene que tener:
		
		array de asteroides (debe)
		array de ovnis
		la nave (dentro estan las vidas, dentro el metodo disparar que lanza las balas)
		el marcador
		

		mas adelante
		los limites "refractores"

	*/

	this.puntuacion = 0;
	this.nave = new Nave();
	this.asteroidesNuevos = new Array();
	this.cascotes = new Array();
	this.paredes = new Array();
	this.ovnis = new Array();

	//crea ovnis a razon del numero que le pases, para cada oleada
	function crearOvnis(maxOvnis) {
		
		for (var i = 0; i < max; i++) {
			var ovni = new ovni();
			ovni.name = "ovni " + (i + 1);
			ovnis.push(ovni);
		}
	}

	//crea asteroides a razon del numero que le pases, para cada oleada
	function crearAsteroides(scene, maxAsteroides) {
		
		for (var i = 0; i < max; i++) {
			asteroidesNuevos[i] = new Asteroide();
			asteroidesNuevos[i].position.set(Math.random() * ((window.innerWidth - 25) - 0) + 0, 
				Math.random() * ((window.innerWidth - 25) - 0) + 0,
				0);
			asteroidesNuevos[i].impulsar(Math.random() * (150 - 50) + 50, 
				Math.random() * (150 - 50) + 50, 
				0);			
			scene.add(asteroidesNuevos[i]);
		}
	}

	this.crearCascotes = function (scene, asteroide) {
		
		var random = Math.round( Math.random() * (3 - 1) + 1 );
		for (var i = 0; i < random; i++) {
			cascotes[i] = new Asteroide();
			cascotes[i].position.set(( Math.random() * (25 - 20) - 20 ) * asteroide.position.x, 
				( Math.random() * (25 - 20) - 20 ) * asteroide.position.y, 
				0);
			cascotes[i].impulsar(Math.random() * (150 - 50) + 50, Math.random() * (150 - 50) + 50, 0);
			scene.add(cascotes[i]);
		}
	}

	this.quitarBala = function (scene, bala) {
		scene.remove(scene.getObjectByName(bala.name));
		nave.balas.splice(nave.balas.indexOf(bala), 1);
	}

	this.quitarOvni = function (scene, ovni) {
		scene.remove(scene.getObjectByName(ovni.name));
		nave.balas.splice(nave.ovnis.indexOf(ovni), 1);
	}

	this.quitarCascote = function (scene, cascote) {
		
		scene.remove(scene.getObjectByName(cascote.name));
		this.cascotes.splice(this.cascotes.indexOf(cascote), 1);
	}

	this.crearParedes = function (scene) {
        var paredMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
        var fondoMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.0});
        var paredIzquierdaGeometry = new THREE.BoxGeometry(2, window.innerHeight, 50);
        var paredDerechaGeometry = new THREE.BoxGeometry(2, window.innerHeight, 50);
        var paredSuperiorGeometry = new THREE.BoxGeometry(window.innerWidth , 2, 50);
        var paredInferiorGeometry = new THREE.BoxGeometry(window.innerWidth , 2, 50); 
        var paredDelanteraGeometry = new THREE.BoxGeometry(2 * window.innerWidth , 2 * window.innerHeight, 2);
        var paredTraseraGeometry = new THREE.BoxGeometry(2 * window.innerWidth , 2 * window.innerHeight, 2);

        var paredIzquierda = new Physijs.BoxMesh(paredIzquierdaGeometry, paredMaterial, 0);
        var paredDerecha = new Physijs.BoxMesh(paredDerechaGeometry, paredMaterial, 0);
        var paredInferior = new Physijs.BoxMesh(paredInferiorGeometry, paredMaterial, 0);
        var paredSuperior = new Physijs.BoxMesh(paredSuperiorGeometry, paredMaterial, 0);
        var paredDelantera = new Physijs.BoxMesh(paredDelanteraGeometry, fondoMaterial, 0);
        var paredTrasera = new Physijs.BoxMesh(paredTraseraGeometry, fondoMaterial, 0);

        paredIzquierda.position.set(- (window.innerWidth / 2), 0, 0);
        paredDerecha.position.set(window.innerWidth / 2, 0, 0);
        paredSuperior.position.set(0, window.innerHeight / 2, 0);
        paredInferior.position.set(0, - (window.innerHeight / 2), 0);
        paredTrasera.position.set(0, 0, 25);
        paredDelantera.position.set(0, 0, - 25);

        paredes.push(paredIzquierda);
        paredes.push(paredDerecha);
        paredes.push(paredSuperior);
        paredes.push(paredInferior);

        scene.add(paredIzquierda);
        scene.add(paredDerecha);
        scene.add(paredSuperior);
        scene.add(paredInferior);
        scene.add(paredDelantera);
        scene.add(paredTrasera);

    }
}

