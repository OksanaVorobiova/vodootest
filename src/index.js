// HEADER SCRIPTS
import "./js/cartBtn";

import axios from "axios";
//MAIN SCRIPTS

import getProducts from "./js/api";
import rendering from "./js/renderProducts";

const listEl = document.querySelector("[data-product-list]");

async function getNewProducts() {
  const res = await getProducts();

  return renderIfNotEmpty(res);
}

getNewProducts();

function renderIfNotEmpty(products) {
  if (products.length > 0) {
    listEl.insertAdjacentHTML(
      "beforeend",
      rendering.reduceProductsArrToMarkup(products)
    );
  }
}
