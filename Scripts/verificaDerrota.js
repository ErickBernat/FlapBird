import {acionaModalDerrota} from './modalDerrota.js'
import {desativaCriaçaoPredios} from './criaPredios.js'
import { desativaPassaro } from './movimentaPassaro.js';

const predioTeto = document.getElementById('predioTeto');
const predioChao = document.getElementById('predioChao');
const passaro = document.getElementById('passaro');
const prediosObstaculos = document.getElementById('prediosObstaculos')
let gameOver = false;
let tempoVerificaDerrota = 100;

export function verificaDerrota(){
    gameOver = false
    const loopVerificaçaoDerrota = setInterval(() => {
        verificaColisao(passaro.getBoundingClientRect(), predioChao.getBoundingClientRect());
        verificaColisao(passaro.getBoundingClientRect(),predioTeto.getBoundingClientRect());
        
        if (gameOver == true) {
            prediosObstaculos.style.display =  'none';
            prediosObstaculos.style.animation =  '';
            desativaCriaçaoPredios();
            desativaPassaro()
            acionaModalDerrota();
            clearInterval(loopVerificaçaoDerrota);
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



