import {defineTamanhoPredios} from './Scripts/loopRandomizacao.js';
import { verificaDerrota } from './Scripts/verificaDerrota.js';
import {movimentaPassaro} from './Scripts/movimentaPassaro.js';
import { reiniciaJogo } from './Scripts/reiniciaJogo.js';

iniciaJogo()

function iniciaJogo(){
    verificaDerrota();
    reiniciaJogo();
    defineTamanhoPredios();
    movimentaPassaro();
}

