alert("iniciando programa");
var nombre, apellido, validacion;
var name;

function datos(){
nombre = document.getElementById("nombre").value;

apellido = document.getElementById("apellido").value;

validacion = document.getElementById("validacion").checked;
}

function rev(){
document.getElementById("name").innerHTML = "name"+nombre;
document.getElementById("sdname").innerHTML = apellido;
if(validacion == false){
document.getElementById("valid").innerHTML = "Invalido";
}else{
document.getElementById("valid").innerHTML = "Valido";
}
}
