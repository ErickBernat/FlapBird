import { reiniciaJogo } from './Scripts/reiniciaJogo.js';
import { desativaTelaInicial} from './Scripts/desativaTelaInicial.js';
import { fechaModalRegras } from './Scripts/modalRegras.js';
import { abreModalRegras } from './Scripts/modalRegras.js';



document.addEventListener('DOMContentLoaded',()=>{
    reiniciaJogo();
    fechaModalRegras();
    abreModalRegras();
    desativaTelaInicial();
})



