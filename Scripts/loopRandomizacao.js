import { criaPredios } from "./modificaPosicaoPredios.js";
let tempoMudarTamanho = 5000


export function defineTamanhoPredios(){
   const loopMudaTamanhoPredio = setInterval(() => {
    criaPredios() 
    }, tempoMudarTamanho);
}

