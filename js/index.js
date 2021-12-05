
//Cargamos todo el contenido de la pagina con el evento load
window.addEventListener('load', function(){
	//array de imagenes
	var listaImagenes = ["aubergine", "banana", "carrots", "cherries", "dollar", "lemon", "orange", "peach", "potato", "tomato"];
	
	//creamos la variable monedas que correspondera al elemento html que tenga como id "monedas"
	var monedas = document.getElementById("monedas");
	//Le damos el valor 0 a monedas
	monedas = 0;

	//Creamos la variable muestraMonedas que correspondera al elemento html que tenga como id "muestraMonedas"
	var muestraMonedas = document.getElementById("muestraMonedas");
	
	//El contenido de muestra monedas será monedas
	muestraMonedas.innerHTML = monedas;

	//Creamos la variable btnintroducir que correspondera al elemento html que tenga como id "btnintroducir"
	const btnintroducir = document.getElementById("btnintroducir");
	//creamos la variable historial que correspondera al elemento html que tenga como id "historial"
	var historial = document.getElementById("historial");
	
	//Creamos la funcion introducir que recibe un estado. Dependiendo del estado que reciba el btnintroducir estará activado o no
	function introducir(estado){

		btnintroducir.enabled = estado ;
		
	}
	
	//Creamos la funcion exit que recibe un estado. Dependiendo del estado que reciba el btnintroducir estará desactivado o no
	function exit(estado){

		 btnintroducir.disabled = estado;
		 	 		
	}


	//LLamamos a la funcion introducir con valor true.
	introducir(true);

	//Cuando se haga click sobre el btnintroducir
	btnintroducir.addEventListener('click',function(){
		

		//Monedas tendra el valor puesto en el input
		monedas = document.getElementById("monedas").value;
		//muestraMonedas tendra el contenido de monedas
		muestraMonedas.innerHTML = monedas;
		//Llamamos a la funcionn exit con valor true
		exit(true);

	
		//creamos un elemento li que tendra el contenido "Se han introducido monedas". La variable historial contiene ese li
		var li = document.createElement("li")
		li.textContent = "Se han introducido monedas";

		historial.append(li);


	});

	//Creamos la variable salir que correspondera al elemento html que tenga como id "salir"
	var salir = document.getElementById("salir");
	//Cuando se haga click en el boton salir
	salir.addEventListener('click', function(){

		
		//creamos un elemento li que tendra el contenido "Se han sacado todas monedas". La variable historial contiene ese li
		var li = document.createElement("li")
		li.textContent = "Se han sacado todas las monedas";

		historial.append(li);
		
		//Alert con el numero de monedas conseguidas
		alert("Has conseguido un total de "+ monedas + " monedas");

		monedas= document.getElementById("monedas");
		//Actualizamos el valor del input y de muestraMonedas despues de la alerta
		monedas.value = muestraMonedas.innerHTML;
		muestraMonedas.innerHTML = 0;
		//llamamos a la funcion salir con valor false
		exit(false);

	});


		
	//Funcion para sumar los premios 
	function sumarPremio(premio){
			//A monedas se le sumara los premios
			monedas += premio;
			muestraMonedas.innerHTML = monedas;
			//creamos un elemento li que mostrara el resultado de la tirada y el premio. La variable historial contiene ese li
			var li = document.createElement("li")
			li.textContent =  ( "!!!!! " + arrayResultado + " !!!!!" + "  Ganas " + premio + " monedas.");

			historial.append(li);

			return muestraMonedas;

	}
	
	//Funcion para crear numero aleatorio
	function numeroAleatorio(){
               return Math.floor(Math.random()*9);
          	}


    //Funcion que defina el valor de la tirada
    var arrayResultado;
    function valorTirada(){

    	//Del array listaImagenes me devuelve un indice aleatorio(cada una de las imagenes que tenemos),
    	//que se guardara en las variables resultado1,2 y 3
			var resultado1 = numeroAleatorio(listaImagenes);
			resultado1 = listaImagenes[resultado1];

			var resultado2 = numeroAleatorio(listaImagenes);
			resultado2 = listaImagenes[resultado2];
			
			var resultado3 = numeroAleatorio(listaImagenes);
			resultado3 =listaImagenes[resultado3];
		
		//arrayResultado contiene cada uno de los resultados
			arrayResultado = [resultado1, resultado2 , resultado3];

			return arrayResultado;

    }

    //Creamos una funcion que actualice la imagen de cada columna de la tragaperras en funcion del indice aleatorio que haya recibido.
    function actualizaImg(arrayResultado){
    		//Le cambiamos la ruta src a cada elemento hmtl imagen que hemos creado con cada una de las posiciones del arrayResultado
    		var imagen1 = document.getElementById("imagen1");
			imagen1.src = `./img/${arrayResultado[0]}.png`;
			var imagen2 = document.getElementById("imagen2");
			imagen2.src = `./img/${arrayResultado[1]}.png`;
			var imagen3 = document.getElementById("imagen3");
			imagen3.src = `./img/${arrayResultado[2]}.png`;

    }


    //Creamos una funcion que muestre el resultado de cada tirada y asigne los diferentes premios 
    function mostrarResultado(arrayResultado){
    	//3 dollares
    	if(arrayResultado[0]=="dollar" && arrayResultado[1]== "dollar" && arrayResultado[2]== "dollar" ){

    		let premio;
    		premio = 10;
    		sumarPremio(premio);
    		console.log("Premio:"+premio);
    		muestraMonedas.innerHTML = monedas;

    	//2 dollares
    	}else if(arrayResultado[0]=="dollar" && arrayResultado[1]== "dollar" ||
    	 arrayResultado[0]=="dollar" && arrayResultado[2]=="dollar" || 
    	 arrayResultado[1]=="dollar" && arrayResultado[2]== "dollar"){

    		
    		premio = 4;
    		sumarPremio(premio);
    		console.log("Premio:"+premio);
    		muestraMonedas.innerHTML = monedas;
    	

    	//1 dollar y 2 figuras
    	}else if(arrayResultado[0]=="dollar" && arrayResultado[1]==arrayResultado[2] 
    		|| arrayResultado[1]== "dollar" && arrayResultado[0]==arrayResultado[2] || arrayResultado[2]=="dollar" 
    		&& arrayResultado[0]==arrayResultado[1]){	
    	
    		premio = 3;
    		sumarPremio(premio);
    		console.log("Premio:"+premio);
    		muestraMonedas.innerHTML = monedas;




    	//1 dollar
    	}else if(arrayResultado[0]=="dollar" || arrayResultado[1]== "dollar" || arrayResultado[2]=="dollar"){
    		
    		
    		premio = 1;
    		sumarPremio(premio);
    		console.log("Premio:"+premio);
    		muestraMonedas.innerHTML = monedas;



    	}else if(arrayResultado.includes("dollar") == false) {
    		
    		//3 figuras iguales
    		if(arrayResultado[0]==arrayResultado[1] 
    			&& arrayResultado[0]==arrayResultado[2] && arrayResultado[1]==arrayResultado[2]
    			&& arrayResultado[1]==arrayResultado[0] && arrayResultado[2]==arrayResultado[1]
    			&& arrayResultado[2]==arrayResultado[0]){

    			premio = 5;
    			sumarPremio(premio);
    			console.log("Premio:"+premio);
    			muestraMonedas.innerHTML = monedas;

    		//2 figuras iguales
    		}else if(arrayResultado[0]==arrayResultado[1] || arrayResultado[0]==arrayResultado[2] || 
    			arrayResultado[1]==arrayResultado[2]){

    			premio = 2;
    			sumarPremio(premio);
    			console.log("Premio:"+premio);
    			muestraMonedas.innerHTML = monedas;


    		}

    	}

    }


    //Creamos una funcion tirar que reciba el numero de monedas que tenemos 
	function tirar(monedas){
		//Si tenemos monedas llama al resto de funciones
		if(monedas>0){

			var li = document.createElement("li")
			li.textContent = "Gastas una moneda";

			historial.append(li);
			numeroAleatorio();

			valorTirada();

			actualizaImg(arrayResultado);
			
			mostrarResultado(arrayResultado);
          	



		}else{ //Si no hay monedas muestra un alert
			alert("No te quedan monedas");
		}





	}


	//creamos una variable palanca asignada al elemento html que tiene el id palanca
	var palanca = document.getElementById("palanca");
	//cuando el raton se suelta se cambia la ruta src por la de la imagen de la palanca hacia abajo
	palanca.onmousedown = (event) => (palanca.src ="img/palancaDOWN.png");
	//cuando el raton vuelve se cambia la ruta src por la de la imagen de la palanca hacia arriba
	palanca.onmouseup = (event) => {

			palanca.src ="img/palancaUP.png";
			
			//Si no tenemos monedas imprime un alert
			if(monedas<=0){
				alert("Introduce monedas, por favor");
				return ;
			}else{

			//Si tenemos monedas, resta una por cada vez que la palanca sube y llama a la funcion tirar que recibe las monedas que tengamos
			monedas--;
			muestraMonedas.innerHTML = monedas;
			
			
			tirar(monedas);
			}
			
	};


		


});