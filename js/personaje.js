var Template = function() {
	return {
		'Nombre': '',
		'Jugador': '',
		'Crónica': '',
		'Naturaleza': '',
		'Conducta': '',
		'Concepto': '',
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
				'Cinecias': 0,
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
			'Fuerza de Voluntad': {
				'Permanente': 0,
				'Temporal': 0
			},
			'Virtudes': {
				'Conciencia': 1,
				'Autocontrol': 1,
				'Coraje': 1
			}
		},
		'Salud': 0,
		'Experiencia': 0,
		/*
		'Méritos': {},
		'Defectos':	{},
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
		'Descripcion': ''
		*/
	};
};
var Personaje = function(obj = null) {
	var self = this;
	this.obj = (obj != null) ? obj : new Template(); 
	this.htmlobj = null;
	this.generar = function() {
		console.log('Generando personaje');
		// Atributos
		self.obj['Atributos'] = arquetipos[rand(0, arquetipos.length - 1)];
		// Habilidades
		self.obj['Habilidades'] = new Template()['Habilidades'];
		var tipos = Object.keys(self.obj['Habilidades']);
		var puntos_iniciales = [11, 7, 4];
		var puntos = [11, 7, 4];
		shuffle(tipos);
		for(t in tipos) {
			while(puntos[t] > 0) {
				var tipo = tipos[t];
				var habilidades_tipo = Object.keys(self.obj['Habilidades'][tipo]);
				var habilidad_random = habilidades_tipo[rand(0, habilidades_tipo.length - 1)];
				self.obj['Habilidades'][tipo][habilidad_random]++;
				puntos[t]--;
			}
		}
		// Renombrar propiedades
		for(tipo in self.obj['Habilidades']) {
			console.log(tipo);
			var i = tipos.indexOf(tipo);
			var pool = puntos_iniciales[i];
			new_key = tipo + '(' + pool + ')';
			Object.defineProperty(self.obj['Habilidades'], new_key, Object.getOwnPropertyDescriptor(self.obj['Habilidades'], tipo));
	    delete self.obj['Habilidades'][tipo];
		}
		self.render(document.getElementById('char-cont'));
	};
	this.render = function(contenedor) {
		if(self.htmlobj != null) {
			delete self.htmlobj;
			while (contenedor.firstChild) {
				contenedor.removeChild(contenedor.firstChild);
			}
		}
		self.htmlobj = document.createElement('div');
		self.htmlobj.setAttribute('class', 'personaje');
		var row = document.createElement('div');
		row.setAttribute('class', 'row');
		var col1 = document.createElement('div');
		col1.setAttribute('class', 'col-md-6');
		row.appendChild(col1);
		var col2 = document.createElement('div');
		col2.setAttribute('class', 'col-md-6');
		row.appendChild(col2);
		count = 0;
		for(var key in self.obj) {
			count++;
			var type = typeof self.obj[key];
			if(count == 10) {
				var linebreak = document.createElement('br');
				self.htmlobj.appendChild(linebreak);
			}
			if(type == 'string') {
				var label = document.createElement('label');
				label.setAttribute('class', 'col-sm-2 col-form-label');
				label.innerHTML = key;
				var column = document.createElement('div');
				column.setAttribute('class', 'col-sm-10');
				var campo = document.createElement('input');
				campo.setAttribute('id', key);
				campo.setAttribute('type', 'text');
				campo.setAttribute('class', 'form-control');
				campo.setAttribute('value', (self.obj[key] != undefined) ? self.obj[key] : '');
				campo.addEventListener('change', function(){
					self.obj[this.id] = this.value;
					console.log(self.obj[this.id]);
					console.log(this.id + ' actualizado.');
				});
				column.appendChild(campo);
				if(count < 4) {
					var innerrow = document.createElement('div');
					innerrow.setAttribute('class', 'row form-group');
					innerrow.appendChild(label);
					innerrow.appendChild(column);
					col1.appendChild(innerrow);
				} else if(count > 3 && count < 7) {
					var innerrow = document.createElement('div');
					innerrow.setAttribute('class', 'row form-group');
					innerrow.appendChild(label);
					innerrow.appendChild(column);
					col2.appendChild(innerrow);
				} else {
					var row = document.createElement('div');
					row.setAttribute('class', 'row form-group');
					row.appendChild(label);
					row.appendChild(column);
				}
			} else if(type == 'object') {
				var titulo = document.createElement('h2');
				titulo.setAttribute('class', 'text-center');
				titulo.innerHTML = key;
				self.htmlobj.appendChild(titulo);
				var row = document.createElement('div');
				row.setAttribute('class', 'row');
				for(tipo in self.obj[key]) {
					var col = document.createElement('div');
					col.setAttribute('class', 'col-md-4');
					var titulo = document.createElement('h3');
					titulo.innerHTML = tipo;
					col.appendChild(titulo);
					for(h in self.obj[key][tipo]) {
						var val = self.obj[key][tipo][h];
						if(h == 'Temporal') {
							var ventaja = new Ventaja(h, self.obj[key][tipo], val, true);
							col.appendChild(ventaja.htmlobj);
						} else if(h == 'Permanente') {
							var ventaja = new Ventaja(h, self.obj[key][tipo], val);
							col.appendChild(ventaja.htmlobj);
						} else {
							var rasgo = new Rasgo(h, self.obj[key][tipo], val);
							col.appendChild(rasgo.htmlobj);
						}
					}
					row.appendChild(col);
				}
			} else if(type == 'number') {
				var row = document.createElement('div');
				row.setAttribute('class', 'row form-group');
				var label = document.createElement('label');
				label.setAttribute('class', 'col-sm-2 col-form-label');
				label.innerHTML = key;
				var column = document.createElement('div');
				column.setAttribute('class', 'col-sm-10');
				var campo = document.createElement('input');
				campo.setAttribute('id', key);
				campo.setAttribute('type', 'number');
				campo.setAttribute('class', 'form-control');
				campo.setAttribute('value', self.obj[this.id]);
				campo.addEventListener('change', function(){
					self.obj[this.id] = this.value;
					self.render(document.getElementById('char-cont'));
					console.log(this.id + ' actualizado.');
				});
				column.appendChild(campo);
				row.appendChild(label);
				row.appendChild(column);
			}
			self.htmlobj.appendChild(row);
		}
		contenedor.appendChild(self.htmlobj);
	};
	this.cargar = function(obj) {
		console.log('Cargando personaje');
    self.obj = obj;
		self.render(document.getElementById('char-cont'));
	};
	this.nuevo = function() {
		console.log('Personaje nuevo');
		window.location.replace(window.location.pathname + window.location.search + window.location.hash);
	};
};