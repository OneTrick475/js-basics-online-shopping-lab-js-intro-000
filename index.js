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
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if(cart[1] !== undefined && cart[2] === undefined){
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  }
  else {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`
  }
}

function total() {
  for(var i=0; i<=cart.length; i++){
    var j=0;
    //j=j+;
  }
  return j;
}

function removeFromCart(item) {
  if(cart[item] === undefined){
    return `That item is not in your cart.`
  }
  else{
    delete itm[item];
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
