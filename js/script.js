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