
const mascotasPorUsuario = {
  hj12ds92j: 2,
  kd49fs27a: 1,
  lk34mc92z: 3,
  mn73gb45d: 0,
  qw84kp12x: 4,
  pr12mc97v: 1,
  xb49wd28y: 2,
  pd20zy98r: 0,
  cn59hd21s: 5,
  vd28ka34o: 3,
};


const ids = Object.keys(mascotasPorUsuario);
for (let i = 0; i < ids.length; i++) {
  const id = ids[i];
  const cantidad = mascotasPorUsuario[id];
  if (cantidad > 0) {
    console.log(`El usuario con ID ${id} tiene ${cantidad} mascotas.`);
  }
}
