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
        console.log(filecontent);
    };
    reader.readAsText(evt.target.files[0]);
};