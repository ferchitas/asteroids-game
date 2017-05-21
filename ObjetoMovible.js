function ObjetoMovible (){

	THREE.Object3D.call (this);

	this.posicion = { x : 0, y: 0 };

	this.animate = function(){


	}
}

ObjetoMovible.prototype = new THREE.Object3D();