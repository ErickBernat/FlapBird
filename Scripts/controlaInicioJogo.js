import {acionaGravidadePassaro} from './controlaGravidadePassaro.js';
import {criaPredios} from './controlaCriacaoPredios.js';
import { verificaDerrota } from './controlaDerrota.js';
let tempoIniciaJogo = 3000;

export function iniciaJogo(){
     setTimeout(() => {
            criaPredios();
            acionaGravidadePassaro();
            verificaDerrota();
        }, tempoIniciaJogo);
}





