var naveMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
var naveGeometry = new THREE.ConeGeometry(25, 125, 3);

function Nave (){

	Physijs.SphereMesh.call (this, naveGeometry, naveMaterial,0);

	this.balas = new Array();
	this.nave = new Physijs.SphereMesh(
        naveGeometry,
        naveMaterial,
        10
    );

    function sleep(ms) {
	  return new Promise(resolve => setTimeout(resolve, ms));
	}

    this.disparar = async function (scene) {
    	//creamos la bala
    	var bala = new Bala();
    	//la nombramos en orden para tenerlas controladas
    	bala.name = "bala " + (this.balas.length + 1);
    	//le ponemos la misma posicion que la nave
    	bala.position.set(
    		this.position.x - (76 * Math.sin(this.rotation.z)), 
    		this.position.y + (76 * Math.cos(this.rotation.z)), 
    		this.position.z);
    	bala.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z);
    	//la añadimos a la escena
    	scene.add(bala);
    	//y la metemos en el array de balas
    	this.balas.push(bala);
    	//le damos el impulso
    	bala.applyCentralForce(new THREE.Vector3(-(10000000 * Math.sin(this.rotation.z)), 10000000 * Math.cos(this.rotation.z),0));
    	await sleep(2000);
    }

    this.impulsar = function( x, y, z ){

		this.applyCentralForce(new THREE.Vector3(x, y, z));
	}
}

Nave.prototype = new Physijs.SphereMesh(naveGeometry, naveMaterial);