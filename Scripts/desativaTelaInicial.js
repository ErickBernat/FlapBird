import { iniciaJogo } from "./iniciaJogo.js";
const botaoJogar = document.getElementById('botaoJogar');
const telaInicial = document.getElementById('telaInicial');


export function desativaTelaInicial(){
    botaoJogar.addEventListener('click',()=>{
        telaInicial.style.display = 'none';
        iniciaJogo()
    })

}