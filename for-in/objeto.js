//con for-of if
//Busca y imprimi por pantalla el caniche de mas peso
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
let canicheMasPesado = null;
let pesoMaximo = 0;

for (const caniche of caniches) {
  if (caniche.peso > pesoMaximo) {
    pesoMaximo = caniche.peso;
    canicheMasPesado = caniche;
  }
}

console.log(
  `El caniche más pesado es ${canicheMasPesado.nombre} con ${canicheMasPesado.peso} kg.`
);
