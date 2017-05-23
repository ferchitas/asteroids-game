function Creator() {
	
	this.crearBala(scene, vector){

		var bala = new Bala();
		bala.position.set(vector);
		scene.add(bala);
		return bala;
	}
}