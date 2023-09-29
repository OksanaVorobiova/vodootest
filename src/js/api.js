import axios from "axios";

const BASEURL = `https://voodoo-sandbox.myshopify.com/products.json?limit=24`;
let page = 1;

export default async function getProducts() {
  const res = await axios.get(`${BASEURL}&page=${page}`);
  return res.data.products;
}

export const getPage = () => page;
