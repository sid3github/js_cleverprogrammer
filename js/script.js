// Challenge 1: your age in days

let clickBtn = document.querySelector('.btn-primary');

clickBtn.addEventListener('click', function () {
    let birthYear = prompt('Enter your birth year..');
    let currentYear = 2020;
    let days = (currentYear - birthYear) * 365;
    let h2 = document.createElement('h2');
    let result = document.querySelector('#flex-box-result');
    let output = document.createTextNode('You have survived ' + days + ' days so far!!!');
    h2.appendChild(output);
    result.appendChild(h2);
});

let resetBtn = document.querySelector('.btn-danger');

resetBtn.addEventListener('click', function () {
    let result = document.querySelector('#flex-box-result');
    result.innerHTML = '';
});

// Challenge 2: cat generator

function generateCat() {
    let image = document.createElement('img');
    let div = document.querySelector('#flex-cat-gen');

    image.src = 'https://cdn2.thecatapi.com/images/MTc0NjYyOA.gif';
    div.appendChild(image);
}

// Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice) {
    console.log(yourChoice);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log(botChoice);
    results = decideWinner(humanChoice, botChoice);
    // message = finalMessage(results); 'You Won'
    //rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDatabase = {
        'rock': {
            'scissors': 1,
            'rock': 0.5,
            'paper': 0
        },
        'paper': {
            'rock': 1,
            'paper': 0.5,
            'scissors': 0
        },
        'scissors': {
            'paper': 1,
            'scissors': 0.5,
            'rock': 0
        }
    };

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    console.log(yourScore);
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}
// incomplete

// Simple ToDo List

let todoBtn = document.querySelector('.add-todo-btn');
let deleteTodoBtn = document.querySelector('.delete-todo-btn');
let todoListContainer = document.querySelector('.todo-list-container');
let list;
let node;
let todo;
let time;
todoBtn.addEventListener('click', function () {
    let todoInput = document.querySelector('.add-todo-input');
    list = document.createElement('li');
    todo = list.classList.add('todo');
    node = document.createTextNode(todoInput.value);
    list.append(new Date().toLocaleString());
    let span = document.createElement('span');
    span.append(node);
    list.append(span);
    let cancel = document.createElement('button');
    cancel.classList.add('btn');
    cancel.classList.add('btn-primary');
    cancel.innerText = 'Delete';
    list.appendChild(cancel);
    todoListContainer.appendChild(list);
    todoInput.value = '';

    cancel.addEventListener('click', function () {
        this.parentElement.remove();
    });

});

deleteTodoBtn.addEventListener('click', function () {
    todoListContainer.innerHTML = '';
});