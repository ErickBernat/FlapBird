import {defineTamanhoPredios} from './Scripts/loopRandomizacao.js'
import { verificaDerrota } from './Scripts/verificaDerrota.js';

iniciaJogo()

function iniciaJogo(){
    verificaDerrota()
    defineTamanhoPredios();
}

