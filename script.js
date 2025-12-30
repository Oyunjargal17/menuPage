const menu = [
  {
    type: "breakfast",
    ner: "Pancake",
    price: "$15.99",
    img: "image/morning.png",
    text: `Ene hool tanii eruul mended tustai. 
Ta ugluu bur ugluuniihuu tsaig zaawal
uuj baigaarai. Udriig saihan unguruuleerei. Amjilt husey`,
  },
  {
    type: "lunch",
    ner: "Deligth",
    price: "$20.99",
    img: "image/afternoon.png",
    text: `Ene hool tanii eruul mended tustai. 
Ta ugluu bur ugluuniihuu tsaig zaawal
uuj baigaarai. Udriig saihan unguruuleerei. Amjilt husey`,
  },
  {
    type: "dinner",
    ner: "Double",
    price: "$13.99",
    img: "image/evening.png",
    text: `Ene hool tanii eruul mended tustai. 
Ta ugluu bur ugluuniihuu tsaig zaawal
uuj baigaarai. Udriig saihan unguruuleerei. Amjilt husey`,
  },
  {
    type: "shake",
    ner: "MilkShake",
    price: "$6.99",
    img: "image/desert.png",
    text: `Ene hool tanii eruul mended tustai. 
Ta ugluu bur ugluuniihuu tsaig zaawal
uuj baigaarai. Udriig saihan unguruuleerei. Amjilt husey`,
  },
];
const menu_container = document.querySelector(".menu-container");
const filterBtns = document.querySelectorAll(".filter-btn");

function displayMenu(menuItems) {
  const html = menuItems
    .map((item) => {
      return `<div class="card">
  <img src="${item.img}" alt="$item.ner">
  <div class="card-content">
    <div class="card-header">
      <h3>${item.ner}</h3>
      <span class="price">${item.price}</span>
    </div>
    <p>${item.text}</p>
  </div>
</div>`;
    })
    .join("");
  menu_container.innerHTML = html;
}
displayMenu(menu);
