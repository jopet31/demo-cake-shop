let productsHTML = "";
products.forEach((cake) => {
  const html = `
        <div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${cake.image}"
            />
          </div>

          <div class="product-name limit-text-to-2-lines">
          ${cake.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="images/ratings/rating-${cake.rating.stars * 10}.png"
            />
            <div class="product-rating-count link-primary">${
              cake.rating.count
            }</div>
          </div>

          <div class="product-price">$${(cake.priceCent / 100).toFixed(2)}</div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary add-to-cart-js" data-cake-name = "${
            cake.name
          }"
          }>Add to Cart</button>
        </div>
  `;
  productsHTML += html;
});
document.querySelector(".products-grid-js").innerHTML = productsHTML;

document.querySelectorAll(".add-to-cart-js").forEach((button) => {
  button.addEventListener("click", () => {
    const cakeName = button.dataset.cakeName;

    let matchingItem = 0;
    cart.forEach((item) => {
      if (cakeName === item.cakeName) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity++;
    } else {
      cart.push({
        cakeName: cakeName,
        quantity: 1,
      });
    }

    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });
    document.querySelector(".cart-quantity").innerHTML = cartQuantity;

    console.log(cartQuantity);
    console.log(cart);
  });
});
