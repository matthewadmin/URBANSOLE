// cart.js

let cart = JSON.parse(localStorage.getItem('sunsoleCart')) || [];

const cartBtn = document.getElementById('cart-btn');

function updateCartCount() {
  if (cartBtn) {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartBtn.textContent = `Cart (${totalItems})`;
  }
}

function saveCart() {
  localStorage.setItem('sunsoleCart', JSON.stringify(cart));
  updateCartCount();
}

// Add product by id
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const cartItem = cart.find(item => item.id === id);
  if (cartItem) {
    cartItem.qty++;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
  }
  saveCart();
  alert(`${product.name} added to cart!`);
}

// On load
updateCartCount();

// For debugging or further extension, you could add more functions like removeFromCart, showCart, checkout, etc.
