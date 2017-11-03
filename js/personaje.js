var Personaje = function(nombre, atr, hab) {
	var self = this;
	this.nombre = nombre;
	this.atributos = atr;
	this.habilidades = hab;
	this.htmlobj = document.createElement('div');
	this.htmlobj.setAttribute('id', nombre);
	this.htmlobj.setAttribute('class', 'personaje');
}

// Generar Nuevo Personaje con parámetros aleatorios
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