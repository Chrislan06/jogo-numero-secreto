function verificaValorValido(chute) {
    const numero = +chute;

    if (chuteInvalido(numero)) {
        if(chute.toUpperCase() === 'GAME OVER'){
            exibeGameOver();
        } else{
            elementoChute.innerHTML += '<div>Valor inválido</div>';
        }
        return;
    }

    if (numeroInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido:<br>fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>0 número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
        <div>0 número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `;
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroInvalido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});

function exibeGameOver() {
    document.body.classList.toggle("game-over");
    document.body.innerHTML = `
    <h1>Game Over</h1>
    <h3>Que pena ¯\_(ツ)_/¯.<br> O número secreto era ${numeroSecreto}<br> caso queira jogar novamente clique No botão abaixo <i class="fa-solid fa-arrow-down-long"></i></div></h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    `
}