const url  = "https://black-trout-ring.cyclic.app/api/metaversodasgalaxias/suggestions"

const boxSpan = document.getElementById("boxDis")

boxSpan.addEventListener("click", ()=>{
    alert("Formulario indisponivel no momento!")
})

const formS = document.getElementById("formSuggestion")
const btnSend = document.getElementById("sendM");

const inputName  = document.getElementById("name_user")
const inputEmail  = document.getElementById("email_user")
const inputSuggestion  = document.getElementById("suggestion")


btnSend.addEventListener("click", async ()=>{
    let item = {
        name : inputName.value,
        email: inputEmail.value,
        suggestion: inputSuggestion.value
    }
        
    await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(item) 
    })

    alert("Enviado")

    formS.reset()
})