function Sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let até = parseInt(document.getElementById('ate').value);

    

    let sorteados = [];
    let número;

    if (quantidade > de + até + 1) {
        alert('A quantidade de números deve ser menor que o intervalo escolhido');
        reiniciar();
    } else if (de >= até) {
        alert('Adicione um valor inicial menor do que o valor limite colocado.');
        reiniciar();
    } else {
        for (let i = 0; i < quantidade; i++) {
            número = obterNumeroAleatorio(de, até);
            while (sorteados.includes(número)) {
                número = obterNumeroAleatorio(de, até);
            }
            sorteados.push(número);
        }
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}.</label>`;
        alterarStatusBotão();
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotão() {
    let botão = document.getElementById('btn-reiniciar');
    if (botão.classList.contains('container__botao-desabilitado')) {
        botão.classList.remove('container__botao-desabilitado');
        botão.classList.add('container__botao');
    } else {
        botão.classList.remove('container__botao');
        botão.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora.</label>';
    alterarStatusBotão()
}

