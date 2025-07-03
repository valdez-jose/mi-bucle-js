/**
Este bucle se usa para recorrer listas donde necesitamos saber en que posición del array estamos. Vamos a ver más casos útiles luego, pero la verdad es que donde se luce for...in es: recorriendo objetos.

¿queeee? ¿se puede recorrer un objeto? En realidad podemos recorrer sus keys (claves) y de nuevo, sirve para casos específicos donde en vez de un array tenemos un objeto y queremos hacer algo con todas sus propiedades.

Este ejemplo un poquitín avanzado pero muestra un buen caso de uso de for..in. 
*/

// Tenemos un objeto que tiene una propiedad
// por cada usuario. Este uso de los objetos se
// suele llamar: mapa

// En este caso es un mapa id de: usuario -> número de mascotas
const mascotasPorUsuario = {
  hj12ds92j: 2,
  kd49fs27a: 1,
  lk34mc92z: 3,
  mn73gb45d: 0,
  qw84kp12x: 4,
  pr12mc97v: 1,
  xb49wd28y: 2,
  pd20zy98r: 0,
  cn59hd21s: 5,
  vd28ka34o: 3,
};

// Esto se usa para lógicas donde necesitamos la data
// organizada de esta forma para no andar 
// iterando arrays enormes una y otra vez.

// Igual, tranqui que vamos a ver más adelante
// en que casos van a aparecer estos mapas.
// Pero si queremos saber que usuario tiene más mascotas
// en base a este objeto podemos iterarlo con for...in

let idConMasMascotas = null;
let maxMascotas = 0;

for (const id in mascotasPorUsuario) {
  if (mascotasPorUsuario[id] > maxMascotas) {
    maxMascotas = mascotasPorUsuario[id];
    idConMasMascotas = id;
  }
}

console.log(
  `El ID con más mascotas es ${idConMasMascotas}, con ${maxMascotas} mascotas.`
);

console.log('Fin del ejercicios')
console.log('')

//Para saber los minimos

let idConMenosMascotas = null;
let minMascotas = Infinity; // Inicializamos con el valor más alto posible

for (const id in mascotasPorUsuario) {
  if (mascotasPorUsuario[id] < minMascotas) {
    minMascotas = mascotasPorUsuario[id];
    idConMenosMascotas = id;
  }
}

console.log(
  `El ID con menos mascotas es ${idConMenosMascotas}, con ${minMascotas} mascotas.`
);
console.log('Fin del ejercicios')