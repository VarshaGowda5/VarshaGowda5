let cart = [];

document.addEventListener("DOMContentLoaded", function() {
  const addCartButtons = document.querySelectorAll(".add-to-cart");
  const cartContainer = document.querySelector(".cart-container");
  const cartItemsContainer = document.querySelector(".cart-items");
  const cartTotalContainer = document.querySelector(".cart-total");
  const clearCartButton = document.querySelector(".clear-cart");
  const checkoutButton = document.querySelector(".checkout");

  addCartButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const productCard = e.target.parentNode;
      const productName = productCard.querySelector("h3").textContent;
      const productPrice = productCard.querySelector("p").textContent;
      const product = { name: productName, price: productPrice };

      cart.push(product);
      updateCart();
    });
  });

  clearCartButton.addEventListener("click", () => {
    cart = [];
    updateCart();
  });

  checkoutButton.addEventListener("click", () => {
    alert("Thankyou for Choosing Happy Feathers!!");
  });

  function updateCart() {
    cartItemsContainer.innerHTML = "";
    cartTotalContainer.innerHTML = "";

    let total = 0;
    cart.forEach((product, index) => {
      const cartItem = document.createElement("div");
      cartItem.innerHTML = `
        <p>${product.name} - ${product.price}</p>
        <button class="remove-from-cart" data-index="${index}">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);

      total += parseFloat(product.price.replace("₹", ""));
    });

    const cartTotal = document.createElement("p");
    cartTotal.innerHTML = `Total: ₹${total.toFixed(2)}`;
    cartTotalContainer.appendChild(cartTotal);

    const removeFromCartButtons = document.querySelectorAll(".remove-from-cart");
    removeFromCartButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        cart.splice(index, 1);
        updateCart();
      });
    });
  }
});