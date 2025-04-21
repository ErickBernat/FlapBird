 import { desativaCriaçaoPredios } from "./controlaCriacaoPredios.js";
import { reiniciaPassaro } from "./controlaGravidadePassaro.js";
import { desativaModalDerrota } from "./controlaModalDerrota.js";
import { ativaTelaInicial } from "./controlaTelaInicial.js";

const botaoMenu = document.getElementById('botaoMenu');


export function ativaBotaoMenu(){
    botaoMenu.addEventListener('click',()=>{
        ativaTelaInicial();
        desativaModalDerrota();
        desativaCriaçaoPredios();
        reiniciaPassaro();
    })
}
