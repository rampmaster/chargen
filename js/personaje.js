var Personaje = function(nombre, atr, hab, obj = null) {
	var self = this;
	//* Super objeto con datos del personaje. 
	//  Los métodos deben manipular los datos de este objeto
	this.obj = (obj != null) ? obj : 
	{
		"nombre": "",
		"jugador": "",
		"cronica": "",
		"naturaleza": "",
		"conducta": "",
		"concepto": "",
		"atributos": {
			"fisicos": {
				"fuerza": 0,
				"destreza": 0,
				"resistencia": 0
			},
			"sociales": {
				"carisma": 0,
				"manupulacion": 0,
				"apariencia": 0
			},	
			"mentales": {
				"inteligencia": 0,
				"percepcion": 0,
				"astucia": 0
			}
		},
		"habilidades": {
			"talentos": {
				"alerta": 0,
				"atletismo": 0,
				"callejeo": 0,
				"empatia": 0,
				"esquivar": 0,
				"expresion": 0,
				"intimidacion": 0,
				"liderazgo": 0,
				"pelea": 0,
				"subterfugio": 0
			},
			"tecnicas": {
				"armascc": 0,
				"armasdefuego": 0,
				"conducir": 0,
				"etiqueta": 0,
				"interpretacion": 0,
				"pericias": 0,
				"seguridad": 0,
				"sigilo": 0,
				"superviciencia": 0,
				"tratoconanimales": 0
			},
			"conocimientos": {
				"academicismo": 0,
				"cinecias": 0,
				"finanzas": 0,
				"informatica": 0,
				"investigacion": 0,
				"leyes": 0,
				"linguistica": 0,
				"medicina": 0,
				"ocultismo": 0,
				"politica": 0
			}
		},
		"ventajas": {
			"trasfondos": {
				"aliados": 0,
				"contactos": 0,
				"equipo": 0,
				"fama": 0,
				"influencia": 0,
				"recursos": 0
			},
			"fuerzadevoluntad": {
				"temporal": 0,
				"permanente": 0
			},
			"virtudes": {
				"conciencia": 0,
				"autocontrol": 0,
				"coraje": 0
			}
		},
		"salud": 0,
		"experiencia": 0,
		"meritos": {},
		"defectos":	{},
		"fechadenacimiento": "",
		"edad": 0,
		"pelo": "",
		"raza": "",
		"nacionalidad": "",
		"estatura": 0,
		"peso": 0,
		"sexo": 0,
		"lugardetrabajo": "",
		"horariodetrabajo": "",
		"descripcion": ""
	}; 
	this.nombre = nombre;
	this.atributos = atr;
	this.habilidades = hab;
	this.htmlobj = document.createElement('div');
	this.htmlobj.setAttribute('id', nombre);
	this.htmlobj.setAttribute('class', 'personaje');
	this.generar = function() {
	};
	this.guardar = function() {
	};
	this.descargar = function() {
	};
	this.cargar = function() {
	};
	this.eliminar = function(id) {
	};
	this.append = function(target) {
		target.appendChild(self.htmlobj);
	};
};

// Atributos
var atributos = arquetipos[rand(0, arquetipos.length - 1)];
var p = new Personaje('Juan Carlos', atributos, habilidades);
var row = document.createElement('div');
row.setAttribute('class', 'row');
for(tipo in p.atributos) {
	var col = document.createElement('div');
	col.setAttribute('class', 'col-md-4');
	var titulo = document.createElement('h3');
	titulo.innerHTML = tipo;
	col.appendChild(titulo);
	for(a in p.atributos[tipo]) {
		var val = p.atributos[tipo][a];
		var atributo = new Rasgo(a, val);
		col.appendChild(atributo.htmlobj);
	}
	row.appendChild(col);
}
var titulo = document.createElement('h2');
titulo.innerHTML = 'Atributos';
p.htmlobj.appendChild(titulo);
p.htmlobj.appendChild(document.createElement('hr'));
p.htmlobj.appendChild(row);
p.htmlobj.appendChild(document.createElement('br'));
p.htmlobj.appendChild(document.createElement('br'));

// Habilidades
var tipos = Object.keys(p.habilidades);
var puntos_iniciales = [11, 7, 4];
var puntos = [11, 7, 4];
shuffle(tipos);
for(t in tipos) {
	while(puntos[t] > 0) {
		var tipo = tipos[t];
		var habilidades_tipo = Object.keys(p.habilidades[tipo]);
		var habilidad_random = habilidades_tipo[rand(0, habilidades_tipo.length - 1)];
		p.habilidades[tipo][habilidad_random]++;
		puntos[t]--;
	}
}
var row = document.createElement('div');
row.setAttribute('class', 'row');
for(tipo in p.habilidades) {
	var col = document.createElement('div');
	col.setAttribute('class', 'col-md-4');
	var i = tipos.indexOf(tipo);
	var pool = puntos_iniciales[i];
	var titulo = document.createElement('h3');
	titulo.innerHTML = tipo + '(' + pool + ')';
	col.appendChild(titulo);
	for(h in p.habilidades[tipo]) {
		var val = p.habilidades[tipo][h];
		var habilidad = new Rasgo(h, val);
		col.appendChild(habilidad.htmlobj);
	}
	row.appendChild(col);
}
var titulo = document.createElement('h2');
titulo.innerHTML = 'Habilidades';
p.htmlobj.appendChild(titulo);
p.htmlobj.appendChild(document.createElement('hr'));
p.htmlobj.appendChild(row);
p.htmlobj.appendChild(document.createElement('br'));
p.htmlobj.appendChild(document.createElement('br'));

// Mostrar Personaje
p.append(document.getElementById('main'));