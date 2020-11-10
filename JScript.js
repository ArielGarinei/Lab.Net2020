const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const edad = document.getElementById("edad")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

let btnSubmit = document.getElementById('submit')
let btnClear = document.getElementById('clear')
let inputs = document.querySelectorAll('input')

btnSubmit.addEventListener('click', e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""
    if(nombre.value.length <1){
        warnings += `Campo nombre es obligatorio <br>`
        entrar = true
    }
    if(apellido.value.length <1){
        warnings += `Campo apellido es obligatorio <br>`
        entrar = true
    }
    if(edad.value.length <1){
        warnings += `Campo edad es obligatorio <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})

btnClear.addEventListener('click',() =>{
    inputs.forEach(input => input.value = '')
})