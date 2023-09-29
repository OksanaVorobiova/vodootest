(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-cart-open]"),
    closeModalBtn: document.querySelector("[data-cart-close]"),
    cart: document.querySelector("[data-cart]"),
  };

  refs.openModalBtn.addEventListener("click", toggleCart);
  refs.closeModalBtn.addEventListener("click", toggleCart);

  function toggleCart() {
    document.body.classList.toggle("cart-open");
    refs.cart.classList.toggle("hidden");
  }
})();
