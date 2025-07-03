
/*
  En este ejemplo inicializamos el iterador en 8, que es la última posición del array. Con el resto de las partes del for hacemos que vaya hacia atrás. Ya vamos a ver como funcionan las otras dos partes del for.

Otro uso podría ser recorrer solo una sección del array. En el siguiente caso, vamos a recorrer las últimas 3 posiciones del array de películas que están ordenadas por fecha para obtener las últimas.
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

// restamos 3 a la logitud para obtener
// el número de posición que buscamos
const antePenUltimaPosicion = movies.length - 3;

// Por ahora prestemos atención a esta par
for (let i = antePenUltimaPosicion; i < movies.length; i++) {
  console.log(`${movies[i].title}: ${movies[i].year}`);
}
