const pontuacaoContador = document.getElementById('pontuacaoContador');
const pontuacaoRecorde =  document.getElementById('pontuacaoRecorde');
const buraco = document.getElementById('buraco');
const passaro = document.getElementById('passaro');
let pontos =0;
let loopPontos = 0;
let buracoPontuado = false;

export function adicionaPonto(){
    ativaLoopPontos()
}

function ativaLoopPontos(){
    loopPontos = setInterval(() => {
         verificaPassouBuraco();
         adicionaPlacarPonto();
         comparaRecorde();
     }, 100);
 }


 function verificaPassouBuraco(){
    const passaroRect = passaro.getBoundingClientRect();
    const buracoRect = buraco.getBoundingClientRect();

    if (passaroRect.left > buracoRect.right && !buracoPontuado) {
        pontos++;
        buracoPontuado = true;
        console.log(pontos);
    }

    if (buracoRect.right < passaroRect.left) {
        buracoPontuado = true;
    }
    if (buracoRect.right > window.innerWidth) {
        buracoPontuado = false;
    }

}

function adicionaPlacarPonto(){
    pontuacaoContador.textContent = `pontuacao: ${pontos}`
}

function comparaRecorde(){
    let recorde = localStorage.getItem('recorde');
    if(recorde <= pontos){
        localStorage.setItem('recorde', pontos);
        pontuacaoRecorde.textContent = `Recorde: ${localStorage.getItem('recorde')}`
    } 
 }

export function getPontuacao(){
    return pontos
}

export function reiniciaPontuacao(){
    pontos = 0;
}
 export function adicionaRecorde(){
    localStorage.setItem('recorde',0)
}


export function desativaLoopPontos(){
    clearInterval(loopPontos)
}

