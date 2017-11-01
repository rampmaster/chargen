var Punto = function(i) {
	this.htmlobj = document.createElement('div');
	this.htmlobj.setAttribute('class', 'punto');
	this.htmlobj.setAttribute('data-punto', i);
	this.htmlobj.style.width = '1em';
	this.htmlobj.style.height = '1.3em';
	this.htmlobj.style.border = 'solid 1px black';
	this.htmlobj.style.borderRadius = '100%';
	this.htmlobj.style.marginRight = '.3em';
	this.htmlobj.style.display = 'inline-block';
	this.htmlobj.style.position = 'relative';
	this.htmlobj.style.top = '.2em';
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
	label.style.paddingRight = '1em';
	label.style.textTransform = 'capitalize';
	this.htmlobj.appendChild(label);
	for (var i = 1; i <= 5; i++) {
		var p = new Punto(i);
		p.render(self);
		p.htmlobj.addEventListener('click', function(e) {
			console.log('!!!');
			self.valor = e.target.getAttribute('data-punto');
			p.render(self);
		});
		this.htmlobj.appendChild(p.htmlobj);
	}
}
var Tipo = function(nombre) {
	this.nombre = nombre;
}
var Grupo = function(nombre) {
	this.nombre = nombre;
}