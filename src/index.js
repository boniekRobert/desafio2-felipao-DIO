function saldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas
}

let saldo = saldoVitorias(10, 5);

let nivel;

if (saldo < 10) {
    nivel = "Ferro";    
} else if (saldo <= 20) {
    nivel = "Bronze";
} else if (saldo <= 50) {
    nivel = "Prata";
} else if (saldo <= 80) {
    nivel = "Ouro";
} else if (saldo <= 90) {
    nivel = "Diamante";
} else if (saldo <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

console.log(`O Herói tem de saldo de vitórias ${saldo} está no nível de ${nivel}`);
