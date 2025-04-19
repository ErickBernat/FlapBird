import { desativaModalDerrota } from "./acionaModalDerrota.js";
import { criaPredios } from "./modificaPosicaoPredios.js";
import { movimentaPassaro } from "./movimentaPassaro.js";
const botaoReinicia = document.getElementById('botaoReinicia');



export function reiniciaJogo(){
    botaoReinicia.addEventListener('click',()=>{
        desativaModalDerrota()
        criaPredios()
        movimentaPassaro()
    })
}