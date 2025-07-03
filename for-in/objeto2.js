//con reduce
const caniches = [
  {
    nombre: 'tontin',
    edad: 3,
    color: 'blanco',
    peso: 5,
    vacunas: 2
  },
  {
    nombre: 'pulguita',
    edad: 2,
    color: 'marrón',
    peso: 4,
    vacunas: 3
  },
  {
    nombre: 'negro',
    edad: 4,
    color: 'negro',
    peso: 6,
    vacunas: 1
  }
];
//reduce
const canicheConMasVacunas = caniches.reduce((acumulador, actual) =>
  actual.vacunas > acumulador.vacunas ? actual : acumulador
);

console.log(
  `El caniche con más vacunas es ${canicheConMasVacunas.nombre} con ${canicheConMasVacunas.vacunas} vacunas.`
);
