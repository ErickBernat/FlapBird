import {movimentaPassaro} from './movimentaPassaro.js';
import { criaPredios } from './modificaPosicaoPredios.js';
import {defineTamanhoPredios} from './loopRandomizacao.js';
import { verificaDerrota } from './verificaDerrota.js';

const botaoJogar = document.getElementById('botaoJogar');
const telaInicial = document.getElementById('telaInicial');

let tempoIniciaJogo = 3000;

export function iniciaJogo(){
    botaoJogar.addEventListener('click',()=>{
        telaInicial.style.display = 'none';

        setInterval(() => {
            defineTamanhoPredios();
            criaPredios();
            movimentaPassaro();
            verificaDerrota();
        }, tempoIniciaJogo);

    })
}



