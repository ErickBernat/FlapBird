const botaoFechaRegras = document.getElementById('botaoFechaRegras');
const modalRegras = document.getElementById('modalRegras');
const botaoAbreRegras =  document.getElementById('botaoRegras')

export function fechaModalRegras(){

    modalRegras.addEventListener('click',()=>{
        modalRegras.style.display = 'none'
    })
}
export function abreModalRegras(){
    botaoAbreRegras.addEventListener('click',()=>{
        modalRegras.style.display = 'flex'
    });
}

function eventoModalRegras(){

}