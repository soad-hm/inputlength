var DA=document.querySelector("input")
var a= document.querySelector("span")
var max= DA.getAttribute("maxlength")

function main(){
a.innerHTML=max-DA.value.length

}
DA.addEventListener("keyup",main)