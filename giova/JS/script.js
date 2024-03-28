let containerMain=document.querySelector("#containerMain");
let formContainer=document.querySelector("#formContainer");
let task=document.querySelector("#task");
let item=document.querySelector("#item");
let data=document.querySelector("#data");
let btnInserisci=document.querySelector("#btnInserisci");
let todoContainer=document.querySelector("#todoContainer");
let listaTask=document.querySelector("#listaTask");
let demo = document.querySelector("#demo");
btnInserisci.addEventListener("click",function () {
    if (data.value.trim()==""||task.value.trim()=="") {
        alert("inserisci le cose correttamente!")
    }else{
        
        listaTask.innerHTML=`<li>${task.value} ${data.value}</li>`;
        task.value="";

    }
    
})