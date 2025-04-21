import {movimentaPassaro} from './movimentaPassaro.js';
import {criaPredios} from './criaPredios.js';
import { verificaDerrota } from './verificaDerrota.js';
let tempoIniciaJogo = 3000;

export function iniciaJogo(){
        setTimeout(() => {
            criaPredios();
            movimentaPassaro();
            verificaDerrota();
        }, tempoIniciaJogo);
}





