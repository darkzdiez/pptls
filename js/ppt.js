var opciones = ["Piedra", "Papel", "Tiejera", "Lagarto", "Spock"];
//					0		1			2			3		4
function calcular(sistema, usuario){
	tablaFuerza = [
		[ // Esto es piedra 0
			[2,3], // Gana a Tiejera 2 y Largarto 3
			[1,4] // Pero Pierde ante Papel 1 y Spock 4
		],
		[ // Esto es Papel 1
			[0,4], // Gana a Piedra 0 y Spock 4
			[2,3] // Pero Pierde ante Tiejera 2 y Lagarto 3
		],
		[ // Esto es Tiejeras 2
			[1,3], // Gana a Papel 1 y Lagarto 3
			[0,4] // Pero Pierde ante Piedra 0 y Spock 4
		],
		[ // Esto es Lagarto 3
			[1,4], // Gana a Papel 1 y Spock 4
			[0,2] // Pero Pierde ante Piedra 0 y Tiejera 2
		],
		[ // Esto es Spock 4
			[0,2], // Gana a Piedra 0 y Tiejera 2
			[1,3] // Pero Pierde ante Papel 1 y Lagarto 3
		]
	];
	if(sistema == usuario){
		alert('Empate\nUsuario: ' + opciones[usuario] + '\nSistema: ' + opciones[sistema]);
	}else if (tablaFuerza[usuario][0].indexOf(sistema) > -1){
		alert('Ganaste\nUsuario: ' + opciones[usuario] + '\nSistema: ' + opciones[sistema]);
	}else{
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