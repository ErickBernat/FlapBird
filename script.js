import {defineTamanhoPredios} from './Scripts/loopRandomizacao.js';
import { verificaDerrota } from './Scripts/verificaDerrota.js';
import {movimentaPassaro} from './Scripts/movimentaPassaro.js';
import { reiniciaJogo } from './Scripts/reiniciaJogo.js';
import { controlaInicioJogo } from './Scripts/iniciaJogo.js';
import { criaPredios } from './Scripts/modificaPosicaoPredios.js';

controlaInicioJogo();

export function iniciaJogo(){
    verificaDerrota();
    reiniciaJogo();
    defineTamanhoPredios();
    criaPredios();
    movimentaPassaro();
}


