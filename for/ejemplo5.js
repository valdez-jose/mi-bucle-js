/*
  Aunque, como dijimos, nuestro for debería estar preparado para un array del cual desconocemos su longitud. Por eso la versión mejorada de esta lógica, debería chequear que efectivamente tenemos al menos 3 posiciones en el array para recorrer, y si no, recorrer todo el array.
*/
const movies = [
  { year: 2015, title: "Mad Max: Fury Road" },
  { year: 2016, title: "La La Land" },
  { year: 2017, title: "Get Out" },
  { year: 2018, title: "Black Panther" },
  { year: 2019, title: "Parasite" },
  { year: 2020, title: "Tenet" },
  { year: 2021, title: "Dune" },
  { year: 2022, title: "Everything Everywhere All at Once" },
  { year: 2023, title: "Oppenheimer" },
];
// Preguntamos si el array tiene más de 3 posiciones
// en ese caso el límite va a ser la posición nro 3
// En el caso contrario, el límite será la longitud del array
// que va a ser (0, 1, 2 o 3)

const limite = 3;
const hasta = movies.length > limite ? limite : movies.length;

for (let i = 0; hasta; i++) {
    console.log(`${movies[i].title}: ${movies[i].year}`);
}

// Si se te complica entender esta lógica, consultalo con lisa
