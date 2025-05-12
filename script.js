 // 🛒 Cart Functionality
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart!`);
  }
  
  window.onload = function () {
    // Handle cart display
    if (document.getElementById('cart-items')) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const list = document.getElementById('cart-items');
      let total = 0;
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        list.appendChild(li);
        total += item.price;
      });
      document.getElementById('total').textContent = total.toFixed(2);
    }
  
    // 📨 Contact form handler
    const contactForm = document.querySelector('form');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission
  
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
  
        if (!name || !email || !message) {
          alert('Please fill in all fields.');
          return;
        }
  
        // Simulate successful form submission
        alert('Thank you for contacting us, ' + name + '! We will respond shortly.');
  
        // Optionally clear the form
        contactForm.reset();
      });
    }
  };
  