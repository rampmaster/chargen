var Personaje = function(obj = null) {
	var self = this;
	this.obj = (obj != null) ? obj : new Plantilla();
	this.atributos_iniciales = [6, 4, 3];
	this.puntos_iniciales = [11, 7, 4];
	this.htmlobj = null;
	this.generar = function() {
		console.log('Generando personaje');
		var newPlantilla = new Plantilla();
		// Atributos
		self.obj['Atributos'] = arquetipos[rand(0, arquetipos.length - 1)];
		// Habilidades
		self.obj['Habilidades'] = newPlantilla['Habilidades'];
		var tipos = Object.keys(self.obj['Habilidades']);
		var puntos = this.puntos_iniciales.slice();
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
			var i = tipos.indexOf(tipo);
			var pool = this.puntos_iniciales[i];
			new_key = tipo + '(' + pool + ')';
			Object.defineProperty(self.obj['Habilidades'], new_key, Object.getOwnPropertyDescriptor(self.obj['Habilidades'], tipo));
	    delete self.obj['Habilidades'][tipo];
		}
		// Trasfondos
		self.obj['Ventajas']['Trasfondos'] = newPlantilla['Ventajas']['Trasfondos'];
		var puntos = 5;
		while(puntos > 0) {
			var trasfondos = Object.keys(self.obj['Ventajas']['Trasfondos']);
			var trasfondoRandom = trasfondos[rand(0, trasfondos.length - 1)];
			self.obj['Ventajas']['Trasfondos'][trasfondoRandom]++;
			puntos--;
		}
		// Virtudes
		self.obj['Ventajas']['Virtudes'] = newPlantilla['Ventajas']['Virtudes'];
		var puntos = 7;
		while(puntos > 0) {
			var virtudes = Object.keys(self.obj['Ventajas']['Virtudes']);
			var virtudRandom = virtudes[rand(0, virtudes.length - 1)];
			self.obj['Ventajas']['Virtudes'][virtudRandom]++;
			puntos--;
		}
		// Humanidad
		var conciencia = self.obj['Ventajas']['Virtudes']['Conciencia'];
		var autocontrol = self.obj['Ventajas']['Virtudes']['Autocontrol']; 
		var humanidad = conciencia + autocontrol;
		self.obj['Ventajas']['Humanidad']['Permanente'] = humanidad;
		// Fuerza de Voluntad
		var fuerza_de_voluntad = self.obj['Ventajas']['Virtudes']['Coraje'];
		self.obj['Ventajas']['Fuerza de Voluntad']['Permanente'] = fuerza_de_voluntad;
		self.obj['Ventajas']['Fuerza de Voluntad']['Temporal'] = fuerza_de_voluntad;
		self.render(document.getElementById('char-cont'));
		// Salud
		self.obj['Salud'] = newPlantilla['Salud'];
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
			} else if(count == 11) {
				var linebreak = document.createElement('hr');
				self.htmlobj.appendChild(linebreak);
			}
			if(type == 'string') {
				var label = document.createElement('label');
				label.setAttribute('class', 'col-sm-2 col-form-label');
				label.innerHTML = key;
				var column = document.createElement('div');
				column.setAttribute('class', 'col-sm-10');
				if(key != 'Descripción') {
					var campo = document.createElement('input');
					campo.setAttribute('id', key);
					campo.setAttribute('type', 'text');
					campo.setAttribute('class', 'form-control');
					campo.setAttribute('value', (self.obj[key] != undefined) ? self.obj[key] : '');
				} else {
					var campo = document.createElement('textarea');
					campo.setAttribute('id', key);
					campo.setAttribute('class', 'form-control');
					campo.innerHTML = (self.obj[key] != undefined) ? self.obj[key] : '';
				}
				campo.addEventListener('change', function(){
					self.obj[this.id] = this.value;
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
				if(key == 'Salud') {
					var col = document.createElement('div');
					col.setAttribute('class', 'col-md-4 col-md-offset-4');
					for(tipo in self.obj[key]) {
						var val = self.obj[key][tipo]['Temporal'];
						var salud = new Salud(tipo, self.obj[key][tipo], val, true);
						col.appendChild(salud.htmlobj);
						row.appendChild(col);
					}
				} else {
					for(tipo in self.obj[key]) {
						var col = document.createElement('div');
						col.setAttribute('class', 'col-md-4');
						var titulo = document.createElement('h3');
						titulo.innerHTML = tipo;
						col.appendChild(titulo);
						if(tipo == 'Fé') {
							titulo.setAttribute('class', 'text-center');
							var val = self.obj['Ventajas']['Fé']['Permanente'];
							var ventaja = new Ventaja(tipo, self.obj[key][tipo], val, false, 5);
							col.appendChild(ventaja.htmlobj);
						} else {
							for(h in self.obj[key][tipo]) {
								var val = self.obj[key][tipo][h];
								if(h == 'Temporal') {
									titulo.setAttribute('class', 'text-center');
									var ventaja = new Ventaja(h, self.obj[key][tipo], val, true);
									col.appendChild(ventaja.htmlobj);
								} else if(h == 'Permanente') {
									titulo.setAttribute('class', 'text-center');
									var ventaja = new Ventaja(h, self.obj[key][tipo], val);
									col.appendChild(ventaja.htmlobj);
								} else {
									var rasgo = new Rasgo(h, self.obj[key][tipo], val);
									col.appendChild(rasgo.htmlobj);
								}
							}
						}
						row.appendChild(col);
					}
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
				});
				column.appendChild(campo);
				row.appendChild(label);
				row.appendChild(column);
			}
			self.htmlobj.appendChild(row);
			if(count == 6) {
				var linebreak = document.createElement('hr');
				self.htmlobj.appendChild(linebreak);
			}
			if(count == 7) {
				var linebreak = document.createElement('hr');
				self.htmlobj.appendChild(linebreak);
			}
			if(count == 11) {
				var linebreak = document.createElement('br');
				self.htmlobj.appendChild(linebreak);
			}
			if(count == 13) {
				var linebreak = document.createElement('hr');
				self.htmlobj.appendChild(linebreak);
				var parrafo = document.createElement('p') 
				parrafo.setAttribute('class', 'text-center');
				var legend = document.createElement('i');
				legend.innerHTML = 'Atributos: ' + this.atributos_iniciales[0] + '/' + this.atributos_iniciales[1] + '/' + this.atributos_iniciales[2] + ' · Habilidades: ' + this.puntos_iniciales[0] + '/' + this.puntos_iniciales[1] + '/' + this.puntos_iniciales[2] + ' · Trasfondos: 5 · Virtudes: 7 · Puntos Gratis: 21(5/2/1)';
				parrafo.appendChild(legend);
				self.htmlobj.appendChild(parrafo);
			}
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