var arq = rand(0, arquetipos.length - 1);
// Atributos
var atributos = arquetipos[arq];
var out = document.getElementById('out');
var habilidades = {
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