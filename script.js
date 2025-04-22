import { reiniciaJogo } from './Scripts/controlaReinicioJogo.js';
import { desativaTelaInicial} from './Scripts/controlaTelaInicial.js';
import { fechaModalRegras } from './Scripts/controlaModalRegras.js';
import { abreModalRegras } from './Scripts/controlaModalRegras.js';
import { ativaBotaoMenu } from './Scripts/controlaBotaoMenu.js';
import { adicionaRecorde } from './Scripts/controlaPontos.js';



document.addEventListener('DOMContentLoaded',()=>{
    desativaTelaInicial();
    adicionaRecorde()
    fechaModalRegras();
    abreModalRegras();
    reiniciaJogo();
    ativaBotaoMenu();
})



