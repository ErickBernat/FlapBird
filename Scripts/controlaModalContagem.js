import { loopContagem } from "./controlaContador.js";

const modalContagem = document.getElementById('modalContagem');

export function ativaModalContagem(){
modalContagem.style.display ='flex';
loopContagem();
}

export function desativaModalContagem(){
modalContagem.style.display ='none'
}