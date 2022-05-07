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

let ordemSorteada = () => {
    let ordemCores = Math.floor(Math.random() * 4);
    ordem[ordem.length] = ordemCores;
    ordemClick = [];

    for (let i in ordem) {
        let elementoCores
    }
}