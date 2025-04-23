import {acionaGravidadePassaro} from './controlaGravidadePassaro.js';
import {criaPredios} from './controlaCriacaoPredios.js';
import { verificaDerrota } from './controlaDerrota.js';
import { ativaModalContagem } from './controlaModalContagem.js';
import { adicionaPonto, reiniciaPontuacao } from './controlaPontos.js';

let tempoIniciaJogo = 3000;

export function iniciaJogo(){
       reiniciaPontuacao();
       ativaModalContagem();

       setTimeout(() => {
            adicionaPonto();
            criaPredios();
            acionaGravidadePassaro();
            verificaDerrota();
        }, tempoIniciaJogo);
}





