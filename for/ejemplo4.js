
/*
  Un caso donde nos viene mejor usar for es cuando, justamente, no queremos recorrer toda la lista, sino una parte. Entonces si quisiéramos recorrer las primeras 3 posiciones del array, podríamos indicarle que frene en esa posición.
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

// Ahora prestemos atención a esta parte
//             ⬇️ - ⬇️
for (let i = 0; i < 3; i++) {
  console.log(`${movies[i].title}: ${movies[i].year}`);
}
