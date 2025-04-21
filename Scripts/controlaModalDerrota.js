import { getPontuacao } from "./controlaPontos.js";


const modalDerrota = document.getElementById('modalDerrota');
const pontuacaoDerrota = document.getElementById('pontuacaoDerrota');

export function acionaModalDerrota(){
    modalDerrota.style.display = 'flex'
    pontuacaoDerrota.textContent = `pontuacao: ${getPontuacao()}`
}
export function desativaModalDerrota(){
    modalDerrota.style.display = 'none'
}