var Menu = function(op) {
	var menu = dom.create('ul', 'menu')
	var options = []
	for (var i in op) {
		if(i == 'cargar') {
			var icon = dom.create('i', null, ['fa', 'fa-upload'])
			var opt = dom.create('form', 'myform')
			var p = dom.create('p')
			var span = dom.create('span', 'cargar', null, icon.outerHTML + ' Cargar: ')
			var input = dom.input('files[]', 'file', 'myfile', null, 'multipart')
			input.addEventListener('change', op[i])
			p.append(span)
			p.append(input)
			opt.append(p)
		} else if(i == 'plantilla') {
			var templates = [
				'Mortal',
				'Vampiro',
				'Hombre Lobo',
				'Mago'
			]
			var icon = dom.create('i', null, ['fa', 'fa-upload'])
			var opt = dom.create('span', null, null, icon.outerHTML + ' Cargar: ')
			var select = dom.create('select')
			select.addEventListener('change', op[i])
			var i = 0
			templates.forEach(function(p) {
				var option = dom.option(p, i)
				i++
				select.append(option)
			})
			opt.append(select)
		} else {
			var opt = dom.link(i, op[i], '#')
		}
		var li = dom.create('li')
		li.append(opt)
		options.push(li)
	}
	for (var i in options) {
		menu.append(options[i])
	}
	return menu
}