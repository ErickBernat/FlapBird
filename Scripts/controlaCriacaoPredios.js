import { modificaPosicaoPredios } from "./controlaPosicaoPredios.js";
const prediosObstaculos = document.getElementById('prediosObstaculos');
let tempoMudaTamanhoPredios = 5000;
let loopMudaTamanhoPredio = 0;


export function criaPredios(){
    modificaPosicaoPredios()

   loopMudaTamanhoPredio = setInterval(() => {
    modificaPosicaoPredios() 
    }, tempoMudaTamanhoPredios);
}

export function desativaCriaçaoPredios(){
    prediosObstaculos.style.display =  'none';
    prediosObstaculos.style.animation =  '';
    clearInterval(loopMudaTamanhoPredio)
}


