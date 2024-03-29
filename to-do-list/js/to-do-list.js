//prendo elementi html:
let formContainer = document.querySelector("#formContainer");
let todoContainer = document.querySelector("#todoContainer"); 

let feedDate = document.querySelector("#feedDate");
let feedItem = document.querySelector("#feedItem");
let demo = document.querySelector("#demo");

let task = document.querySelector("#task");
let date = document.querySelector("#date");
let feed = document.querySelector("#feed");

let btnInserisci = document.querySelector("#btnInserisci");
let btnModifica = document.querySelector("#btnModifica");
let btnCancella = document.querySelector("#btnCancella");

let lisTask = document.querySelectorAll("ul#listaTask"); //restituisce una Nodelist


let listaTask = []; 

class Task{
    constructor(nome, data){
        this.nome = nome;
        this.data = data;
    }

    stampaTask(){
        let descrizioneTask = `<span>${this.nome} </span> <span> ${this.data} </span>`;
        return descrizioneTask; 
    }

    aggiungiTask(task){
        this.listaTask.push(task); 
    }
    

}

function recuperaTask(){
    let erroreRecuperaTask = ""; //preparo variabile errore
    if(task.value.trim() != "" && data.value.trim() != ""){
        miaTask = new Task (task.value, data.value);
        listaTask.aggiungiTask(miaTask); 
    }else {
        erroreUtente = `<p> Non hai compilato correttamente i form </p>`
    }
    //resetto campi di input:
    task.value = "";
    data.value = ""; 
    return erroreRecuperaTask;
}

function caricaTask(){
    let erroreUtenteMessaggio = recuperaTask();
    if(erroreUtenteMessaggio.length != 0){ 
        feed.innerHTML = `<p> Errore </p>`;
    }else{
        stampaListaTask();
    }
    return erroreUtenteMessaggio;  
}

function stampaListaTask(){
    demo.innerHTML = "";
    if(miaTask.length == 0){ //lunghezza stringa 0
        feedItem.innerHTML = `<p> Non hai scritto la task </p>`; 
    }else{
        miaTask.listaTask.forEach(task =>{
            listaTask += `<li> ${task.stampaTask()} </li>`
        })
    }
}

btnInserisci.addEventListener('click', caricaTask);

