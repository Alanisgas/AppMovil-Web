
function Enviar()
{
	var formulario="";
	var nombre=document.form1.nombre.value;
	var apellido=document.form1.apellido.value;
    var fechanac=document.form1.fechanac.value;
	var sexo=document.form1.sexo.value;
	var opiniones="";
	var b=document.form1.opinion.length;
	var email=document.form1.email.value;
    var comentario=document.form1.comentario.value;
	
	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(email))
		{
		true;
	   } else {
		alert("La dirección de email es incorrecta!.");
		return false;
	}
	
	for(a=0;a<b;a++)
		{
		if (document.form1.opinion[a].checked)
			opiniones+=document.form1.opinion[a].value;
		}
	
		if (nombre=="" || apellido=="" || fechanac=="" || sexo=="" || email=="")
		{
			alert("Los campos con asterisco son obligatorios!!!");
			return false;
		}

		if (opiniones.length==0)
		{
			alert("Debes seleccionar una opinión!");
			return false;
		}

		formulario= "Nombre: " + nombre + "\nApellido: " + apellido + 
		"\n" + "Fecha de Nac: " + fechanac + "\nSexo: " + sexo + "\nOpiniones: " + opiniones
		+ "\nE-mail: " + email + "\nComentarios: " + comentario;
		alert(formulario);

}

function Cancelar(){
	//Ingresamos un mensaje a mostrar
	var mensaje = confirm("¿Desea volver a la página anterior?");
	//Detectamos si el usuario acepto el mensaje
	if (mensaje) {
		history.back();
	}
	//Detectamos si el usuario denegó el mensaje
	else {
		return;
	}
}

function sololetras(e){	
	key=e.keyCode || e.which;

	teclado = String.fromCharCode(key).toLowerCase();
	letras="abcdefghijklmnñopqrstuvwxyz";

	especiales="8-37-38-46-164";

	teclado_especial=false;
	
	for(var i in especiales){
		if (key==especiales[i]){
		teclado_especial=true;break;
		}
	}
	
	if(letras.indexOf(teclado) ==-1 && !teclado_especial){
	
	return false;	
	}

}
