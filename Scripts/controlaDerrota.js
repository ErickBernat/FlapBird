import {acionaModalDerrota} from './controlaModalDerrota.js'
import {desativaCriaçaoPredios} from './controlaCriacaoPredios.js'
import { desativaPassaro } from './controlaGravidadePassaro.js';

const predioTeto = document.getElementById('predioTeto');
const predioChao = document.getElementById('predioChao');
const passaro = document.getElementById('passaro');

let loopVerificaçaoDerrota =0
let gameOver = false;
let tempoVerificaDerrota = 100;

export function verificaDerrota(){
    gameOver = false
    loopVerificaçaoDerrota = setInterval(() => {
        verificaColisao(passaro.getBoundingClientRect(), predioChao.getBoundingClientRect());
        verificaColisao(passaro.getBoundingClientRect(),predioTeto.getBoundingClientRect());
        verificaGameOver();
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

function verificaGameOver(){
    if (gameOver == true) {

        desativaCriaçaoPredios();
        desativaPassaro()
        acionaModalDerrota();
        clearInterval(loopVerificaçaoDerrota);
        return
    }
}



