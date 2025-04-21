const passaro = document.getElementById('passaro');
let pulo = -12;
let gravidade = 0.7;
let tempoDerrubaGravidadePassaro = 20;
let loopGravidadePassaro;
let velocidade = 0;
let posicao = 250; 

export function movimentaPassaro(){
    passaro.style.top = `${posicao}px`;
    loopGravidadePassaro = setInterval(() => {
        velocidade += gravidade;
        posicao += velocidade;
        if(posicao <= 0){
            
        }else{
            passaro.style.top = `${posicao}px`;
        }
      }, tempoDerrubaGravidadePassaro);

      document.querySelector('body').addEventListener('click', () => {
        if(posicao < 0){

        }
        else{
            velocidade = pulo;
        }

      });
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





