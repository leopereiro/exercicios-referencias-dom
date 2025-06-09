console.log(document.getElementById("lista").childNodes)
    console.log(document.getElementById("lista").firstChild)
    console.log(document.getElementById("lista").children)
    console.log(document.getElementById("lista").nextElementSibling)
    console.log(document.getElementById("lista").nextSibling)
    console.log(document.getElementsByClassName("caixa"))
    console.log(document.querySelector(".caixa"))
    console.log(document.querySelector(".caixa").childNodes)
    console.log(document.querySelector(".caixa").children)

const refDiv = document.querySelector("#ref-div");
refDiv.addEventListener("click", ()=>{
    refDiv.childNodes[1].textContent = "cambio o texto"
})