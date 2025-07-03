
//Datos base (caniches)
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

//Filtrar todos los caniches de color negro
const canichesNegros = caniches.filter(caniche => caniche.color === 'negro');

console.log('Caniches de color negro:');
canichesNegros.forEach(c => console.log(c.nombre));

// Mostrar caniches con menos de 3 vacunas
const canichesPocasVacunas = caniches.filter(caniche => caniche.vacunas < 3);

console.log('Caniches con menos de 3 vacunas:');
canichesPocasVacunas.forEach(c => {
  console.log(`${c.nombre} tiene ${c.vacunas} vacunas`);
});

//Calcular el promedio de peso
const totalPeso = caniches.reduce((suma, caniche) => suma + caniche.peso, 0);
const promedioPeso = totalPeso / caniches.length;

console.log(`El peso promedio de los caniches es ${promedioPeso.toFixed(2)} kg.`);

