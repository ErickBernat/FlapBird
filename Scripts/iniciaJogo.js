import { iniciaJogo } from "../script.js";
const botaoJogar = document.getElementById('botaoJogar');
const telaInicial = document.getElementById('telaInicial');




export function controlaInicioJogo(){
    botaoJogar.addEventListener('click',()=>{
        console.log('apertou')
        iniciaJogo()
        telaInicial.style.display = 'none'
    })

}



