const searchBox = document.querySelector(".search-box");
const inputBox = document.querySelector(".input-box");

inputBox.addEventListener("focus", () => {
    searchBox.classList.add('focus');
});
inputBox.addEventListener("blur", () => {
  searchBox.classList.remove("focus");
});

const crazy_deals = [
  "https://assets.myntassets.com/w_105,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/28/d262396a-84d6-425f-ba59-e146b871dbd71703749579294-image_png_1017633215.png",

  "https://assets.myntassets.com/w_105,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/28/2c189683-40db-41ba-8823-47faf37931b01703749591462-image_png_1908527187.png",

  "https://assets.myntassets.com/w_105,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/28/1def4c08-dc93-40cc-8341-45602296a9171703749604841-image_png111673900.png",

  "https://assets.myntassets.com/w_105,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/22/baa63eb5-afda-4f3c-9661-94df0deba3861703231731061-_18965747722F53ed9a6c_c374_41a5_8789_e333447f044f-2Fimage_png509942625.png",

  "https://assets.myntassets.com/w_105,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/22/465082b9-7757-4c14-a11f-f559e73ee08b1703224055356-HL_ketch_-more_min_65.png",

  "https://assets.myntassets.com/w_105,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/22/e6c55c55-361a-41db-b126-e01f83cab4e81703224055416-Levis-_USPA_Min_50.png",

  "https://assets.myntassets.com/w_105,c_limit,fl_progressive,dpr_2.0/assets/images/2023/12/22/e6c55c55-361a-41db-b126-e01f83cab4e81703224055416-Levis-_USPA_Min_50.png",
];

const deals_list = document.querySelector(".deals-list");
for (let icon of crazy_deals) {
  deals_list.innerHTML += `<img src=${icon}>`;
  console.log(icon);
}