const passaro = document.getElementById('passaro');

let tempoDerrubaGravidadePassaro = 100;
let incrementaGravidadePassaroChao = 2;
let inicioAlturaPassaro = 50;

let loopGravidadePassaro;

let velocidade = 0;
let gravidade = 0.7;
let pulo = -12;
let posicao = 250; 

export function movimentaPassaro(){

    passaro.style.top = `${posicao}px`;


    loopGravidadePassaro = setInterval(() => {
        velocidade += gravidade;
        posicao += velocidade;
    
        passaro.style.top = `${posicao}px`;
      }, 20);

      document.querySelector('body').addEventListener('click', () => {
        velocidade = pulo;
      });

}





