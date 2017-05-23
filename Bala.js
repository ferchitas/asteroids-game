var balaMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00, transparent: true});
var balaGeometry = new THREE.BoxGeometry( 1.5, 20, 1.5);

function Bala (){

	Physijs.BoxMesh.call (this, balaGeometry, balaMaterial,1000);

	this.bala = new Physijs.BoxMesh(
        balaGeometry,
        balaMaterial,
        10
    );
    this.impulsar = function( x, y, z ){

		this.applyCentralForce(new THREE.Vector3(x, y, z));
	}
}

Bala.prototype = new Physijs.BoxMesh(balaGeometry, balaMaterial);