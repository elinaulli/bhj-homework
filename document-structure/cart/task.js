const cartProductsContainer = document.querySelector(".cart__products"); //корзина

document.querySelectorAll(".product").forEach((product) => {
    const quantityValueElement = product.querySelector(".product__quantity-value"); // кол-во товара
    const addButton = product.querySelector(".product__add"); // кнопка добавить в корзину 
    // Увеличение количества
    product
        .querySelector(".product__quantity-control_inc")
        .addEventListener("click", () => {
            let quantity = parseInt(quantityValueElement.textContent);
            quantityValueElement.textContent = quantity + 1;
        });

    // Уменьшение количества
    product
        .querySelector(".product__quantity-control_dec")
        .addEventListener("click", () => {
            let quantity = parseInt(quantityValueElement.textContent);
            if (quantity > 1) {
                quantityValueElement.textContent = quantity - 1;
            }
        });

    // Добавление товара в корзину
    addButton.addEventListener("click", () => {
        const productId = product.dataset.id;
        const productImageSrc = product.querySelector(".product__image").src;
        const quantity = parseInt(quantityValueElement.textContent);

        let cartProduct = cartProductsContainer.querySelector(
            `.cart__product[data-id="${productId}"]`
        );

        if (cartProduct) {
            const cartProductCountElement = cartProduct.querySelector(
                ".cart__product-count"
            );
            cartProductCountElement.textContent =
                parseInt(cartProductCountElement.textContent) + quantity;
        } else {
            cartProduct = document.createElement("div");
            cartProduct.classList.add("cart__product");
            cartProduct.setAttribute("data-id", productId);

            cartProduct.innerHTML = `
                  <img class="cart__product-image" src="${productImageSrc}">
                  <div class="cart__product-count">${quantity}</div>
              `;

            cartProductsContainer.appendChild(cartProduct);
        }
    });
});