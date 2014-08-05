var opciones = ["Piedra", "Papel", "Tiejera", "Lagarto", "Spock"];
//					0		1			2			3		4
var victorias = 0;
var Empates = 0;
var Derrotas = 0;
function calcular(sistema, usuario){
	tablaFuerza = [
		[ // Esto es piedra 0
			[2,3], // Gana a Tiejera 2 y Largarto 3
		],
		[ // Esto es Papel 1
			[0,4], // Gana a Piedra 0 y Spock 4
		],
		[ // Esto es Tiejeras 2
			[1,3], // Gana a Papel 1 y Lagarto 3
		],
		[ // Esto es Lagarto 3
			[1,4], // Gana a Papel 1 y Spock 4
		],
		[ // Esto es Spock 4
			[0,2], // Gana a Piedra 0 y Tiejera 2
		]
	];
	if(sistema == usuario){
		alert('Empate\nUsuario: ' + opciones[usuario] + '\nSistema: ' + opciones[sistema]);
		Empates++;
		document.getElementById('empates').innerHTML = Empates;
	}else if (tablaFuerza[usuario][0].indexOf(sistema) > -1){
		victorias++;
		document.getElementById('victorias').innerHTML = victorias;
		alert('Ganaste\nUsuario: ' + opciones[usuario] + '\nSistema: ' + opciones[sistema]);
	}else{
		Derrotas++;
		document.getElementById('derrotas').innerHTML = Derrotas;
		alert('Perdiste\nUsuario: ' + opciones[usuario] + '\nSistema: ' + opciones[sistema]);
	}
	console.log(tablaFuerza);
	return false;
}

function jugar (){
	var sistema = Math.floor((Math.random() * 5));
	var usuario = document.getElementById('opcion').value;
	calcular(sistema, usuario);
	return false;
}