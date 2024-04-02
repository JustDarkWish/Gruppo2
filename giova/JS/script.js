// Creare una to-do list:
// Form a sinistra con task e data (due campi input) più bottone di aggiunta
// Elenco delle task a destra. Ogni task deve riportare checkbox spuntabile per indicarne il completamento (opzionale, al check la task viene sbarrata)
// Nome della task o descrizione
// Coppia di bottoni per modificare(edit) o eliminare la task
//                  Edit: riporta nei campi del form in nome della task e la data permettendo di aggiornarli
//                  Delete: elimina la task.
// Deve essere presentabile dal punto di vista dell'aspetto. (opz. Utilizzare icone per i bottoni e animazioni per l'aggiunta e la rimozione delle task)
// Icone: https://fontawesome.com/ // Animazione: https://animate.style/

let containerMain = document.querySelector("#containerMain");
let formContainer = document.querySelector("#formContainer");
let task = document.querySelector("#task");
let feedItem = document.querySelector("#feedItem");
let data = document.querySelector("#data");
let feedDate = document.querySelector("#feedDate");
let btnInserisci = document.querySelector("#btnInserisci");
let todoContainer = document.querySelector("#todoContainer");
let listaTask = document.querySelector("#listaTask");
let demo = document.querySelector("#demo");

function inserisciTask() {
  let taskValue = task.value;
  let dataValue = data.value;

  if (taskValue === "" || dataValue === "") {
    alert("Per favore, inserisci sia la task che la data.");
    demo.innerHTML=`Per favore, inserisci sia la task che la data.`
    return;
  }
  demo.innerHTML="";

  let checkbox = document.createElement("input",);
  let edit = document.createElement("button");
  let deleteDelete = document.createElement("button");
  let li = document.createElement("li");
  checkbox.setAttribute("type", "checkbox");
  deleteDelete.setAttribute("type", "button");
  edit.setAttribute("type", "button");
  li.setAttribute("class","animate__animated animate__backInLeft");
  
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(taskValue + " - " + dataValue));
  
  function crossout() {
    if (this.checked) {
        this.parentNode.style.textDecoration = "line-through";
        li.setAttribute("class", "animate__animated animate__headShake");
        li.classList("animate__headShake");
      
    } else {
      this.parentNode.style.textDecoration = "none";
      this.parentNode.classList.toggle("animate__headShake");
    }
  }
  checkbox.addEventListener("click",crossout);

  li.appendChild(edit);
  edit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  deleteDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  li.appendChild(deleteDelete);

  function elimina() {
    li.classList.add("animate__backOutRight");
    li.addEventListener("animationend", () => {
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
  task.value = "";
  data.value = "";
}

btnInserisci.addEventListener("click", inserisciTask);

