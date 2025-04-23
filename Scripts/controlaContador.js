import { desativaModalContagem } from "./controlaModalContagem.js";

const displayContagem = document.getElementById('contagem');
let loopContagems = 0;
let tempoLoopContagem = 600;

export function loopContagem(){
    let numeroContagem = 3;
    
    loopContagems = setInterval(() => {
        displayContagem.textContent = `${numeroContagem}`

        if(numeroContagem < 0){
            desativaModalContagem()   
            displayContagem.textContent = ``;
            clearInterval(loopContagems)
            return
        }else{
            numeroContagem--
        }
    }, tempoLoopContagem);

}