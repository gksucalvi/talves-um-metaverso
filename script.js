const url  = "https://black-trout-ring.cyclic.app/api/metaversodasgalaxias/suggestions"

const boxDis = document.getElementById("boxDis")
const loader = document.getElementById("loader");

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
    
    boxDis.style.display = "flex";
    loader.style.display = "block";

    await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(item) 
    })
    
    loader.style.display = "none";
    boxDis.innerHTML = "Enviado com sucesso!"
    formS.reset()
    setInterval(()=>{
        boxDis.style.display = "none";
    }, 2000)
})