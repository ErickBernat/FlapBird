const botaoFechaRegras = document.getElementById('botaoFechaRegras');
const modalRegras = document.getElementById('modalRegras');
const botaoAbreRegras =  document.getElementById('botaoRegras')

fechaModalRegras()
abreModalRegras()

export function fechaModalRegras(){
    botaoFechaRegras.addEventListener('click',()=>{
        modalRegras.style.display = 'none'
    });
    modalRegras.addEventListener('click',()=>{
        modalRegras.style.display = 'none'
    })
}
export function abreModalRegras(){
    botaoAbreRegras.addEventListener('click',()=>{
        modalRegras.style.display = 'flex'
    });
}