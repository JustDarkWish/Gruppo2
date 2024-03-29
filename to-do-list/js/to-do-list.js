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
let btnModifica = document.querySelector("#btnEdit");
let btnCancella = document.querySelector("#btnDelete");

// let lisTask = document.querySelectorAll("ul#listaTask"); //restituisce una Nodelist


let listaTask = []; 

class Task{
    constructor(nome, date){
        this.nome = nome;
        this.date = date;
    }

    stampaTask(){
        let descrizioneTask = `<span>${this.nome} </span> <span> ${this.date} </span>`;
        return descrizioneTask; 
    } 
}

function recuperaTask(){
    let erroreRecuperaTask = ""; //preparo variabile errore
    if(task.value.trim() != "" && date.value.trim() != ""){
        miaTask = new Task (task.value, date.value);
        listaTask.push(miaTask); //inserisco nell'array di task
    }else {
        erroreRecuperaTask = `<p> Non hai compilato correttamente i form </p>`
    }
    //resetto campi di input:
    task.value = "";
    date.value = ""; 
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
    if(listaTask.length == 0){ //lunghezza stringa 0
        feedItem.innerHTML = `<p> Non hai scritto la task </p>`; 
    }else{
        listaTask.forEach(task =>{
            demo.innerHTML += `<li> ${task.stampaTask()} <button class="btnEdit">Modifica</button> 
                                                        <button class="btnDelete">Cancella</button> </li>`;
        })
    }
}


btnInserisci.addEventListener('click', caricaTask);

//dalla nodeList di listaTask
[...listaTask].forEach(task => {
    task.addEventListener("click", function(){ //metodo che quando clicco leva e mette sottolineature 
        if(task.classList.contains('underline')){
            task.classList.remove('underline');
        }else {
            task.classList.add('underline'); 
        }
    })
})