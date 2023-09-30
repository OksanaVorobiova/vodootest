import { Pagination } from "tui-pagination";
import { getPage } from "./api";

/*export const pagination = () => {
  const options = {
    totalItems: 461,
    itemsPerPage: 24,
    visiblePages: 5,
  };

  const pagination = new Pagination("pagination", options);
}; */

export default function makePagination() {
  const curPage = getPage();

  const paginationCont = document.getElementById("tui-pagination-container");
  paginationCont.innerHTML = "";

  const buttonsNum = 5;
  const sideBtns = Math.floor(buttonsNum / 2);
  const limit = 24;
  const products = 461;
  const pagesTotal = Math.ceil(products / limit);

  let start = curPage - sideBtns;
  let finish = curPage + sideBtns;

  if (start < 1) {
    start = 1;
    finish = buttonsNum;
  }

  if (finish > pagesTotal) {
    finish = pagesTotal;
    start = pagesTotal - buttonsNum + 1;
  }
}
