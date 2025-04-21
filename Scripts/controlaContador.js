import { desativaModalContagem } from "./controlaModalContagem.js";

const contagem = document.getElementById('contagem');
let loopContagems = 0;

export function loopContagem(){
    let numeroContagem = 3
   loopContagems = setInterval(() => {
        contagem.textContent = `${numeroContagem}`
        if(numeroContagem < 0){
            desativaModalContagem()   
            contagem.textContent = ``;
            clearInterval( loopContagems)
            return
        }else{
            numeroContagem--
        }
         
        console.log(numeroContagem)

    }, 600);

}