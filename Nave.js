var naveMaterial = new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true});
var naveGeometry = new THREE.CubeGeometry();

naveGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
naveGeometry.vertices.push(new THREE.Vector3(0, 40, 0));
naveGeometry.vertices.push(new THREE.Vector3(-7, -10, 0));
naveGeometry.vertices.push(new THREE.Vector3(7, -10, 0));
naveGeometry.vertices.push(new THREE.Vector3(0, -10, 10));
naveGeometry.vertices.push(new THREE.Vector3(0, -10, -10));

naveGeometry.faces.push(new THREE.Face3(0, 1, 2));
naveGeometry.faces.push(new THREE.Face3(0, 3, 1));
naveGeometry.faces.push(new THREE.Face3(0, 3, 2));
naveGeometry.faces.push(new THREE.Face3(0, 1, 4));
naveGeometry.faces.push(new THREE.Face3(0, 2, 4));
naveGeometry.faces.push(new THREE.Face3(0, 5, 1));
naveGeometry.faces.push(new THREE.Face3(0, 5, 2));
naveGeometry.faces.push(new THREE.Face3(0, 6, 1));
naveGeometry.faces.push(new THREE.Face3(0, 6, 2));


function Nave (){

	Physijs.BoxMesh.call (this, naveGeometry, naveMaterial, 10);

	this.vidas = 3;
    this.balas = new Array();
	this.nave = new Physijs.BoxMesh(
        naveGeometry,
        naveMaterial,
        10
    );

    this.disparar = function (scene) {
    	//creamos la bala
    	var bala = new Bala();
    	//la nombramos en orden para tenerlas controladas
    	bala.name = "bala " + (this.balas.length + 1);
    	//le ponemos la misma posicion que la nave
    	bala.position.set(
    		this.position.x - (50 * Math.sin(this.rotation.z)), 
    		this.position.y + (50 * Math.cos(this.rotation.z)), 
    		this.position.z);
    	bala.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z);

    	//la añadimos a la escena
    	scene.add(bala);
    	//y la metemos en el array de balas
    	this.balas.push(bala);
    	bala.applyCentralForce(new THREE.Vector3(-(10000000 * Math.sin(this.rotation.z)), 10000000 * Math.cos(this.rotation.z),0));

    }

    //quita una vida si le queda alguna sino devuelve falso
    this.quitarVida = function () {
        if(this.vidas < 1) return false;
        else {
            this.vidas -= 1;
            return this.vidas;
        }
    }
    this.impulsar = function( x, y, z ){

		this.applyCentralForce(new THREE.Vector3(x, y, z));
	}
}

Nave.prototype = new Physijs.BoxMesh(naveGeometry, naveMaterial);