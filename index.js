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
    return `In your cart, you have ${cart[0]}, and ${cart[1]}.`
  }
  else {
    return `In your cart, you have ${cart[0]}, ${cart[1]}, and ${cart[2]}.`
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
    return `This item is not in your cart.`
  }
  else{
    delete cart[item];
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
