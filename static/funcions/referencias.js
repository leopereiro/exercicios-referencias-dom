export { refP, refDiv, refLista, refTable, refTh, refTd, refBody, refBoton, refPEx3, refBotonP, refListaEx3, refBotonLista, Lista2Ex3, refSpanLista, DivEx4Before, DivEx4After, elementoDivEx4, elementoPEx4}

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
let elementoPEx4 = document.createElement("p");
let botonEx4 = document.querySelector("#boton-ex-4");
let imaxeElementoP = document.createElement("img");
imaxeElementoP.src = "./imaxes/rosa.jpg"
let botonListaEx4 = document.querySelector("#boton-lista-ex-4")
let listaEx4 = document.createElement("ul");
let texto1ListaEx4 = document.createElement("li");
let texto2ListaEx4 = document.createElement("li");
let texto3ListaEx4 = document.createElement("li");
let texto4ListaEx4 = document.createElement("li");
let texto5ListaEx4 = document.createElement("li");
let imaxeListaEx4 = document.createElement("img");
let elementoInputEx4 = document.querySelector("input");
let idTextoPintado = document.querySelector("#textoPintado");
let botonInputEx4 = document.querySelector("#boton-input-ex-4");

botonInputEx4.addEventListener("click", (e) => {
    console.log("O texto é:", input.value);

let etiquetaP = document.createElement("p");
etiquetaP.innerHTML = "O texto é:" + input.value
elementoInputEx4.after(etiquetaP);

});





DivEx4Before.innerHTML = "Novo texto before";
DivEx4After.innerHTML = "Novo texto after";
elementoPEx4.innerHTML = "Novo elemento P"
elementoDivEx4.before(DivEx4Before);
elementoDivEx4.after(DivEx4After);
elementoPEx4.append(imaxeElementoP);

listaEx4.innerHTML = "Lista Exercicio 6";
texto1ListaEx4.innerHTML = "Texto 1"
texto2ListaEx4.innerHTML = "Texto 2"
texto3ListaEx4.innerHTML = "Texto 3"
texto4ListaEx4.innerHTML = "Texto 4"
texto5ListaEx4.innerHTML = "Texto 5"

imaxeListaEx4.src = "./imaxes/estrella.png"


botonEx4.addEventListener("click", ()=> {
    document.body.append(elementoPEx4)
})

botonListaEx4.addEventListener("click", ()=>{
    document.body.append(listaEx4)
})

listaEx4.append(texto1ListaEx4)
listaEx4.append(texto2ListaEx4)
listaEx4.append(texto3ListaEx4)
listaEx4.append(texto4ListaEx4)
listaEx4.append(texto5ListaEx4)
texto1ListaEx4.append(imaxeListaEx4)





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





