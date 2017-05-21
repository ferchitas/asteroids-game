function Nave (){

	ObjetoMovible.call (this);

	var naveMaterial = new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true});
	var naveGeometry = new THREE.Geometry(); 
	naveGeometry.vertices.push(new THREE.Vector3( 0.0,  0.0, 0.0));
	naveGeometry.vertices.push(new THREE.Vector3(5.0, 0.0, 0.0));
	naveGeometry.vertices.push(new THREE.Vector3(-3.0, -3.0, 0.0));
	naveGeometry.vertices.push(new THREE.Vector3(-3.0, 3.0, 0.0));
	naveGeometry.faces.push(new THREE.Face3(0, 1, 2));
	naveGeometry.faces.push(new THREE.Face3(0, 3, 1));

	var reactorMaterial = new THREE.MeshLambertMaterial({color: 0x000000, wireframe: true, transparent: true});
	reactorMaterial.opacity = 0.0;
	var reactorGeometry = new THREE.Geometry(); 
	reactorGeometry.vertices.push(new THREE.Vector3(-1.50, 1.50, 0.0));
	reactorGeometry.vertices.push(new THREE.Vector3(-1.50, -1.50, 0.0));
	reactorGeometry.vertices.push(new THREE.Vector3(-5.0, 0.0, 0.0));
	reactorGeometry.faces.push(new THREE.Face3(0, 1, 2));

	this.reactor = new THREE.Mesh(reactorGeometry, reactorMaterial)
	this.add(this.reactor);
	this.add(new THREE.Mesh(naveGeometry, naveMaterial));
}

Nave.prototype = new ObjetoMovible();