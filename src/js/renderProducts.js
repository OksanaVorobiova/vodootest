function makeProductMarkup({ title, price_min, images }) {
  return `<li class="inline-block md:w-2/5 lg:w-[300px]">
        <div class="p-3 border border-black border-solid rounded" style="border-width:1px; border-color:black">
            <div class="w-12 p-2 bg-black rounded h-6 inline-block" style="padding:8px">
                <p class="uppercase font-SpaceGrotesk text-sand text-xs font-normal inline-block text-center">used</p>
            </div>
            <img src="${images[0] ? images[0].src : ""}" />
        </div>
        <div class="flex flex-row justify-between" style="margin-top:10px">
            <p class="inline-block font-SpaceGrotesk text-black font-bold text-sm">${
              title ? title : "Product name"
            }<br>${price_min ? price_min : "000"} KR.</p>
            <p class="inline-block font-SpaceGrotesk text-black font-bold text-sm text-right">Condition<span class="block text-sm text-black font-SpaceGrotesk" style="font-weight:400"><br>Slightly used</span></p>
        </div>
        <button class="rounded block bg-black w-full" style="margin-top:10px; padding:16px">
        <p class="uppercase font-SpaceGrotesk font-bold text-white text-sm">add to cart</p>
        </button>
    </li>`;
}

function reduceProductsArrToMarkup(products) {
  return products.reduce(
    (markup, product) => makeProductMarkup(product) + markup,
    ""
  );
}

export default { makeProductMarkup, reduceProductsArrToMarkup };
