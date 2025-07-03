
/*
El bucle for...in es similar a for...of pero, en este caso las iteraciones contendrán una variable para acceder a la key (clave) de cada elemento del iterable.

Esto quiere decir que si iteramos un array, la variable contendrá el índice de su iteración (la posición en la cual nos encontramos).
For...in
For...in es parecido a for...of pero no te asigna el item del array directamente. Te asigna el índice.
*/

const redes = ["instagram", "tiktok", "twitch"];

for (const key in redes) {
  console.log(key);
}
// Veremos:
// 0
// 1
// 2

for (const key in redes) {
  console.log(redes[key]);
}

// Veremos:
// instagram
// tiktok
// twitch

























// Otro Ejemplo 1
const numeros_a = [3, 8, 12, 5, 9, 20, 7, 15];

for (const pos in numeros_a) {
  console.log(pos);
}

console.log('Fin del ejercicio')

//Ejemplo 2
/*Entonces si quisiera acceder a cada número tendríamos que hacer. */

const numeros_b = [3, 8, 12, 5, 9, 20, 7, 15];

for (const pos in numeros_b) {
  console.log(numeros_b[pos]);
}

console.log('Fin del ejercicio')
// ahora si vamos a ver los números del array


