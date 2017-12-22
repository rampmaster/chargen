var dom = function() {
	return {
		create: function(type, id = null, _class = null, content = null) {
			var element = document.createElement(type);
			if(id != null) {
				element.id = id;
			}
			if(_class != null) {
				if(Array.isArray(_class)) {
					_class.forEach(function(c) {
						element.classList.add(c);
					})
				}
				if(typeof _class == 'string') {
					element.classList.add(_class)
				}
			}
			if(content != null) {
				element.innerHTML = content;
			}
			return element;
		},
		link: function(text, callback, href = null, id = null, _class = null) {
			var link = this.create('a', id, _class, text);
			if(href != null) {
				link.href = href;
			}
			link.addEventListener('click', callback);
			return link;
		},
		input: function(name, type, id = null, _class = null, multipart = null) {
			var input = this.create('input', id, _class);
			input.name = name;
			input.type = type;
			if(multipart != null) {
				input.setAttribute('multiple', '');
			}
			return input;
		},
		option: function(text, value, id = null, _class = null) {
			var option = this.create('option', id, _class);
			option.value = value;
			option.innerHTML = text;
			return option;
		}
	}
}();