listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1
function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

exibirMensagemInicial()

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!');
        let palavratentativa = tentativa > 1? 'tentativas' : 'tentativa';
        //operador ternário
        let mensagemtentativas = `Você descobriu o número secreto com ${tentativa} ${palavratentativa}!`;
        exibirTextoNaTela('p',mensagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {

        if (chute > numeroSecreto){
        exibirTextoNaTela('p',`O número secreto é menor.
             Número de tentativas:${tentativa}`);
        }
        else {
        exibirTextoNaTela('p',`O número secreto é maior.
            Número de tentativas:${tentativa}`);
        }
        tentativa = tentativa + 1;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = []
    }
    
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

