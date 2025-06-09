export { refP, refDiv, refLista, refTable, refTh, refTd, refBody, refBoton, refPEx3, refBotonP, refListaEx3, refBotonLista }

const refP = document.querySelector("#ref-p");
const refDiv = document.querySelector("#ref-div");
const refLista = document.querySelector("#ref-lista");
const refTable = document.querySelector("#ref-table");
const refTh = document.querySelector("#ref-th");
const refTd = document.querySelector("#ref-td");
const refBody = document.querySelector("#ref-body");
const refBoton = document.querySelector("#ref-boton");
const refPEx3 = document.querySelector("#ref-p-ex3");
const refBotonP = document.querySelector("#ref-boton-p");
const refListaEx3 = document.querySelector("#lista-ex-3");
const refBotonLista = document.querySelector("#boton-lista")

refP.addEventListener("click", ()=> {
    refP.firstChild.textContent = "cambio o texto"
})

refBoton.addEventListener("click", ()=> {
    refBoton.textContent = "boas a todos"
})

refBotonP.addEventListener("click", ()=> {
    
    console.log(document.getElementById("ref-boton-p").previousElementSibling)
    
})

refBotonLista.addEventListener("click", ()=> {
    console.log(document.getElementById("boton-lista").previousElementSibling)
    console.log(document.getElementById("boton-lista").previousElementSibling.textContent)
})


