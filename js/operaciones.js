$('#nuevo').click(function(){
	p.nuevo();
});
$('#generar').click(function(){
	p.generar();
});
$('#guardar').click(function(){
	ref.push(p.obj);
	console.log('Personaje guardado');
});
$('#descargar').click(function(){
	console.log('Iniciando descarga');
	download(JSON.stringify(p.obj, null, 4), 'personaje.json', 'text/plain');
});
// Cargar
document.forms['myform'].elements['myfile'].onchange = function(evt) {
  if(!window.FileReader) return; // Browser is not compatible
  var reader = new FileReader();
  reader.onload = function(evt) {
    if(evt.target.readyState != 2) return;
    if(evt.target.error) {
      alert('Error while reading file');
      return;
    }
    filecontent = evt.target.result;
    var obj = JSON.parse(filecontent);
    p.cargar(obj);
  };
  reader.readAsText(evt.target.files[0]);
};