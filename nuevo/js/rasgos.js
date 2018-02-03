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
var Rasgo = function(nombre, obj) {
	return {
		'render': function(target = null) {
			var rasgo = dom.create('div', null, 'rasgo')
			rasgo.innerHTML = '<p style="margin-left: 3em;">' + nombre + ' : ' + typeof obj + '</p>'
			var container = (target != null) ? target : document.body 
			container.append(rasgo)
		}
	}
}