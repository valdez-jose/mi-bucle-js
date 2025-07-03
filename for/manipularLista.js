
/*
En este desafío de cierre del capítulo, pondremos en práctica el uso de bucles para abordar uno de los problemas que más lagrimas de devs principiantes provocan: el filtrado de listas.

Manipular listas
Ya hemos filtrado arrays haciendo preguntas sobre su contenido para generar un nuevo array.
*/
const cafeterias = [
  { nombre: "Café Central", distancia: 0.5},
  { nombre: "Barista Brew", distancia: 1.2 },
  { nombre: "Latte Love", distancia: 0.8 },
  { nombre: "Espresso Express", distancia: 2.3 },
  { nombre: "Cappuccino Corner", distancia: 0.9 },
  { nombre: "Mocha Mood", distancia: 1.5 },
];

const cafeteriasCercanas = [];
let index = 0;

for (const cafeteria of cafeterias) {
  if (cafeteria.distancia < 1) {
    cafeteriasCercanas[index] = cafeteria;
    index++;
  }
}

console.log(cafeteriasCercanas);