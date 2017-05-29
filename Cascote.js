function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function radianes(grados) {
    return grados * Math.PI / 180;
}
var cascoteMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff});
var cascoteGeometry = new THREE.CubeGeometry();  

//bucle que genera los puntos arrededor de un punto inicial , cada uno de estos puntos tiene una distancia al centro distinta
//y los angulos que forman ns radios de cada uno de estos putos tanbien es variable

var radio = 0;
var pos0 = new THREE.Vector3(0, 0, 0);
for (var i = 0; i <= 120; i += getRandomInt(30, 45)) {
    var d = getRandomInt(10, 20);
    var nuevoPunto = new THREE.Vector3( d * Math.cos(radianes(i)), d * Math.sin(radianes(i)), 0.0);
    cascoteGeometry.vertices.push(nuevoPunto);
    if(pos0.distanceTo(nuevoPunto)>radio) radio = pos0.distanceTo(nuevoPunto);
}

cascoteGeometry.vertices.push(pos0);

for (var i = 1; i < cascoteGeometry.vertices.length; i++) {
    cascoteGeometry.faces.push(new THREE.Face3(cascoteGeometry.vertices.length-1 , i, (i + 1)%cascoteGeometry.vertices.length ));
}
cascoteGeometry.faces.push(new THREE.Face3(cascoteGeometry.vertices.length-1, cascoteGeometry.vertices.length-2, 0));

function Cascote (){

	Physijs.SphereMesh.call (this, cascoteGeometry, cascoteMaterial, 10);

    
    this.box = new Physijs.SphereMesh(
        cascoteGeometry,
        cascoteMaterial,
        10
    );

    this.dividir = function(){


    }

	this.impulsar = function( x, y, z ){

		this.applyCentralImpulse(new THREE.Vector3(x, y, z));
	}
}

Cascote.prototype = new Physijs.SphereMesh(cascoteGeometry, cascoteMaterial);