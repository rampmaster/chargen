var Rasgo = function() {
	return {
		'render': function(target = null) {
			var rasgo = dom.create('div', null, 'rasgo')
			var container = (target != null) ? target : document.body 
			container.append(rasgo)
		}
	}
}