
/*
En este ejercicio vamos a validar un objeto que representa los datos cargados por un usuario en un formulario de envíos. Por cada campo que esté vacío (falsy) tenés que guardar el nombre del dato y mostrar que datos están faltando al final.
Copiá el código base y charlá con Lisa para comprender la consigna y proponer posibles soluciones.

*/

const formularioDeEnvio = {
  direccion: "Av. Siempreviva 742",
  nombre: "Juan Pérez",
  ciudad: "",
  codigoPostal: null,
  telefono: "123-456-789",
};

const camposVacios = [];
let indiceCamposVacios = 0;


for (let key in formularioDeEnvio) {
  // recoré todas las propiedades  
  // del form de envio y guarda los nombres de las propiedades faltantes
  // [tu lógica acá]
  const valor = formularioDeEnvio[key];
  
  if (valor === "" || valor === null || valor === undefined) {
    camposVacios[indiceCamposVacios] = key;
    indiceCamposVacios++;
  }
}

// Mostrar el resultado
if (camposVacios.length > 0) {
  console.log(
    "Los siguientes campos están vacíos o son inválidos:",
    camposVacios
  );
} else {
  console.log("Todos los campos están completos.");
}
