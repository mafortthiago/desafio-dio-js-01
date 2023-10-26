let score = 6000;
let nome = "tiquinho";
let nivel;
if (score <= 1000) {
  nivel = "ferro";
} else if (score <= 2000) {
  nivel = "bronze";
} else if (score <= 5000) {
  nivel = "prata";
} else if (score <= 7000) {
  nivel = "ouro";
} else if (score <= 8000) {
  nivel = "platina";
} else if (score <= 9000) {
  nivel = "ascendente";
} else if (score <= 10000) {
  nivel = "imortal";
} else {
  nivel = "radiante";
}

console.log(`O herói de nome ${nome} está no nivel: ${nivel}`);
