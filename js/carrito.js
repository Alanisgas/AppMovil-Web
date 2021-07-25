
function opacar(b)
{	
	if (b.style.opacity == ""){
		b.style.opacity = "0.5";
	}
	else {
		b.style.opacity = "";
	}
}

const resultado = document.getElementById("resultado");
const container = document.querySelector(".container");

function carrito(elemento){
	var total=0;
	let contador = 0;

	container.addEventListener("click", (e) => {
		if (e.target.classList.contains("quitar")) {
			contador--;
			total--;
			//pintarContador();
			var totales= document.getElementById('total').value=total;
		}
	
		if (e.target.classList.contains("añadir")) {
			contador++;
			total++;
			//pintarContador();
			var totales= document.getElementById('total').value=total;
		}
		e.stopPropagation()
		});
	
		document.body.addEventListener('click', e => {console.log('body')})

}

carrito();