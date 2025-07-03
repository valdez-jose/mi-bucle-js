
const caniches = [
  { nombre: 'tontin', edad: 3 },
  { nombre: 'pulguita', edad: 2 },
  { nombre: 'negro', edad: 4 },
];
//version for-of
let nombreCanicheMayor = null;
let edadMaxima = 0;

for (const caniche of caniches) {
  if (caniche.edad > edadMaxima) {
    edadMaxima = caniche.edad;
    nombreCanicheMayor = caniche.nombre;
  }
}

console.log(
  `El caniche más viejo es ${nombreCanicheMayor}, con ${edadMaxima} años.`
);

