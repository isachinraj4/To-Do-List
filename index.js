function changeName() {
    if (document.getElementById('changeName').innerHTML == 'Change My Name') {
        document.getElementById('changeName').innerHTML = 'Name Changed';
        document.getElementById('changeName').style.backgroundColor = 'red';
    }
    else {
        document.getElementById('changeName').innerHTML = 'Change My Name';
        document.getElementById('changeName').style.backgroundColor = 'white';
    }
}

let takst = document.querySelector('#addToList');

console.log(takst);
let currentTaskList = [];
let completedTaskList = [];

function addTask() {
    if (takst.value != '') {
        currentTaskList.push(takst.value);
        console.log(currentTaskList);
        showTaks(takst.value);
    }
    else {
        console.log("Please add some taks");
    }
}

let btn = document.querySelector('#addToList');

let listToDisplay = [];
function showTaks(taskName) {
    if (taskName == undefined) {
        return;
    }
    let myDiv = document.createElement('div');
    let divId = 'myDiv' + currentTaskList.length;
    myDiv.id = divId
    myDiv.style = 'display:flex; justify-content: center; background-color: black; color: white; margin: 5px; padding: 5px; border-radius: 5px;';
    let item = document.createElement('p');
    let idOfItem = "idItm" + currentTaskList.length;
    item.innerHTML = taskName;
    item.id = idOfItem;
    item.style = 'display: inline-flex; color: white; background-color: black; margin: 5px; padding: 5px; border-radius: 5px;';
    console.dir(item);
    let ckbox = document.createElement('input');
    ckbox.type = 'checkbox';
    ckbox.style = 'margin: 5px;';
    ckbox.id = idOfItem
    ckbox.onclick = () => completeTask(item.id);
    document.querySelector('#tasks').after(myDiv);
    document.querySelector('#' + divId).append(ckbox, item);
}

btn.addEventListener('click', showTaks());

function completeTask(taskId) {
    taskId = '#' + taskId;
    let item = document.querySelectorAll(taskId);
    if (item.length != 0) {
        // completedTaskList.push(item.value);
        // currentTaskList.pop(item.value);
        item.forEach((i) => {
            i.remove()

        }
        )
        // item.remove();
    }
}

// let body = document.querySelector('body');

// let changeMode = document.querySelector('#changeMode');
// console.dir(changeMode);

// let mode = (evt) => {
//     if (body.style.backgroundColor == 'black') {
//         // body.style.backgroundColor = 'white';
//         body.classList.add('light');
//         body.style.color = 'black';
//         changeMode.innerHTML = 'Change To Dark Mode';
//     }
//     else {
//         // body.style.backgroundColor = 'black';
//         body.classList.add('dark');
//         body.style.color = 'white';
//         changeMode.innerHTML = 'Change To Light Mode';
//     }
// }

// changeMode.addEventListener('click', mode);

// let btn = document.createElement('button');
// btn.innerText = 'Click Me';
// btn.style.backgroundColor = 'red';
// btn.style.color = 'white';
// btn.style.width = '100px';
// btn.style.height = '70px'

// let bdy = document.querySelector('body');
// bdy.prepend(btn);

// let p = document.createElement('p');
// p.style.backgroundColor = 'red';
// p.style.color = 'black';
// let origP = document.querySelector('p');
// origP.style = p.style;