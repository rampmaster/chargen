var Rasgo = function(nombre, obj, max = null) {
	return {
		'render': function(target = null) {
			var rasgo = dom.create('div', null, 'rasgo')
			var pts = ''
			max = (max !== null) ? max : 5;
			for (var i = max; i > 0; i--) {
				pts += ' -'
			}
			rasgo.innerHTML = '<p style="margin-left: 4em;">' + nombre + pts + '</p>'
			var container = (target != null) ? target : document.body 
			container.append(rasgo)
		}
	}
}
var Rasgos = function(nombre, obj) {
	return {
		'render': function(target = null) {
			for(var key in obj) {
				var titulo = dom.create('div', null, 'titulo')
				titulo.innerHTML += '<p style="margin-left: 2em;">' + key + ' : ' + typeof obj[key] + '</p>'
				var container = (target != null) ? target : document.body 
				container.append(titulo)
				for(var inner_key in obj[key]) {
					var rasgo = new Rasgo(inner_key, obj[key][inner_key])
					rasgo.render(container)
				}		
			}
		}
	}
}
var Ventajas = function(nombre, obj) {
	return {
		'render': function(target = null) {
			for(var key in obj) {
				var titulo = dom.create('div', null, 'titulo')
				titulo.innerHTML += '<p style="margin-left: 2em;">' + key + ' : ' + typeof obj[key] + '</p>'
				var container = (target != null) ? target : document.body 
				container.append(titulo)
				if(key === 'Trasfondos') {
					for(var inner_key in obj[key]) {
						var rasgo = new Rasgo(inner_key, obj[key][inner_key], 5)
						rasgo.render(container)
					}
				} else if(key === 'Otros') {
					// Módulo de Rasgo Personalizado: 
					// Permite crear y eliminar rasgos con nombres definidos por el usuario.
					for(var inner_key in obj[key]) {
						var rasgo = new Rasgo(inner_key, obj[key][inner_key], 5)
						rasgo.render(container)
					}
				} else {
					for(var inner_key in obj[key]) {
						var rasgo = new Rasgo(inner_key, obj[key][inner_key], 10)
						rasgo.render(container)
					}		
				}
			}
		}
	}
}
var Salud = function(nombre, obj) {
	return {
		'render': function(target = null) {
			for(var key in obj) {
				var titulo = dom.create('div', null, 'titulo')
				titulo.innerHTML += '<p style="margin-left: 2em;">' + key + ' : ' + typeof obj[key] + '</p>'
				var container = (target != null) ? target : document.body 
				container.append(titulo)
				for(var inner_key in obj[key]) {
					var rasgo = new Rasgo(inner_key, obj[key][inner_key], 7)
					rasgo.render(container)
				}		
			}
		}
	}
}