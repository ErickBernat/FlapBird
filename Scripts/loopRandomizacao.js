import { criaPredios } from "./modificaPosicaoPredios.js";

export function defineTamanhoPredios(){
   const loop = setInterval(() => {
    criaPredios() 
    }, 5000);
}

