
/*
  Usando una variable podemos hacer que la condición comience siendo verdadera y en algún momento pase a ser falsa. Que es justamente lo que necesitamos para recorrer nuestro array.
*/

// iniciamos esto en 0
let i = 0; 

while (i < usuarios.length) { 
  // cada vez que esto se ejecuta
  // el while va a chequear si i es menor
  // a la cantidad de posiciones de nuestro array
  // si es menor, va a ejecutar todo el bloque 
  // una vez más

  // acá usamos la misma lógica pero en vez 
  // de escribir el número de posición
  // usamos i para que ir recorriendo 
  // una a una cada posición
  console.log("i vale", i)
  if (usuarios[i].mascotas.length > 0) { 
    console.log(`El usuario ${usuarios[i].nombreCompleto} tiene mascotas.`);
  }
  // modificamos i para que sea igual a si mismo +1
  i++; 
}

