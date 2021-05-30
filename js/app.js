'use strict';
//targeting the form and the div
// let container = document.getElementById('container');
let myForm = document.getElementById('myForm');
// let ulEl = document.createElement('ul');
let orders = document.getElementById('orders');
let drinks = [];

function Coffee(userName, quantity) {
    this.userName = userName;
    this.quantity = quantity;
    drinks.push(this);
    // settingItems();
}

function settingItems() {
    let data = JSON.stringify(drinks);
    localStorage.setItem('coffee', data);
}
function gettingItems() {
    let stringObj = localStorage.getItem('coffee');
    console.log(stringObj);
    console.log(typeof stringObj);

    let normalObj = JSON.parse(stringObj);
    console.log(normalObj);
    console.log(typeof normalObj);

    if (normalObj !== null) {
        drinks = normalObj;
    }
    render();
}

function render() {
    orders.textContent = '';
    for (let i = 0; i < drinks.length; i++) {
        let liEl = document.createElement('li');
        liEl.textContent = `${drinks[i].userName} ordered ${drinks[i].quantity} cups`;
        orders.appendChild(liEl);
    }
}

function handleSubmit(event) {
    event.preventDefault();
    let userName = event.target.userName.value;
    let quantity = event.target.quantity.value;
    new Coffee(userName, quantity);
    // console.log(drinks);
    settingItems();
    render();
}
console.log('starting drinks', drinks);
gettingItems();
myForm.addEventListener('submit', handleSubmit);
