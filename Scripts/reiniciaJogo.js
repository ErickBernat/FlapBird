const botaoReinicia = document.getElementById('botaoReinicia')


export function reiniciaJogo(){
    botaoReinicia.addEventListener('click',()=>{
        location.reload()
    })
}