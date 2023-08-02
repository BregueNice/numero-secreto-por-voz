const menorValor = 10;
const maiorValor = 1000;
const numeroSecreto = gerarNumero();

function gerarNumero(){
    return Math.round(Math.random() * maiorValor);
}

if(numeroSecreto < 10){
    gerarNumero()
}

const elementoMenorValor = document.getElementById('menor-valor');

elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;