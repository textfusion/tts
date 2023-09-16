function UploadBar() {
    document.getElementById("upload").style.display = "block";
    document.getElementById("txt").style.display = "none";
}
function TextBox(){
    document.getElementById("upload").style.display = "none";
    document.getElementById("txt").style.display = "block";
}
function Erase(){
    document.getElementById("textToSyn").value = "";
}
function reseti(){
    document.getElementById("pdfFile").value = "";
    document.getElementById("para").innerHTML="Drag your files here or click in this area.";
    document.getElementById("im").style.display="";
    document.getElementById("para").style.lineHeight = "10px";
}
function getFileName(myFile){
    var file = myFile.files[0];  
    var filename = file.name;
    document.getElementById("para").style.lineHeight = "210px";
    document.getElementById("para").innerHTML=filename+" is selected";
    document.getElementById("im").style.display="none";
}
