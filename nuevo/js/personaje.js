var Personaje = function(tipo) {
	var plantilla = new Plantilla(tipo)
	// Crear nuevo objeto JSON en base a la propiedad 'obj' de la plantilla
	var obj = JSON.parse(JSON.stringify(plantilla.obj))
	return {
		'plantilla': plantilla,
		'obj': obj, 
		'render': function(target = null) {
			var personaje = dom.create('div', 'personaje')
			personaje.innerHTML += '<br><hr>'
			personaje.innerHTML += '<h1>' + (this.obj.Nombre ? this.obj.Nombre : 'Personaje')  + '</h1>'
			personaje.innerHTML += '<h2>' + (this.obj.Jugador ? this.obj.jugador : 'Jugador')  + '</h2>'
			personaje.innerHTML += '<h2>' + (this.obj.Concepto ? this.obj.Concepto : 'Concepto')  + '</h2>'
			var container = (target != null) ? target : document.body 
			container.append(personaje)
		}
	}
}