
/*
 Como sabemos, existen otros bucles más sencillos para hacer el recorrido de principio a fin. Por eso, un buen caso de uso para el for (clásico) va a ser cuando tengamos que recorrer el array en otro orden, por ejemplo, desde el final hacia el comienzo.
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

// necesitamos saber cual es el número
// de la última posición del array
const ultimaPosicionDelArray =  movies.length - 1;
// si no entendés lo del -1, preguntale a Lisa

// Por ahora prestemos atención a esta parte

for (let i = ultimaPosicionDelArray; i >= 0; i--) {
  console.log(`${movies[i].title}: ${movies[i].year}`);
}

