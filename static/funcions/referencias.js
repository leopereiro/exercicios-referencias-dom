export { refP, refDiv, refLista, refTable, refTh, refTd, refBody, refBoton, refPEx3, refBotonP, refListaEx3, refBotonLista, Lista2Ex3, refSpanLista, DivEx4Before, DivEx4After, elementoDivEx4}

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
const refBotonLista = document.querySelector("#boton-lista");
const ListaElemento3 = document.querySelector("#lista-elemento-3");
const Lista2Ex3 = document.querySelector("#lista-2-ex-3");
let refSpanLista = document.querySelector("#span-lista");
const refListaImaxes = document.querySelector("#lista-imaxes");
let refImaxe1 = document.querySelector("#imaxe-1");
let DivEx4Before = document.createElement("div");
let DivEx4After = document.createElement("div");
let elementoDivEx4 = document.querySelector("#div-ex-4");
DivEx4Before.innerHTML = "Novo texto before";
DivEx4After.innerHTML = "Novo texto after";
elementoDivEx4.before(DivEx4Before);
elementoDivEx4.after(DivEx4After);

/*refP.addEventListener("click", ()=> {
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

refListaEx3.addEventListener("click", ()=> {
    console.log(document.getElementById("lista-ex-3").children)
    console.log(document.getElementById("lista-ex-3").textContent)
})

ListaElemento3.addEventListener("click", ()=> {
    console.log(document.getElementById("lista-ex-3").children)
    console.log(document.getElementById("lista-elemento-3").textContent)
})

Lista2Ex3.addEventListener("click", (e)=> {
    console.log("Clico sobre: ", e.target);
    refSpanLista = e.target;

})

refImaxe1.addEventListener("click", (e)=>{
    console.log("Cliquei a imaxe", e.target);
    refImaxe1 = e.target;

})

*/





