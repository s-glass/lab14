/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('myItems')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
  console.log('This is the cart', state.cart);
}

// let headerRow = document.createElement('tr');
// table.appendChild(headerRow);

// let headerCell = document.createElement('th');
// headerCell.textContent = this.items;
// headerRow.appendChild(headerCell);



// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // table.deleteRow('tr');
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let table = document.querySelector('#cart tbody');
  // let table = document.getElementById('table-body');
  //why are no items populating into state.cart.items?
  let myArray = [1, 2, 3, 4, 5];
  for (let i in state.cart.items) {
    let headerRow = document.createElement('tr');

    console.log('showCart function was called.');

    let removeCell = document.createElement('td');
    removeCell.textContent = 'Remove';
    removeCell.classList.add('delete');
    removeCell.id = i;

    let quantityCell = document.createElement('td');
    quantityCell.textContent = state.cart.items[i].quantity;

    let itemCell = document.createElement('td');
    itemCell.textContent = state.cart.items[i].product;

    table.appendChild(headerRow);
    headerRow.appendChild(quantityCell);
    headerRow.appendChild(itemCell);
    headerRow.appendChild(removeCell);
  }
};


// TODO: Find the table body

// TODO: Iterate over the items in the cart
// TODO: Create a TR
// TODO: Create a TD for the delete link, quantity,  and the item
// TODO: Add the TR to the TBODY and each of the TD's to the TR


function removeItemFromCart(event) {
  //  state.target.removeItemFromCart(event.target.id"")
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
