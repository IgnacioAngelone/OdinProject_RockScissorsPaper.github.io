function jugar () {

var valor = prompt("Ingresa si o no");

switch(valor) {

  case "si":
    alert("Empieza el juego!");
    juegorps();
    break;

  case "no":
    break;

};

};

jugar();


function juegorps() {

const opciones = ["piedra", "papel", "tijera"];
let jugador_gana = 0;
let computadora_gana = 0;

for (let i = 0; i <= 3; i++) {


  const Pj_eleccion = prompt("Elige piedra, papel o tijera:");


  const Pc_eleccion = opciones[Math.floor(Math.random() * opciones.length)];


  if (Pj_eleccion == Pc_eleccion) {
    alert(`Empate! La ia eligio ${Pc_eleccion}`);
  } else if (Pj_eleccion == "tijera" && Pc_eleccion == "papel" || 
             Pj_eleccion == "papel" && Pc_eleccion == "piedra"  || 
             Pj_eleccion == "piedra" && Pc_eleccion == "tijera"){
    alert(`Ganaste! la ia eligio ${Pc_eleccion}`);
    jugador_gana++;
  } else {
    alert(`Perdiste! la ia eligio ${Pc_eleccion}`);
    computadora_gana++;
  }

};

if(jugador_gana > computadora_gana) {

alert("El jugador gano");

} else if (jugador_gana < computadora_gana) {

alert("Gano la computadora");

} else {

alert("no gano nadie");

};

};




