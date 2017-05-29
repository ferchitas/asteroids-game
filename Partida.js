function Partida (){
	var altura = window.innerHeight;

	this.puntuacion = 0;
	this.nave = new Nave();
	this.asteroidesNuevos = new Array();
	this.cascotes = new Array();
	this.paredes = new Array();
	this.ovnis = new Array();


	
	this.impulsarNave = function () {
		this.nave.setLinearVelocity(new THREE.Vector3(100000*Math.sin(partida.nave.rotation.z), 100000*Math.cos(partida.nave.rotation.z), 0));
		console.log(this.nave.getLinearVelocity());
	}

	//crea ovnis a razon del numero que le pases, para cada oleada
	this.crearOvnis = function (scene, maxOvnis) {
		
		for (var i = 0; i < maxOvnis; i++) {
			this.ovnis[i] = new Ovni();
			this.ovnis[i].name = "ovni " + (i + 1);
			this.ovnis[i].position.set(Math.floor(Math.random() * window.innerWidth) - window.innerWidth / 2, 
				Math.floor(Math.random() * altura) - altura / 2,
				0);
			scene.add(this.ovnis[i]);
			this.ovnis[i].setLinearVelocity(new THREE.Vector3(Math.random() * (200 - 100) - 100, 
							Math.random() * (200 - 100) - 100, 
							0));
		}
	}

	//crea asteroides a razon del numero que le pases, para cada oleada
	this.crearAsteroides = function (scene, maxAsteroides) {
		
		for (var i = 0; i < maxAsteroides; i++) {
			var nuevoAsteroide = new Asteroide();
			nuevoAsteroide.position.set(Math.floor(Math.random() * window.innerWidth) - window.innerWidth / 2, 
				Math.floor(Math.random() * altura) - altura / 2,
				0);
			nuevoAsteroide.name = "asteroide " + (i + 1);
			this.asteroidesNuevos.push(nuevoAsteroide);
			scene.add(nuevoAsteroide);
			nuevoAsteroide.setLinearVelocity(new THREE.Vector3(Math.random() * (900 - 100) - 100, 
							Math.random() * (900 - 100) - 100, 
							0));
		}
	}

	this.crearCascotes = function (scene, asteroide) {
		
		var random = Math.round( Math.random() * (3 - 1) + 1 );
		for (var i = 0; i < random; i++) {
			var nuevoCascote = new Cascote();
			nuevoCascote.position.set(((Math.random() * (50 - 50) - 50 )) + asteroide.position.x, 
				( (Math.random() * (50 - 50) - 50 )) + asteroide.position.y, 
				0);
			nuevoCascote.name = "cascote " + (i + 1);
			this.cascotes.push(nuevoCascote);
			scene.add(nuevoCascote);
			nuevoCascote.setLinearVelocity(Math.random() * (150 - 50) + 50, Math.random() * (150 - 50) + 50, 0);
		}
	}

	this.quitarBala = function (scene, bala) {
		scene.remove(bala);
		this.nave.balas.splice(this.nave.balas.indexOf(bala), 1);
	}

	this.quitarOvni = function (scene, ovni) {
		scene.remove(ovni);
		this.ovnis.splice(this.ovnis.indexOf(ovni), 1);
	}

	this.quitarCascote = function (scene, cascote) {
		
		scene.remove(cascote);
		this.cascotes.splice(i, 1);
	}

	this.quitarAsteroide = function (scene, asteroide, i) {
		
		scene.remove(asteroide);
		this.asteroidesNuevos.splice(i, 1);
	}

	this.crearParedes = function (scene) {
        var paredMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
        var fondoMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.0});
        var paredIzquierdaGeometry = new THREE.BoxGeometry(2, altura, 50);
        var paredDerechaGeometry = new THREE.BoxGeometry(2, altura, 50);
        var paredSuperiorGeometry = new THREE.BoxGeometry(window.innerWidth , 2, 50);
        var paredInferiorGeometry = new THREE.BoxGeometry(window.innerWidth , 2, 50); 
        var paredDelanteraGeometry = new THREE.BoxGeometry(2 * window.innerWidth , 2 * altura, 2);
        var paredTraseraGeometry = new THREE.BoxGeometry(2 * window.innerWidth , 2 * altura, 2);

        var paredIzquierda = new Physijs.BoxMesh(paredIzquierdaGeometry, paredMaterial, 0);
        var paredDerecha = new Physijs.BoxMesh(paredDerechaGeometry, paredMaterial, 0);
        var paredInferior = new Physijs.BoxMesh(paredInferiorGeometry, paredMaterial, 0);
        var paredSuperior = new Physijs.BoxMesh(paredSuperiorGeometry, paredMaterial, 0);
        var paredDelantera = new Physijs.BoxMesh(paredDelanteraGeometry, fondoMaterial, 0);
        var paredTrasera = new Physijs.BoxMesh(paredTraseraGeometry, fondoMaterial, 0);

        paredIzquierda.position.set(- (window.innerWidth / 2), 0, 0);
        paredDerecha.position.set(window.innerWidth / 2, 0, 0);
        paredSuperior.position.set(0, altura / 2, 0);
        paredInferior.position.set(0, - (altura / 2), 0);
        paredTrasera.position.set(0, 0, 25);
        paredDelantera.position.set(0, 0, - 25);

        this.paredes.push(paredIzquierda);
        this.paredes.push(paredDerecha);
        this.paredes.push(paredSuperior);
        this.paredes.push(paredInferior);

        scene.add(paredIzquierda);
        scene.add(paredDerecha);
        scene.add(paredSuperior);
        scene.add(paredInferior);
        scene.add(paredDelantera);
        scene.add(paredTrasera);

    }
}

