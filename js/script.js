document.oncontextmenu = function(){return false;};
var a = document.getElementsByClassName('column');
var mina = [ 
	[1,0,0,1],
	[0,0,0,0],
	[1,0,0,0],
	[0,0,0,1]
];

var k = 0; j = 0, verde = 0;

// Asignamos identificadores numericos
for(var i = 0; i < a.length; i++){
	if(j == 4) j = 0;
	if(i >= 0 && i <= 3) k = 0;
	if(i >= 4 && i <= 7) k = 1;
	if(i >= 8 && i <= 11) k = 2;
	if(i >= 12 && i <= 15) k = 3;

	a[i].id = mina[k][j];
	j++;
}


function clic(b) {
	// Quitamos el evento de este elemento
	b.onclick = "";

	//Evaluamos si tiene mina
	if(b.id == 1){
		b.style.backgroundColor = "maroon";
	}else if(b.id == 0){
		b.style.backgroundColor = "lightgray";
		verde++;
	}

	//Evaluamos de qué color se puso el elemento
	//para determinar si ganó o perdió el usuario
	if(b.style.backgroundColor == "maroon"){
		perder();
	} else if(verde == 12){
		ganar();
	}
}

function perder(b) {
	//Coloreamos de rojo todas las minas
	//Y quitamos todos los eventos
	for(var i = 0; i < 16; i++){
		if(a[i].id == 1)
			a[i].style.backgroundColor = "maroon";
		a[i].onclick = "";
	}
	alert("Oops! Has encontrado una mina\n¡Perdiste! :(");
	document.getElementById('reiniciar').style.visibility = "visible";
}

function ganar(){
	//Quitamos los eventos de los elementos minados
	for(var i = 0; i < 16; i++){
		if(a[i].id == 1)
			a[i].onclick = "";
	}
	alert("Súper, no enontrase minas\n¡Ganaste! :)");
	document.getElementById('reiniciar').style.visibility = "visible";	
}