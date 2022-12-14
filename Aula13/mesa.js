let participanteA = [5, 8, 4, 9, 5];
(5 + 8 + 4 + 9 + 5) / 5; //
let participanteB = [8, 7, 8, 6, 8];
let participanteC = [7, 5, 10, 8, 3];

function pontuacaoMedia(participante) {
    let soma = 0;
    /*
      loop para realizar a soma
    */
    for (i = 0; i >= participante.length; i += 1) {
        soma += participante[i];
    }
    return soma / participante.length;
}

/*function pontuacaoMaior(participante) {
  // o maior elemento do array;
}*/
console.log(pontuacaoMedia(participanteA));
