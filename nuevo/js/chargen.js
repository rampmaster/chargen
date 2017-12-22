var chargen = function() {
	var plantilla = {}
	var personaje = {}
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
		plantilla: plantilla,
		personaje: personaje,
		render: function() {
			var menu = new Menu(operaciones)
			document.body.append(menu)
		}
	}
}()
chargen.render()