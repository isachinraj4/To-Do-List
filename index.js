let listContainer = document.querySelector('#list-container');
let addTaskBtn = document.querySelector('#addButton');
let taskInput = document.querySelector('#addToList');
let li = listContainer.children;



let addList = () => {
    if (taskInput.value === '') {
        alert('Enter a task');
        return;
    }
    else if (taskInput.value !== '') {
        let task = taskInput.value;
        let li = document.createElement('li');
        li.innerText = task;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        addListnerToLi();
    }
    taskInput.value = "";
    addToLocalStorage();
}


addTaskBtn.addEventListener('click', addList);


let addListnerToLi = () => {
    for (let element of li) {
        element.addEventListener('click', completeTask(element));
    };
    addToLocalStorage();
}

let completeTask = (element) => {
    return () => {
        //element.classList.toggle('checked');
        addToLocalStorage();
    }
}

let addToLocalStorage = () => {
    localStorage.setItem('tasks', listContainer.innerHTML);
}

let getFromLocalStorate = () => {
    listContainer.innerHTML = localStorage.getItem('tasks');
    addListnerToLi();
}

getFromLocalStorate();

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    addToLocalStorage();
}, false);