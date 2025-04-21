import { desativaModalDerrota } from "./controlaModalDerrota.js";
import { iniciaJogo } from "./controlaInicioJogo.js";
import { reiniciaPassaro } from "./controlaGravidadePassaro.js";
import { reiniciaPontuacao } from "./controlaPontos.js";

const botaoReinicia = document.getElementById('botaoReinicia');

export function reiniciaJogo(){
    botaoReinicia.addEventListener('click',()=>{
        desativaModalDerrota();
        reiniciaPassaro();
        iniciaJogo()
    })
}