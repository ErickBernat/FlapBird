const pontuacaoContador = document.getElementById('pontuacaoContador');
const pontuacaoRecorde =  document.getElementById('pontuacaoRecorde');
const buraco = document.getElementById('buraco');
const passaro = document.getElementById('passaro');
let pontos =0;
let loopPontos = 0;
let tempoLoopPontos = 100
let buracoPontuado = false;

export function adicionaPonto(){
    ativaLoopPontos()
}

function ativaLoopPontos(){
    adicionaRecorde()
    loopPontos = setInterval(() => {
         verificaPassouBuraco();
         adicionaPlacarPonto();
         comparaRecorde();
     }, tempoLoopPontos);
 }

 function verificaPassouBuraco(){
    const passaroPosicao = passaro.getBoundingClientRect();
    const buracoPosicao = buraco.getBoundingClientRect();

    if (passaroPosicao.left > buracoPosicao.right && !buracoPontuado) {
        pontos++;
        buracoPontuado = true;
    }
    if (buracoPosicao.right < passaroPosicao.left) {
        buracoPontuado = true;
    }
    if (buracoPosicao.right > window.innerWidth) {
        buracoPontuado = false;
    }
}

function adicionaPlacarPonto(){
    pontuacaoContador.textContent = `pontuacao: ${pontos}`
}

function comparaRecorde(){
    let recorde = localStorage.getItem('recorde');
    pontuacaoRecorde.textContent = `Recorde: ${recorde}`
    if(recorde <= pontos){
        localStorage.setItem('recorde', pontos);
        pontuacaoRecorde.textContent = `Recorde: ${recorde}`
    } 
 }

export function getPontuacao(){
    return pontos
}

export function reiniciaPontuacao(){
    pontos = 0;
}

export function adicionaRecorde(){
    let recorde = localStorage.getItem('recorde')
    if(recorde == 0 || recorde == 'null'){
        localStorage.setItem('recorde',pontos);
    }else{
        localStorage.setItem("recorde",recorde)
    }
    
}

export function desativaLoopPontos(){
    clearInterval(loopPontos)
}

