// Personaje: Objeto principal
var Personaje = function(tipo) {
	// Obtener Plantilla
	var plantilla = new Plantilla(tipo)
	// Crear nuevo objeto JSON en base a la propiedad 'obj' de la plantilla
	var obj = JSON.parse(JSON.stringify(plantilla.obj))
	return {
		'plantilla': plantilla,
		'obj': obj, 
		'render': function(target = null) {
			var personaje = dom.create('div', 'personaje')
			personaje.innerHTML += '<br><hr>'
			for(var key in obj) {
				if(typeof obj[key] === 'string') {
					personaje.innerHTML += '<p>' + key + ' <input type="text"></p>'
				} else if(typeof obj[key] === 'number') {
					personaje.innerHTML += '<p>' + key + ' <input type="number"></p>'
				} else {
					personaje.innerHTML += '<p>' + key + ' : ' + typeof obj[key] + '</p>'
				}
				if(typeof obj[key] === 'object') {
					// Detectar Componente
					if(key === 'Atributos' || key === 'Habilidades') {
						// Componente Rasgos
						var r = new Rasgos(key, obj[key])
						r.render(personaje)
					} else if(key === 'Ventajas') {
						// Componente Ventajas
						var r = new Ventajas(key, obj[key])
						r.render(personaje)
					} else if(key === 'Salud') {
						// Componente Salud
						var r = new Salud(key, obj[key])
						r.render(personaje)
					}
				}
			}
			var container = (target != null) ? target : document.body 
			container.append(personaje)
		}
	}
}