//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escola um número entre 1 e 10';

let numeroSorteados = [];
let numMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rete:4.2});
}

function exibirMensagemInicial() {

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escola um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;
  //  console.log(chute == numeroSecreto);
 if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
   // let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    let mensagemTentativas = `Voce descobriu ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
 } else {
    if (chute>numeroSecreto){
      exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas ++;
    limparCampo();
 }
}

function gerarNumeroAleatorio() {
  let numeroEsolhido = parseInt(Math.random() * numMaximo + 1);
  let elementosLista = numeroSorteados.length;
  if(elementosLista == numMaximo) {
    numeroSorteados = [];
  }
  if (numeroSorteados.includes(numeroEsolhido)){
     return gerarNumeroAleatorio();
     } else {
      numeroSorteados.push(numeroEsolhido);
      console.log(numeroSorteados);
      return numeroSorteados;
     }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
numeroSecreto = gerarNumeroAleatorio();
limparCampo();
tentativas = 1;
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled', true);


}