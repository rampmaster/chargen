// Plantilla: Objeto de referencia
var Plantilla = function(tipo) {
	var plantillas = {
		'mortal': {
			// Relgas lógicas de Freebies y XP
			'puntos_iniciales': {
				'atributos': [6, 4, 3],
				'habilidades': [11, 7, 4]
			},
			// Propiedad que contiene objeto con la hoja de personaje
			'obj': {
				'Nombre': '',
				'Jugador': '',
				'Crónica': '',
				'Naturaleza': '',
				'Conducta': '',
				'Concepto': '',
				'Descripción': '',
				'Atributos': {
					'Físicos': {
						'Fuerza': 1,
						'Destreza': 1,
						'Resistencia': 1
					},
					'Sociales': {
						'Carisma': 1,
						'Manipulación': 1,
						'Apariencia': 1
					},
					'Mentales': {
						'Percepción': 1,
						'Inteligencia': 1,
						'Astucia': 1
					}
				},
				'Habilidades': {
					'Talentos': {
						'Alerta': 0,
						'Atletismo': 0,
						'Callejeo': 0,
						'Empatía': 0,
						'Esquivar': 0,
						'Expresión': 0,
						'Intimidación': 0,
						'Liderazgo': 0,
						'Pelea': 0,
						'Subterfugio': 0,
					},
					'Técnicas': {
						'Armas CC': 0,
						'Armas de Fuego': 0,
						'Conducir': 0,
						'Etiqueta': 0,
						'Interpretación': 0,
						'Pericias': 0,
						'Seguridad': 0,
						'Sigilo': 0,
						'Superviciencia': 0,
						'Trato con Animales': 0,
					},
					'Conocimientos': {
						'Academicismo': 0,
						'Ciencias': 0,
						'Finanzas': 0,
						'Informática': 0,
						'Investigación': 0,
						'Leyes': 0,
						'Lingüística': 0,
						'Medicina': 0,
						'Ocultismo': 0,
						'Política': 0,
					}
				},
				'Ventajas': {
					'Trasfondos': {
						'Aliados': 0,
						'Contactos': 0,
						'Equipo': 0,
						'Fama': 0,
						'Influencia': 0,
						'Recursos': 0
					},
					'Virtudes': {
						'Conciencia': 1,
						'Autocontrol': 1,
						'Coraje': 1
					},
					'Fé': {
						'Permanente': 0
					},
					'Humanidad': {
						'Permanente': 0
					},
					'Fuerza de Voluntad': {
						'Permanente': 0,
						'Temporal': 0
					}
				},
				'Salud': {
					'Daño normal': {
						'Temporal': 0
					},
					'Daño Agravado': {
						'Temporal': 0
					}
				},
				'Experiencia': 0,
				'Experiencia Total': 0,
				'Méritos': {},
				'Defectos':	{},
				/*
				'Fecha de Nacimiento': '',
				'Edad': 0,
				'Pelo': '',
				'Raza': '',
				'Nacionalidad': '',
				'Estatura': 0,
				'Peso': 0,
				'Sexo': 0,
				'Lugar de Trabajo': '',
				'Horario de Trabajo': '',
				*/
			}
		}
	}
	return (plantillas[tipo]) ? plantillas[tipo] : plantillas.mortal 
}