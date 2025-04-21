import { desativaModalDerrota } from "./controlaModalDerrota.js";
import { iniciaJogo } from "./controlaInicioJogo.js";
import { reiniciaPassaro } from "./controlaGravidadePassaro.js";

const botaoReinicia = document.getElementById('botaoReinicia');

export function reiniciaJogo(){
    botaoReinicia.addEventListener('click',()=>{
        desativaModalDerrota();
        reiniciaPassaro();
        iniciaJogo()
    })
}