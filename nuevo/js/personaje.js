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
				personaje.innerHTML += '<p>' + key + ' : ' + typeof obj[key] + '</p>'	
				if(typeof obj[key] === 'object') {
					// Detectar Componente
					if(key === 'Atributos' || key === 'Habilidades') {
						// Componente Rasgo
						for(var inner_key in obj[key]) {
							personaje.innerHTML += '<p style="margin-left: 1em;">' + inner_key + ' : ' + typeof obj[key][inner_key] + '</p>'
							if(typeof obj[key][inner_key] === 'object') {
								for(var inner_inner_key in obj[key][inner_key]) {
									personaje.innerHTML += '<p style="margin-left: 3em;">' + inner_inner_key + ' : ' + typeof obj[key][inner_key][inner_inner_key] + '</p>'
								}
							}		
						}
					} else if(key === 'Ventajas') {
						// Componente Ventajas
						for(var inner_key in obj[key]) {
							personaje.innerHTML += '<p style="margin-left: 1em;">' + inner_key + ' : ' + typeof obj[key][inner_key] + '</p>'
							if(typeof obj[key][inner_key] === 'object') {
								for(var inner_inner_key in obj[key][inner_key]) {
									personaje.innerHTML += '<p style="margin-left: 3em;">' + inner_inner_key + ' : ' + typeof obj[key][inner_key][inner_inner_key] + '</p>'
								}
							}		
						}
					} else if(key === 'Salud') {
						// Componente Salud
						for(var inner_key in obj[key]) {
							personaje.innerHTML += '<p style="margin-left: 1em;">' + inner_key + ' : ' + typeof obj[key][inner_key] + '</p>'
							if(typeof obj[key][inner_key] === 'object') {
								for(var inner_inner_key in obj[key][inner_key]) {
									personaje.innerHTML += '<p style="margin-left: 3em;">' + inner_inner_key + ' : ' + typeof obj[key][inner_key][inner_inner_key] + '</p>'
								}
							}		
						}
					} else {
						// Acción por defecto: Componente Indefinido, imprimir objeto
						for(var inner_key in obj[key]) {
							personaje.innerHTML += '<p style="margin-left: 1em;">' + inner_key + ' : ' + typeof obj[key][inner_key] + '</p>'
							if(typeof obj[key][inner_key] === 'object') {
								for(var inner_inner_key in obj[key][inner_key]) {
									personaje.innerHTML += '<p style="margin-left: 3em;">' + inner_inner_key + ' : ' + typeof obj[key][inner_key][inner_inner_key] + '</p>'
								}
							}		
						}
					}
				}
			}
			var container = (target != null) ? target : document.body 
			container.append(personaje)
		}
	}
}