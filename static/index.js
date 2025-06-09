import {refP, refDiv, refLista, refTable, refTh, refTd, refBody} from "./funcions/referencias.js"

console.log(refP)
console.log(refDiv)
console.log(refLista)
console.log(refTable)
console.log(refBody.textContent)

console.log(document.getElementById("ref-p").firstChild)
console.log(document.getElementById("ref-div").firstChild)
console.log(document.getElementById("ref-lista").children[0])
console.log(document.getElementById("ref-lista").children[1])
console.log(document.getElementById("ref-table").firstChild)
console.log(document.getElementById("ref-th").firstChild)
console.log(document.getElementById("ref-td").firstChild)
console.log(document.getElementById("ref-body").children)


 

