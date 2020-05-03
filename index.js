var cart = [];

function getCart() {

 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var itm = {itemName: `${item}`, itemPrice: Math.floor(Math.random() * 100)+1};
cart.push(itm);
return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart[0] === undefined){
    return 'Your shopping cart is empty.'
  }
  else if(cart[0] !== undefined && cart[1] === undefined){
    return `In your cart, you have ${cart[0]}.`
  }
  else if(cart[1] !== undefined && cart[2] === undefined){
    return `In your cart, you have ${cart[0].}, and ${cart[1]}`
  }
  else {
    return `In your cart, you have ${cart[0].}, ${cart[1]}, and ${cart[3]}`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
