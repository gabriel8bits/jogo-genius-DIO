let ordem = [] ;
let ordemClick = [];
let score = 0 ;

// 0 - Amarelo
// 1 - Azul
// 2 - Verde
// 3 - Vermelho

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

// cria uma Ordem sorteada 
let ordemSorteada = () => {
    let ordemCores = Math.floor(Math.random() * 4);
    ordem[ordem.length] = ordemCores;
    ordemClick = [];

    for (let i in ordem) {
        let elementoCores = elementoCriador(ordem[i]);
        corSelecionada(elementoCores, Number(i) + 1);
    }
}
// mostra cor selecinada com um tom mais claro
let corSelecionada = (element, number) => {
    time = time * 500;
    setTimeout(() => {
        element.classList.add('selecionada');
    }, number - 250);
    setTimeout(() => {
        element.classList.add('selecionada');
    });
}

// confere se ordem é igual a ordem gerada aleatoria
let checarOrdem = () => {
    for (let i in ordemClick) {
        if(ordemClick[i] !== ordem[i]){
            lose();
            break;
        }
    }
    if(ordemClick.length == ordem.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando Próximo nivel!`);
        proximoNivel();

    }
}

// função de click
let click = (color) => {
    ordemClick[ordemClick.length] = coclor;
    elementeCriador(color),classList.add('selecionada');

    setTimeout(() => {
        elementeCriador(color).classList.remove('selecionada');
        checarOrdem();
    })
}

// fução de retorno da cor
let elementeCriador = (color) => {
    if(color == 0){
        return yellow;
    } else if(color == 1) {
        return blue; 
    } else if(color == 2) {
        return green;
    } else if(color = 3) {
        return red
    }
}

// função que aumenta o nivel
let proximoNivel = () => {
    score++;
    ordemSorteada();
}

//função de game over
let lose = () => {
    alert(`Pontuação: ${score}!\nGame Over!\n Clique em OK para reiniciar o jogo`);
    order = [];
    ordemClick = [];

    playGame();
}

// função de inicio do jogo
let playGame = () => {
    score = 0;
    alert('Bem vindo ao Genius!')

    proximoNivel();
}

blue.addEventListener('click', click(1));
yellow.addEventListener('click', click(0));
red.addEventListener('click', click(3));
green.addEventListener('click', click(2));