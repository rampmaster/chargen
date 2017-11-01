var Personaje = function(nombre, arq) {
	var self = this;
	this.nombre = nombre;
	this.atributos = arq;
	this.habilidades = {
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
			'Armas C.C': 0,
			'Armas de Fuego': 0,
			'Conducir': 0,
			'Etiqueta': 0,
			'Interpretación': 0,
			'Pericias': 0,
			'Seguridad': 0,
			'Sigilo': 0,
			'Superviciencia': 0,
			'T. Animales': 0,
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
		},
	};
	this.htmlobj = document.createElement('div');
	this.htmlobj.setAttribute('id', nombre);
	this.htmlobj.setAttribute('class', 'personaje');
}

// Generar Nuevo Personaje con parámetros aleatorios
var arquetipoRandom = arquetipos[rand(0, arquetipos.length - 1)];
var p = new Personaje('Juan Carlos', arquetipoRandom);
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
// Redeclarar Columnba
var row = document.createElement('div');
row.setAttribute('class', 'row');
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
//console.log(p.atributos);
//console.log(p.habilidades);
document.getElementById('main').appendChild(p.htmlobj);