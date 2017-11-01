var Punto = function(i) {
	this.htmlobj = document.createElement('div');
	this.htmlobj.setAttribute('class', 'punto');
	this.htmlobj.setAttribute('data-punto', i);
	this.render = function(rasgo) {
		var puntos = rasgo.htmlobj.getElementsByClassName('punto');
		puntos = [].slice.call(puntos);
		for (var i = 0; i < puntos.length; i++) {
			puntos[i].style.backgroundColor = 'white';
		}
		puntos.forEach(function(e, i, a) {
			if(rasgo.valor >= puntos[i].getAttribute('data-punto')) {
				puntos[i].style.backgroundColor = 'black';
			}
		});
	}
}
var Rasgo = function(nombre, valor = null) {
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
	for (var i = 1; i <= 5; i++) {
		var p = new Punto(i);
		p.render(self);
		p.htmlobj.addEventListener('click', function(e) {
			var punto = e.target.getAttribute('data-punto');
			self.valor = (self.valor == punto) ? self.valor - 1 : punto;
			p.render(self);
		});
		this.htmlobj.appendChild(p.htmlobj);
	}
}