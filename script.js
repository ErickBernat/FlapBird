import { reiniciaJogo } from './Scripts/reiniciaJogo.js';
import { iniciaJogo } from './Scripts/iniciaJogo.js';
import { fechaModalRegras } from './Scripts/modalRegras.js';



document.addEventListener('DOMContentLoaded',()=>{
    iniciaJogo();
    reiniciaJogo();
    fechaModalRegras();
})



