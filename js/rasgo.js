var Punto = function(i, temp = false) {
	this.htmlobj = document.createElement('div');
	this.htmlobj.setAttribute('class', (temp) ? 'punto temp' : 'punto');
	this.htmlobj.setAttribute('data-punto', i);
	this.render = function(rasgo) {
		var puntos = rasgo.htmlobj.getElementsByClassName('punto');
		puntos = [].slice.call(puntos);
		for (var i = 0; i < puntos.length; i++) {
			console.log(i);
			puntos[i].style.backgroundColor = '#999';
		}
		puntos.forEach(function(e, i, a) {
			if(rasgo.valor >= parseInt(puntos[i].getAttribute('data-punto'))) {
				puntos[i].style.backgroundColor = 'black';
			}
		});
	}
}
var Rasgo = function(nombre, obj, valor = null) {
	var self = this;
	this.nombre = nombre;
	this.valor = (valor) ? valor : 0;
	this.htmlobj = document.createElement('div');
	this.htmlobj.setAttribute('id', nombre);
	this.htmlobj.setAttribute('class', 'campo');
	var label = document.createElement('span');
	label.setAttribute('class', 'lb');
	label.innerHTML = this.nombre;
	this.htmlobj.appendChild(label);
	var puntos = document.createElement('div');
	puntos.setAttribute('id', 'puntos-' + nombre);
	puntos.setAttribute('class', 'puntos');
	this.htmlobj.appendChild(puntos);
	for (var i = 1; i <= 5; i++) {
		var p = new Punto(i);
		p.render(self);
		p.htmlobj.addEventListener('click', function(e) {
			var punto = e.target.getAttribute('data-punto');
			self.valor = (self.valor == punto) ? self.valor - 1 : punto;
			obj[nombre] = self.valor;
			p.render(self);
		});
		puntos.appendChild(p.htmlobj);
	}
}
var Ventaja = function(nombre, obj, valor = null, temp = false) {
	var self = this;
	this.nombre = nombre;
	this.valor = (valor) ? valor : 0;
	this.htmlobj = document.createElement('div');
	this.htmlobj.setAttribute('id', nombre);
	this.htmlobj.setAttribute('class', 'ventaja');
	var puntos = document.createElement('div');
	puntos.setAttribute('id', 'puntos-' + nombre);
	puntos.setAttribute('class', 'puntos');
	this.htmlobj.appendChild(puntos);
	for (var i = 1; i <= 10; i++) {
		var p = new Punto(i, temp);
		p.render(self);
		p.htmlobj.addEventListener('click', function(e) {
			var punto = e.target.getAttribute('data-punto');
			self.valor = (self.valor == punto) ? self.valor - 1 : punto;
			obj[nombre] = self.valor;
			p.render(self);
		});
		puntos.appendChild(p.htmlobj);
	}
}
var Salud = function(nombre, obj, valor = null, temp = false) {
	//console.log(obj);
	var self = this;
	this.nombre = nombre;
	this.valor = (valor) ? valor : 0;
	this.htmlobj = document.createElement('div');
	this.htmlobj.setAttribute('id', nombre);
	this.htmlobj.setAttribute('class', 'campo');
	var label = document.createElement('span');
	label.setAttribute('class', 'lb');
	label.innerHTML = this.nombre;
	this.htmlobj.appendChild(label);
	var puntos = document.createElement('div');
	puntos.setAttribute('id', 'puntos-' + nombre);
	puntos.setAttribute('class', 'puntos');
	this.htmlobj.appendChild(puntos);
	for (var i = 1; i <= 7; i++) {
		var p = new Punto(i, temp);
		p.render(self);
		p.htmlobj.addEventListener('click', function(e) {
			var punto = e.target.getAttribute('data-punto');
			self.valor = (self.valor == punto) ? self.valor - 1 : punto;
			console.log(obj);
			obj[nombre] = self.valor;
			p.render(self);
		});
		puntos.appendChild(p.htmlobj);
	}
}