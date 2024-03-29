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

function inserisciTask() {
    let taskValue = task.value;
    let dataValue = data.value;

    if(taskValue === '' || dataValue === '') {
        alert('Per favore, inserisci sia la task che la data.');
        return;
    }
    
    let checkbox=document.createElement("input");
    let edit=document.createElement("input");
    let deleteDelete=document.createElement("input");
    let li = document.createElement('li');
    checkbox.setAttribute("type","checkbox")
    deleteDelete.setAttribute("type","button");
    edit.setAttribute("type","button");
    li.classList.add("#taskine");

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskValue + " - " + dataValue));
    
    li.appendChild(edit);
    li.appendChild(deleteDelete);
    

    listaTask.appendChild(li);
    task.value = '';
    data.value = '';

}

btnInserisci.addEventListener('click', inserisciTask);