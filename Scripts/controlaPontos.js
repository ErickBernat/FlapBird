const pontuacaoContador = document.getElementById('pontuacaoContador')
const buraco = document.getElementById('buraco');
const passaro = document.getElementById('passaro');
let pontos =0;
let loopPontos = 0;
let buracoPontuado = false;

export function adicionaPonto(){
    ativaLoopPontos()
}

export function reiniciaPontuacao(){
    pontos = 0;
}

function ativaLoopPontos(){
   loopPontos = setInterval(() => {
        verificaPassouBuraco();
        adicionaPlacarPonto();
    }, 100);
}

function adicionaPlacarPonto(){
    pontuacaoContador.textContent = `pontuacao: ${pontos}`
}
export function desativaLoopPontos(){
    clearInterval(loopPontos)
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