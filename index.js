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
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
  }
}

function total() {
  var j=0;
  for(var i=0; i<cart.length; i++){
    j=j+cart[i].itemPrice;
  }
  return j;
}

function removeFromCart(item) {
  if(cart[item] === undefined){
    return `That item is not in your cart.`
  }
  else{
    for(var i=0; i<cart.length; i++){
        if(item === cart[i].itemName){cart.splice[1, i]}
        else{}
      }

    }

  }


function placeOrder(cardNumber) {
  // write your code here
}
