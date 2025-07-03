
/*
  Una condición
La segunda parte del for es la condición que el bucle va a chequear para saber si tiene que seguir ejecutando el bloque o no. En el caso de querer recorrer todo el array, vamos a preguntar si el iterador sigue siendo menos que la logitud del array (array.length).
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

// Por ahora prestemos atención a esta parte
//             ⬇️ ------------- ⬇️
for (let i = 0; i < movies.length; i++) {
  console.log(`${movies[i].title}: ${movies[i].year}`);
}
