const pratos = {
  1: { nome: "Pipoca", tempo: 10 },
  2: { nome: "Macarrão", tempo: 8 },
  3: { nome: "Carne", tempo: 15 },
  4: { nome: "Feijão", tempo: 12 },
  5: { nome: "Brigadeiro", tempo: 8 },
};

function microondas(numeroPrato, tempo) {
  const prato = pratos[numeroPrato];

  if (!prato) {
    return console.log("Prato inexistente");
  }

  let mensagem;
  const tempoPadrao = prato.tempo;

  if (tempo < tempoPadrao) {
    mensagem = "Tempo insuficiente";
  } else if (tempo > tempoPadrao * 2 && tempo < tempoPadrao * 3) {
    mensagem = "A comida queimou";
  } else if (tempo >= tempoPadrao * 3) {
    mensagem = "Kabummm";
  }

    console.log("BIP,BIP !!!");
    return console.log(mensagem);
}

microondas(1, 17);