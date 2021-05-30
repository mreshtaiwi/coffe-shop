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
    let normalObj = JSON.parse(stringObj);
    // console.log(normalObj);
    let newObj;//undefined
    if (normalObj !== null) {
        for (let i = 0; i < normalObj.length; i++) {
            newObj = new Coffee(normalObj[i].userName, normalObj[i].quantity);
        }
        newObj.render();
    }
}

Coffee.prototype.render = function () {
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
    let newOrder = new Coffee(userName, quantity);
    settingItems();
    newOrder.render();
}
myForm.addEventListener('submit', handleSubmit);
gettingItems();