
/*
Este bucle se usa en casos muy específicos, donde tenemos que repetir una acción al menos una vez y no sabemos cuantas veces. El caso clásico es pedirle al usuario que ingrese un dato y no continuar con el resto del programa hasta que lo haga. El siguiente ejemplo es un poco avanzado pero es para que se entienda el uso y para que vean que solo se usa en casos muy particulares.

*/

let modoEspera;

do {
  console.log("Las entradas todavía no están disponibles");
  modoEsperar = sigueElModoEsperaParaLasEntradas();
  // esto va a chequear una vez y va a repetirse
  // este chequeo hasta que la variable cambie;
} while (modoEspera);

console.log("Las entradas están disponibles");


