
/*Este es el bucle que más uso y es porque la mayoría de las veces uso un bucle para recorrer un array de principio a fin y el for...of es ideal. */

for (const user of usuarios) {
  if (user.mascotas.length > 0) {
    console.log(`El usuario ${user.nombreCompleto} tiene mascotas.`);
  }
}

