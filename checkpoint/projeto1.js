let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;

switch(opcao) {
  case '1':
    console.log("Escolheu pipoca");
    break;// Encerrar/Terminar a execução do switch
  case '2':
    console.log("Esolheu macarrao");
    break;
  case '3':
    console.log("Escolheu carne");
    break;
  case '4':
    console.log("Escolheu feijao");
    break;
  case '5':
    console.log('Escolheu brigadeiro');
    break;
  default:
    console.log("Opção inválida");
}


function microondas(opcao, tempo) {
    if (tempo > 2 * opcao) {
        console.log('comida queimou');
    } else if (tempo < opcao) {
        console.log('tempo insuficiente');
    } else if (tempo >= 3 * opcao) {
        console.log ('kabummm!!!')
    }else if 
    console.log("BIP BIP")
}

microondas (1,10)