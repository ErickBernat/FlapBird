const predioTeto = document.getElementById('predioTeto');
const predioChao = document.getElementById('predioChao');
const buraco = document.getElementById('buraco');
let AlturaPredioTeto = 50;
let AlturaPredioChao = 30;
let AlturaBuraco = 30


export function defineTamanhoPredios(){
    randomizaAlturaPredios()

    predioChao.style.height = `${AlturaPredioChao}%`
    predioTeto.style.height = `${AlturaPredioTeto}%`
    buraco.style.height = `${AlturaBuraco}%`
}

function randomizaAlturaPredios(){
   AlturaPredioTeto = Math.floor( Math.random(100)*100);
   AlturaPredioChao = Math.floor( Math.random(100)*100);

   if( AlturaPredioChao > 10 && AlturaPredioTeto> 10 && AlturaPredioTeto+AlturaBuraco+AlturaPredioChao == 100){
    console.log('altura Teto = '+AlturaPredioTeto);
    console.log('altura Chao = '+AlturaPredioChao);
    console.log('Tamanho buraco = '+buraco.style.height)
   }else{
    randomizaAlturaPredios()
   }
}