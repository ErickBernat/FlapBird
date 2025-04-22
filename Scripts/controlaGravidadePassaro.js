const passaro = document.getElementById('passaro');
let pulo = -12;
let gravidade = 0.7;
let tempoDerrubaGravidadePassaro = 20;
let loopGravidadePassaro;
let velocidade = 0;
let posicao = 250; 

export function acionaGravidadePassaro(){
      passaro.style.top = `${posicao}px`;
      controlaGravidadePassaro();
      controlaPuloPassaro();
}

function controlaGravidadePassaro(){
  loopGravidadePassaro = setInterval(() => {
    velocidade += gravidade;
    posicao += velocidade;
    if(posicao <= 0){
        return
    }else{
        passaro.style.top = `${posicao}px`;
    }
  }, tempoDerrubaGravidadePassaro);
}


function controlaPuloPassaro(){
  document.querySelector('#containerJogo').addEventListener('click', () => {
    if(posicao < 0){
      return
    }
    else{
        velocidade = pulo;
    }
  });

  document.addEventListener('keydown', (evento)=>{
    if(evento.code == 'Space'){
      if(posicao < 0){
        return
      }
      else{
          velocidade = pulo;
      }
    }
  })
}

export function reiniciaPassaro(){
pulo = -12;
gravidade = 0.7;
tempoDerrubaGravidadePassaro = 20;
velocidade = 0;
posicao = 250; 
passaro.style.display = 'flex'
passaro.style.top = `${posicao}px`;
}

export function desativaPassaro(){
  passaro.style.display = 'none'
  clearInterval(loopGravidadePassaro);
}





