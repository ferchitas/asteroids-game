function Ovni (){

	ObjetoMovible.call (this);

	this.animate = function(){

	}
}

Ovni.prototype = new ObjetoMovible();