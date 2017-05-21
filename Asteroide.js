    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function radianes(grados) {
        return grados * Math.PI / 180;
    }
    var material = new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true});
    var squareGeometry = new THREE.CubeGeometry();  
    
    //buvle que genera los puntos arrededor de un punto inicial , cada uno de estos puntos tiene una distancia al centro distinta
    //y los angulos que forman ns radios de cada uno de estos putos tanbien es variable
    for (var i = 0; i <= 360; i += getRandomInt(30, 45)) {
        var d = getRandomInt(1.0, 10);
        squareGeometry.vertices.push(new THREE.Vector3( d * Math.cos(radianes(i)), d * Math.sin(radianes(i)), 0.0))
    }
    squareGeometry.vertices.push(new THREE.Vector3( 0.0, 0.0, 0.0));
    
    for (var i = 1; i < squareGeometry.vertices.length; i++) {
        squareGeometry.faces.push(new THREE.Face3(squareGeometry.vertices.length-1 , i, (i + 1)%squareGeometry.vertices.length ));
    }

function Asteroide (){

	Physijs.ConcaveMesh.call (this, squareGeometry,new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true}),10);

    
    this.box = new Physijs.ConcaveMesh(
        squareGeometry,
        material,
        10
    );

    this.dividir = function(){


    }

	this.impulsar = function( x, y, z ){

		this.applyCentralImpulse(new THREE.Vector3(x, y, z));
	}
}

Asteroide.prototype = new Physijs.ConcaveMesh(squareGeometry, material);