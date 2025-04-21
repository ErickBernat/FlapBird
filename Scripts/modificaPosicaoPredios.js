const prediosObstaculos = document.getElementById('prediosObstaculos')
const predioTeto = document.getElementById('predioTeto');
const predioChao = document.getElementById('predioChao');
const buraco = document.getElementById('buraco');
let AlturaPredioTeto = 40;
let AlturaPredioChao = 40;
let AlturaBuraco = 20;


export function modificaPosicaoPredios(){
    randomizaAlturaPredios();
    prediosObstaculos.style.display =  'flex';
    console.log('ativouPredios')
    prediosObstaculos.style.animation =  'animacaoPredios 5s linear infinite';
    predioChao.style.height = `${AlturaPredioChao}%`;
    predioTeto.style.height = `${AlturaPredioTeto}%`;
    buraco.style.height = `${AlturaBuraco}%`;
}

function randomizaAlturaPredios(){
   AlturaPredioTeto = Math.floor( Math.random(100)*100);
   AlturaPredioChao = Math.floor( Math.random(100)*100);

   if( AlturaPredioChao > 20 && AlturaPredioTeto> 20 && AlturaPredioTeto+AlturaBuraco+AlturaPredioChao == 100){
    return;
   }else{
    randomizaAlturaPredios();
   }
}