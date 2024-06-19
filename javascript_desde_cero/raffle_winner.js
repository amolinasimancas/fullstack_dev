const winnerNumber = 15;
const raffleList = [
  { nombre: "Juan", numero: 34 },
  { nombre: "Pedro", numero: 67 },
  { nombre: "Maria", numero: 15 },
];
const winner = raffleList.find((raffle) => raffle.numero === winnerNumber);
if (winner === undefined) {
  console.log("No hay ganador");
} else {
  console.log("El ganador es: " + winner.nombre);
}