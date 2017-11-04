$('#nuevo').click(function(){
	console.log('Personaje nuevo');
	p.nuevo();
});
$('#generar').click(function(){
	console.log('Generando personaje');
	p.generar();
});
$('#guardar').click(function(){
	ref.push(p.obj);
	console.log('Personaje guardado');
});
$('#descargar').click(function(){
	delete p.htmlobj;
	console.log('Iniciando descarga');
	download(JSON.stringify(p, null, 4), 'personaje.json', 'text/plain');
});
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
    //console.log(filecontent);
    var obj = JSON.parse(filecontent);
    console.log('Cargando personaje'); 
    p.cargar(obj.obj);
    p.render(document.getElementById('char-cont'));
  };
  reader.readAsText(evt.target.files[0]);
};