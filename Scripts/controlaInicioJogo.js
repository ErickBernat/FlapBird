import {acionaGravidadePassaro} from './controlaGravidadePassaro.js';
import {criaPredios} from './controlaCriacaoPredios.js';
import { verificaDerrota } from './controlaDerrota.js';
import { ativaModalContagem } from './controlaModalContagem.js';
let tempoIniciaJogo = 3000;

export function iniciaJogo(){
            ativaModalContagem();
     setTimeout(() => {
            criaPredios();
            acionaGravidadePassaro();
            verificaDerrota();
        }, tempoIniciaJogo);
}





