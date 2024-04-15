// Créditos do código original
// https://github.com/Viniddev/Botao-Que-Foge-Do-Cursor 

const sim = window.document.getElementById("opcyes")
const nao = window.document.getElementById("opcNo")
const resp = window.document.getElementById("textinho")

nao.addEventListener("mouseenter", entrar)
let estado = 0

function entrar(){
    if (estado == 0){
        sim.style.transform="translate(+95px)"
        nao.style.transform="translate(130px, -150px)"
    }
    if (estado == 1){
        nao.style.transform="translate(130px, +150px)"
    }
    if (estado == 2){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 3){
        nao.style.transform="translate(-325px, -150px)"
    }
    if (estado == 4){
        nao.style.transform="translate(+135px, +150px)"
    }
    if (estado == 5){
        nao.style.transform="translate(+135px, -150px)"
    }
    if (estado == 6){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 7){
        nao.style.transform="translate(-325px, -150px)"
        estado = 0
    }
    estado++
} 

sim.addEventListener("click", clicar)
function clicar(){
    resp.innerHTML ="Eu te amo meu amoooor!!"
    sim.style.transform="translate(0px)"
    nao.style.transform="translate(0px, 0px)"

    resp.style.opacity= 1;

    setTimeout(function(){
        resp.style.opacity = 0;
      }, 3000 )
    
    window.location.replace('https://wa.me/5518997696495')
}
