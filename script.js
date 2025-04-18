import {defineTamanhoPredios} from './Scripts/loopRandomizacao.js'
import { verificaDerrota } from './Scripts/verificaDerrota.js';
import {movimentaPassaro} from './Scripts/movimentaPassaro.js'

iniciaJogo()

function iniciaJogo(){
    verificaDerrota()
    defineTamanhoPredios();
    movimentaPassaro();
}

