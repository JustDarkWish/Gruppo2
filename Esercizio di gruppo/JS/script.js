let containerMain = document.querySelector('#containerMain');
let formContainer = document.querySelector('#formContainer');
let task = document.querySelector('#task');
let feedItem = document.querySelector('#feedItem');
let data = document.querySelector('#data');
let feedDate = document.querySelector('#feedDate');
let btnInserisci = document.querySelector('#btnInserisci');
let todoContainer = document.querySelector('#todoContainer');
let listaTask = document.querySelector('#listaTask');
let demo = document.querySelector('#demo');
let feed = document.querySelector('#feed');

function inserisciTask() {    
    
    if(task.value.trim() == '' || data.value.trim() == ''){
        feed.innerHTML = `<p class="animate__animated animate__headShake"> Per procedere, compilare correttamente i campi di input </p>`;
        return;
    }
    //resetto il feed di errore
    feed.innerHTML = '';

    let taskValue = task.value;
    let dataValue = data.value;

    let checkbox = document.createElement("input");
    let edit = document.createElement("button");
    let deleteDelete=document.createElement("button");
    let li = document.createElement('li');
    checkbox.setAttribute("type","checkbox")
    deleteDelete.setAttribute("type","button");
    edit.setAttribute("type","button");

    edit.setAttribute("class", "btnEditModificato");
    deleteDelete.setAttribute("class", "btnDeleteModificato");

    function crossout() {
        if (this.checked) {
            this.parentNode.style.textDecoration = "line-through";
        } else {
            this.parentNode.style.textDecoration = "none";
        }
    }
    
    checkbox.addEventListener("click", crossout);
    

    li.setAttribute("class", "animate__animated animate__backInLeft");

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskValue + " - " + moment(dataValue).format('DD/MM/YYYY')));
    
    li.appendChild(edit);
    edit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

    li.appendChild(deleteDelete);
    deleteDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    function elimina() {
        li.classList.add("animate__backOutRight");

        li.addEventListener('animationend', () => {
            li.parentNode.removeChild(li);
          });
    }

    deleteDelete.addEventListener("click", elimina);
    
    function modifica() {
        elimina();

        task.value = taskValue;
        data.value = dataValue;
    }

    edit.addEventListener("click", modifica);
    
    listaTask.appendChild(li);
    task.value = '';
    data.value = '';

    checkbox.addEventListener("click", crossout);

}

btnInserisci.addEventListener('click', inserisciTask);

task.addEventListener("blur", function(){
    if(task.value.trim() == ''){
        feedItem.innerHTML = `<p class="feed animate__animated animate__headShake"> Inserisci un nome per la tua task </p>`;
    }else{
        feedItem.innerHTML = '';
    }
})

data.addEventListener("blur", function(){
    if(data.value.trim() == ''){
        feedDate.innerHTML = `<p class="feed animate__animated animate__headShake"> Inserisci una data valida per la tua task </p>`;
    }else {
        feedDate.innerHTML = '';
    }
})