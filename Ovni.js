var ovniMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
var ovniGeometry = new THREE.CubeGeometry();
  
ovniGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
ovniGeometry.vertices.push(new THREE.Vector3(8, 12, 0));
ovniGeometry.vertices.push(new THREE.Vector3(13, 0, 0));
ovniGeometry.vertices.push(new THREE.Vector3(22, -6, 0));
ovniGeometry.vertices.push(new THREE.Vector3(16, -12, 0));
ovniGeometry.vertices.push(new THREE.Vector3(-16, -12, 0));
ovniGeometry.vertices.push(new THREE.Vector3(-22, -6, 0));
ovniGeometry.vertices.push(new THREE.Vector3(-13, 0, 0));
ovniGeometry.vertices.push(new THREE.Vector3(-8, 12, 0));
ovniGeometry.vertices.push(new THREE.Vector3(8, 12, 0));

ovniGeometry.faces.push(new THREE.Face3(0, 1, 2));
ovniGeometry.faces.push(new THREE.Face3(0, 2, 3));
ovniGeometry.faces.push(new THREE.Face3(0, 3, 4));
ovniGeometry.faces.push(new THREE.Face3(0, 4, 5));
ovniGeometry.faces.push(new THREE.Face3(0, 5, 6));
ovniGeometry.faces.push(new THREE.Face3(0, 6, 7));
ovniGeometry.faces.push(new THREE.Face3(0, 7, 8));
ovniGeometry.faces.push(new THREE.Face3(0, 8, 9));
ovniGeometry.faces.push(new THREE.Face3(0, 9, 10));


function Ovni (){

	Physijs.SphereMesh.call (this, ovniGeometry, ovniMaterial, 10);


	this.box = new Physijs.SphereMesh(
        ovniGeometry,
        ovniMaterial,
        10
    );
}

Ovni.prototype = new Physijs.SphereMesh(ovniGeometry, ovniMaterial);