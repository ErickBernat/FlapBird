import { modificaPosicaoPredios } from "./modificaPosicaoPredios.js";
let tempoMudarTamanho = 5000;
let loopMudaTamanhoPredio = 0;


export function criaPredios(){
    modificaPosicaoPredios()

   loopMudaTamanhoPredio = setInterval(() => {
    modificaPosicaoPredios() 
    }, tempoMudarTamanho);
}

export function desativaCriaçaoPredios(){
    clearInterval(loopMudaTamanhoPredio)
}


