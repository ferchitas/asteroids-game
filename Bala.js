function Bala (){

	ObjetoMovible.call (this);

	var sphereMaterial = new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true});
	var squareGeometry = new THREE.Geometry(); 
	squareGeometry.vertices.push(new THREE.Vector3( -5.0,  8.0, 0.0));
	squareGeometry.vertices.push(new THREE.Vector3(5.0, 9.50, 0.0));
	squareGeometry.vertices.push(new THREE.Vector3(3.0, 6.0, 0.0));
	squareGeometry.vertices.push(new THREE.Vector3(7.0, -0.50, 0.0));
	squareGeometry.vertices.push(new THREE.Vector3(10.0, -7.0, 0.0));				
	squareGeometry.vertices.push(new THREE.Vector3(5.0, -9.0, 0.0));	
	squareGeometry.vertices.push(new THREE.Vector3(3.0, -7.50, 0.0));
	squareGeometry.vertices.push(new THREE.Vector3(2.0, -9.0, 0.0));
	squareGeometry.vertices.push(new THREE.Vector3(0.0, -7.50, 0.0));
	squareGeometry.vertices.push(new THREE.Vector3(1.0, -7.0, 0.0));
	squareGeometry.vertices.push(new THREE.Vector3(-1.0, -6.50, 0.0));
	squareGeometry.vertices.push(new THREE.Vector3(-8.0, -10.0, 0.0));
	squareGeometry.vertices.push(new THREE.Vector3(-10.0, -3.0, 0.0));
	squareGeometry.vertices.push(new THREE.Vector3(-5.0, -2.50, 0.0));
	squareGeometry.vertices.push(new THREE.Vector3(-8.0, 3.50, 0.0));
	squareGeometry.vertices.push(new THREE.Vector3(-4.0, 5.0, 0.0));
	squareGeometry.faces.push(new THREE.Face3(0, 1, 15));
	squareGeometry.faces.push(new THREE.Face3(1, 2, 15)); 
	squareGeometry.faces.push(new THREE.Face3(15, 2, 10));
	squareGeometry.faces.push(new THREE.Face3(2, 9, 10));
	squareGeometry.faces.push(new THREE.Face3(2, 6, 9));
	squareGeometry.faces.push(new THREE.Face3(2, 3, 6));
	squareGeometry.faces.push(new THREE.Face3(3, 4, 6));
	squareGeometry.faces.push(new THREE.Face3(4, 5, 6));
	squareGeometry.faces.push(new THREE.Face3(6, 7, 8));
	squareGeometry.faces.push(new THREE.Face3(6, 8, 10));
	squareGeometry.faces.push(new THREE.Face3(10, 11, 13));
	squareGeometry.faces.push(new THREE.Face3(11, 12, 13));
	squareGeometry.faces.push(new THREE.Face3(10, 13, 15));
	squareGeometry.faces.push(new THREE.Face3(13, 14, 15));

	this.asteroide = new THREE.Mesh(squareGeometry, sphereMaterial);

	this.animate = function(){

	}
}

Bala.prototype = new ObjetoMovible();