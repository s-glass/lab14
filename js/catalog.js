/* global Product, Cart */ // can't create a cart without the objects to add first

'use strict';

// Set up an empty cart for use on this page.
state.cart = localStorage.myItems ? new Cart(JSON.parse(localStorage.myItems)) : new Cart([]); // this will no longer be null, it's a new cart with empty array at the moment

// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {

  //Done TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items'); // items is the select element from index.html line 47
  for (let i in state.allProducts) { // this is line 67 on the app.js all products; 
    let optionTag = document.createElement('option'); // added in class
    optionTag.textContent = state.allProducts[i].name;
    optionTag.value = state.allProducts[i].name;
    selectElement.appendChild(optionTag);
  }
  }

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // DONE TODO: Prevent the page from reloading
event.preventDefault();
console.log('this is the click event ', event);

  // Do all the things ...
  addSelectedItemToCart(); // start with this function and make sure you get all of this working. Then move on to local storage, state.cart is a new cart instance. so if there's dot nottation below, look at app.js line 23 to find the protoitype saveToLoCal Storage, so save the contents of the cart (the array of cart items) to the local storage
  state.cart.saveToLocalStorage();
  state.cart.updateCounter();
  updateCartPreview(state.cart.items[state.cart.items.length-1]);

}

// Done TODO: Add the selected item and quantity to the cart (state.cart)
function addSelectedItemToCart() {
  // DONE TODO: suss out the item picked from the select list - we can get the items in index.html, line 47, 
  let item= document.getElementById('items').value // because options tag is what sits at the top level, even though item is a select, the 'bag' that shows on the list is technically an option  (thing?) // 
  console.log('item selected', item);
  let quantity = document.getElementById('quantity').value // quantity comes from the HTML page
  console.log('quantity selected', quantity);
  // DONE TODO: get the quantity
  // DONE TODO: using those, add one item to the Cart - before you get to save to local storage, add an item to Cart - prototype is in app.js line 19 prototype // you're referencing what's in the app.js. state.cart is the cart, it can inherit 
  state.cart.addItem(item, quantity); // what is the cart on this page - it's state.cart on line 6 above on this page
  console.log(state.cart);
}

// Done TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview(itemSelected) {
    let parent = document.getElementById('cartContents'); // added in class
    let child = document.createElement('div');
    child.textContent = itemSelected.product + itemSelected.quantity;
    // optionTag.value = state.allProducts[i].name;
    parent.appendChild(child);
  }
  // Done TODO: Get the item and quantity from the form
  // Done TODO: Add a new element to the cartContents div with that information

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
