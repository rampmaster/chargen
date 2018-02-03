// CHARGEN: Generador y Administrador de Personajes para Mundo de Tinieblas
var chargen = function() {
	var personaje = new Personaje('mortal')
	var operaciones = {
		nuevo: function() {
			console.log('Nuevo Personaje.')
		},
		generar: function() {
			console.log('Generar Personaje.')
		},
		guardar: function() {
			console.log('Guardar Personaje.')
		},
		descargar: function() {
			console.log('Descargar Personaje.')
		},
		cargar: function() {
			console.log('Cargar Personaje.')
		},
		plantilla: function() {
			console.log('Seleccionar Plantilla.')
		}
	}
	return {
		personaje: personaje,
		render: function(target = null) {
			var menu = new Menu(operaciones)
			var container = (target != null) ? target : document.body 
			container.append(menu)
			this.personaje.render(container)
		}
	}
}()
chargen.render()