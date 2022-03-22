let buttonAdd = document.getElementById('criar-tarefa');
let inputText = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');


buttonAdd.addEventListener('click', criarTarefa);

function criarTarefa() {
    let itemLista = document.createElement('li');
    itemLista.className = 'list-item'
    itemLista.addEventListener('click', selectItem)
    itemLista.addEventListener('dblclick', completeTask)
    itemLista.innerText = inputText.value;
    taskList.appendChild(itemLista);
    inputText.value = '';
}

function selectItem(event){
    if(document.querySelectorAll('.selected').length > 0){
        let selectedItem = document.querySelector('.selected');
        selectedItem.classList.remove('selected')
    }
    event.target.classList += ' selected';
}

function completeTask(event){
        if(event.target.className.includes('completed')){
            event.target.classList.remove('completed');
        }else if(event.target.className !== 'completed'){
            event.target.classList.add('completed');
        }
}

let buttons = document.getElementById('buttons');
let btnClean = document.createElement('button');
btnClean.id = 'apaga-tudo';
btnClean.innerText = 'Apagar tudo';
buttons.appendChild(btnClean);
btnClean.addEventListener('click', removeItens);

function removeItens(){
    let itemLista = document.querySelectorAll('.list-item');
    for(let index = 0;index < itemLista.length;index += 1){
        taskList.removeChild(itemLista[index]);
    };
};

let btnRemoveCompleted = document.createElement('button');
btnRemoveCompleted.id = 'remover-finalizados';
btnRemoveCompleted.innerText = 'Apagar finalizadas';
buttons.appendChild(btnRemoveCompleted);
btnRemoveCompleted.addEventListener('click', removeCompleted);

function removeCompleted(){
    let completedItens = document.querySelectorAll('.completed');
    for(let index = 0;index < completedItens.length;index += 1){
        taskList.removeChild(completedItens[index]);
    }
}

