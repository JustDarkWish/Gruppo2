document.querySelector('#btnInserisci').addEventListener('click', function() {
    let task = document.querySelector('#formContainer input[type="text"]').value;
    let data = document.querySelector('#formContainer input[type="date"]').value;

    if(task === '' || data === '') {
        alert('Per favore, inserisci sia la task che la data.');
        return;
    }

    let li = document.createElement('li');
    li.textContent = task + ' - ' + data;

    document.querySelector('#listaTask').appendChild(li);

    document.querySelector('#task').value = '';
    document.querySelector('#data').value = '';

})