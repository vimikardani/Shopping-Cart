let products=[
  {
      id:1,
      image:"https://m.media-amazon.com/images/I/61-M8rjGl0L._UY741_.jpg",
      name:"Wine dress",
      price:1200.00,
  
  },
  {
      id:2,
      image:"https://m.media-amazon.com/images/I/61Kp-+0GrHL._UY741_.jpg",
      name:"Blue dress",
      price:1000.00,
  
  },
  {
    id:3,
    image:"https://m.media-amazon.com/images/I/61GUaIIL9vL._UX569_.jpg",
    name:"Floral dress",
    price:4500.00,

},
{
  id:4,
  image:"https://m.media-amazon.com/images/I/61GzQN-3FqL._UX679_.jpg",
  name:"Purple dress",
  price:1750.00,

},
{
  id:5,
  image:"https://m.media-amazon.com/images/I/51sU67SRwGL._UY741_.jpg",
  name:"Yellow dress",
  price:1355.00,

},
{
  id:6,
  image:"https://m.media-amazon.com/images/I/6178DyCGqoL._UY741_.jpg",
  name:"Green dress",
  price:999.00,

},
{
  id:7,
  image:"https://m.media-amazon.com/images/I/61CSwtvIKsL._UX569_.jpg",
  name:"White dress",
  price:1199.00,

},
{
  id:8,
  image:"https://m.media-amazon.com/images/I/61Biq8HRTyL._UY741_.jpg",
  name:"Red dress",
  price:1495.00,

}
];

let cart=[];
let openCart = false;
let cartQuantity = 0;

function displayProducts(){

  products.map((product)=>{

    const container=document.getElementById('card-container');
    const div=document.createElement('div');
    div.className="card";

    const image=document.createElement('img');
    image.className="product-img";
    image.src=product.image;

    const span1=document.createElement('span');
    span1.className='product-name';
    span1.innerHTML=product.name;

    const span2=document.createElement('span');
    span2.className='product-price';
    span2.innerHTML=product.price;

    const addtocartBtn=document.createElement('button');
    addtocartBtn.className='addtocartBtn';
    addtocartBtn.innerHTML='ADD TO CART';

    addtocartBtn.onclick=function(){
          addtoCart(product);
    }

    div.appendChild(image);
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(addtocartBtn);
    container.appendChild(div);

  })
    
}

function addtoCart(product){
  let found = false;
  cart.map((cartProduct) => {
    if(cartProduct.id == product.id) {
      found = true;
      cartProduct.quantity = cartProduct.quantity + 1;
      cartProduct.total=cartProduct.price*cartProduct.quantity;
      displayCart();
    }
  });
  if(!found){
    cart.push({...product, quantity: 1, total: product.price});
    cartQuantity = cartQuantity+1;
    document.getElementById('cart-quantity').innerHTML = cartQuantity;
    displayCart();
  }
}

function displayCart(){

  document.getElementById('cart-container').style.display = 'block';
  
  const container = document.getElementById('cart-product-container');
  container.innerHTML = '';

  cart.map((product, index) => {

    const div = document.createElement('div');
    div.className = 'cart-product'

    const image = document.createElement('img');
    image.className = 'cart-product-image';
    image.src=product.image;

    const span1=document.createElement('span');
    span1.className='cart-product-name';
    span1.innerHTML=product.name;

    const span2=document.createElement('span');
    span2.className='cart-product-price';
    span2.innerHTML=product.total;

    const decrementButton = document.createElement('button');
    decrementButton.className="decreaseButton";
    decrementButton.innerHTML = '-';

    decrementButton.onclick = function(){
      if(product.quantity > 1){
        product.quantity = product.quantity - 1;
        quantity.innerHTML = product.quantity;
        product.total = product.price*product.quantity;
        span2.innerHTML=product.total;
        displayPrice();
      }
    }

    const quantity = document.createElement('span');
    quantity.innerHTML = product.quantity;

    const incrementButton = document.createElement('button');
    incrementButton.innerHTML = '+';
    incrementButton.className="increaseButton"

    incrementButton.onclick = function(){
      product.quantity = product.quantity + 1;
      quantity.innerHTML = product.quantity;
      product.total = product.price*product.quantity;
      span2.innerHTML=product.total;
      displayPrice();
    }

    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'X';
    removeButton.className="removeButton";

    removeButton.onclick = function(){
      removeFromCart(index);
    }
    
    div.appendChild(image);
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(decrementButton);
    div.appendChild(quantity);
    div.appendChild(incrementButton);
    div.appendChild(removeButton);
    container.appendChild(div);

  })
 displayPrice();
}

function clearCart(){
  cart = [];
  cartQuantity = 0;
  document.getElementById('cart-quantity').innerHTML = cartQuantity;
  displayPrice();
  displayCart();
}

function displayPrice(){
  let totalPrice = 0;

  const cartContainer = document.getElementById('cart-container');
  const span = document.getElementById('cart-total');
  span.innerHTML='';

  cart.map((product) => {
    totalPrice = totalPrice+product.price*product.quantity;
  })
  
  span.innerHTML = "Pay -> " + totalPrice;
  cartContainer.appendChild(span);
}

function removeFromCart(index){
  cart.splice(index, 1);
  cartQuantity = cartQuantity-1;
  document.getElementById('cart-quantity').innerHTML = cartQuantity;
  displayCart();
}

function handleCart(){

  openCart = !openCart

  if(openCart == true){
    displayCart();
  } else {
    document.getElementById('cart-container').style.display = 'none';
  }
}
displayProducts();