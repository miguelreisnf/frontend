const formularioCasamento = document.querySelector("form")
const iLugar = document.querySelector("lugar")
const iData_Hora = document.querySelector("data_hora")
const iConjuge1 = document.querySelector("conjuge1")
const iConjuge2 = document.querySelector("conjuge2")
const iConvidados = document.querySelector("convidados")

function cadastrar(){

    fetch("http://localhost:8080/casamento",
    {
        headers: {
            'Accept': 'application.json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            lugar: iLugar.value,
            data_hora: iData_Hora.value,
            conjuge1: iConjuge1.value,
            conjuge2: iConjuge2.value,
            convidados: iConvidados.value
        })
    })
    .then(function(res) {console.log(res)})
    .catch(function(res) {console.log(res)})

}

function limparCampos(){
    iLugar.value = ""
    iData_Hora.value = ""
    iConjuge1.value = ""
    iConjuge2.value = ""
    iConvidados.value = ""
}

formularioCasamento.addEventListener("submit", function(event){
    event.preventDefault()

    cadastrar()
    limparCampos()
})