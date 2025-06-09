export { refP, refDiv, refLista, refTable, refTh, refTd }

const refP = document.querySelector("#ref-p");
const refDiv = document.querySelector("#ref-div");
const refLista = document.querySelector("#ref-lista");
const refTable = document.querySelector("#ref-table");
const refTh = document.querySelector("#ref-th");
const refTd = document.querySelector("#ref-td");

refP.addEventListener("click", ()=> {
    refP.firstChild.textContent = "cambio o texto"
})

