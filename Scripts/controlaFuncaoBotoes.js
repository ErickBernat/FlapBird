import { reiniciaJogo } from './controlaReinicioJogo.js';
import { desativaTelaInicial} from './controlaTelaInicial.js';
import { fechaModalRegras } from './controlaModalRegras.js';
import { abreModalRegras } from './controlaModalRegras.js';
import { ativaBotaoMenu } from './controlaBotaoMenu.js';
import { adicionaRecorde } from './controlaPontos.js';

export function ativaFuncoesBotoes(){
    adicionaRecorde();
    desativaTelaInicial();
    fechaModalRegras();
    abreModalRegras();
    reiniciaJogo();
    ativaBotaoMenu();
}