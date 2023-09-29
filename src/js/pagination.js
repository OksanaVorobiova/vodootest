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
}
