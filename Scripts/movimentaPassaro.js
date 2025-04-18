const passaro = document.getElementById('passaro');
const pulo = -12;
const gravidade = 0.7;
const tempoDerrubaGravidadePassaro = 20;
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





