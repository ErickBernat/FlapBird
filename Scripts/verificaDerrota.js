import {acionaModalDerrota} from './acionaModalDerrota.js'
const predioTeto = document.getElementById('predioTeto');
const predioChao = document.getElementById('predioChao');
const passaro = document.getElementById('passaro');
const prediosObstaculos = document.getElementById('prediosObstaculos')
let gameOver = false;
let tempoVerificaDerrota = 100;

export function verificaDerrota(){
    const loopVerificaçao = setInterval(() => {
        verificaColisao(passaro.getBoundingClientRect(), predioChao.getBoundingClientRect());
        verificaColisao(passaro.getBoundingClientRect(),predioTeto.getBoundingClientRect());
        if (gameOver == true) {
            acionaModalDerrota();
            prediosObstaculos.style.animation =  '';
            clearInterval(loopVerificaçao);
            return
        }
    }, tempoVerificaDerrota);

}

function verificaColisao(passaro,predio){
    if(!(passaro.right < predio.left ||
        passaro.left > predio.right ||
        passaro.bottom < predio.top ||
        passaro.top >  predio.bottom)
    ){
        gameOver = true
    }
    if(passaro.top > window.outerHeight){
            gameOver = true
    }
}



