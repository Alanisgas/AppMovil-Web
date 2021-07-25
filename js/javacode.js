const api_key ='effa32e3dd2e40b9e6451eb559c3b7dd';
const IMG_URL ='https://image.tmdb.org/t/p/w500'; 
var contenido= document.querySelector('#contenido')

//Trae lo mas visto y lo guarda en localStorage
function paginaPrincipal(){
    var numPagina = 1;
    var sigPagina = document.getElementById("sigPagina");
    var paginaActual = document.getElementById("numPagina");
    fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=' + api_key + '&page=' + numPagina)
    .then(res => res.json())
    .then(data => {
        guardar_localStorage(data)
    })

    sigPagina.onclick = function () {
        numPagina = numPagina + 1;
        paginaActual.textContent = "Pagina " + numPagina;
        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=' + api_key + '&page=' + numPagina)
        .then(res => res.json())
        .then(data => {
            guardar_localStorage(data)
        })
    }
    
    antPagina.onclick = function () {
        if(numPagina > 1) {
            numPagina = numPagina - 1;
        paginaActual.textContent = "Pagina " + numPagina;
        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=' + api_key + '&page=' + numPagina)
        .then(res => res.json())
        .then(data => {
            guardar_localStorage(data)
        })
        }
        else{
            alert("No hay páginas anteriores para mostrar")
        }
    }
}

paginaPrincipal();

//Trae resultados de la busqueda y lo guarda en localStorage
function traer(){    
    var numPagina = 1;
    var movieName = document.getElementById('movieName').value;
    var sigPagina = document.getElementById("sigPagina");
    var paginaActual = document.getElementById("numPagina");
	fetch('https://api.themoviedb.org/3/search/movie?api_key='+ api_key + '&page=' + numPagina + '&query=' + movieName)
    		.then(res => res.json())
    		.then(data => {
       guardar_localStorage(data)
    })
    
    sigPagina.onclick = function () {
        numPagina = numPagina + 1;
        paginaActual.textContent = "Pagina " + numPagina;
        fetch('https://api.themoviedb.org/3/search/movie?api_key='+ api_key + '&page=' + numPagina + '&query=' + movieName)
        .then(res => res.json())
        .then(data => {
            guardar_localStorage(data)
        })
    }
    
    antPagina.onclick = function () {
        if(numPagina > 1) {
            numPagina = numPagina - 1;
        paginaActual.textContent = "Pagina " + numPagina;
        fetch('https://api.themoviedb.org/3/search/movie?api_key='+ api_key + '&page=' + numPagina + '&query=' + movieName)
        .then(res => res.json())
        .then(data => {
            guardar_localStorage(data)
        })
        }
        else{
            alert("No hay páginas anteriores para mostrar")
        }
    }
}

//Traigo peliculas por genero
function tipoPelicula(v){
    var numPagina = 1;
    var idTipoPelicula = v;
    var sigPagina = document.getElementById("sigPagina");
    var paginaActual = document.getElementById("numPagina");
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + api_key + '&with_genres='+ idTipoPelicula + '&page=' + numPagina)
    .then(res => res.json())
    .then(data => {
        guardar_localStorage(data)
    })

    sigPagina.onclick = function () {
        numPagina = numPagina + 1;
        paginaActual.textContent = "Pagina " + numPagina;
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + api_key + '&with_genres='+ idTipoPelicula + '&page=' + numPagina)
        .then(res => res.json())
        .then(data => {
            guardar_localStorage(data)
        })
    }
    
    antPagina.onclick = function () {
        if(numPagina > 1) {
            numPagina = numPagina - 1;
        paginaActual.textContent = "Pagina " + numPagina;
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + api_key + '&with_genres='+ idTipoPelicula + '&page=' + numPagina)
        .then(res => res.json())
        .then(data => {
            guardar_localStorage(data)
        })
        }
        else{
            alert("No hay páginas anteriores para mostrar")
        }
    }   
    
}

//Funcion para guardar objeto json en localStorage
function guardar_localStorage(data){
    var setObjeto = localStorage.setItem("Objeto", JSON.stringify(data))
    obtener_localStorage(setObjeto)
}

//Funcion para mostrar objeto json del localStorage
function obtener_localStorage(data){
    var getObjeto = JSON.parse(localStorage.getItem("Objeto", JSON.stringify(data)))
    tabla(getObjeto)
}


//Funcion para mostrar los resultados en pantalla. No muestra imagenes y titulos Null
function tabla(data){
    items.innerHTML=''
    for(let valor of data.results)
    {        
        let puntaje=valor.id;
        
        
        if (valor.poster_path != null){
            if (valor.original_title != null) {
                if(valor.overview!= null){
                items.innerHTML += 
                `
                <div id="get">
                    <img src="${IMG_URL+valor.poster_path}" alt="" id="getimg" onClick="opacar(this)" >
                        <p>Titulo: ${valor.original_title}</p>
                        <p>Estreno: ${valor.release_date}</p>
                        <p>Puntaje: ${valor.vote_average}</p>
                        <div id="det${puntaje}" style ="display:none;" class="info">
                        <p>Detalle:${valor.overview}</p>
                        <p>Lenguaje:${valor.original_language} </p>
                        
                        </div>
                        
                        <button target="_blank" class="compartir det" title="Detalle" id="btnmas" onClick="mostrar(${puntaje})" ></button>
                        <button class="compartir em" href="mailto:?subject=Titulo&body=Texto" title="Correo"></button>
                        <button class="compartir añadir" title="añadir" onClick=("this")></button> 
                        <button class="compartir quitar" title="quitar"></button> 

                 </div>   
                    
                
                
   
            
                `
                }
            }
        }
        
    }
}
//en esta funcion lo que hago es obtener un id unico para poder mostrar la descripcion que se desea 
function mostrar(a){
    var c= "det"+a;
    
   document.getElementById(c).style.display='block';
  
}
