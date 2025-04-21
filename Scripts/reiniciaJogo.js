import { desativaModalDerrota } from "./modalDerrota.js";
import { iniciaJogo } from "./iniciaJogo.js";
import { reiniciaPassaro } from "./movimentaPassaro.js";


const tempoReinicioJogo = 3000;
const botaoReinicia = document.getElementById('botaoReinicia');



export function reiniciaJogo(){
    botaoReinicia.addEventListener('click',()=>{
        desativaModalDerrota();
        reiniciaPassaro();
        iniciaJogo()
    })
}