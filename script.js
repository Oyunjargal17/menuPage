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

const menuContainer = document.querySelector(".menuContainer");
const all = document.querySelector(".all");
const breakfast = document.querySelector(".breakfast");
const lunch = document.querySelector(".lunch");
const shake = document.querySelector(".shake");
const dinner = document.querySelector(".dinner");

all.addEventListener("click", () => {
  displayMenu(menu);
});
breakfast.addEventListener("click", () => {
  const breakfastMenu = menu.filter((item) => item.type === "breakfast");
  displayMenu(breakfastMenu);
});
lunch.addEventListener("click", () => {
  const lunchMenu = menu.filter((item) => item.type === "lunch");
  displayMenu(lunchMenu);
});
shake.addEventListener("click", () => {
  const shakeMenu = menu.filter((item) => item.type === "shake");
  displayMenu(shakeMenu);
});
dinner.addEventListener("click", () => {
  const dinnerMenu = menu.filter((item) => item.type === "dinner");
  displayMenu(dinnerMenu);
});

function displayMenu(itemMenu) {
  const html = itemMenu
    .map((item) => {
      return `<div class="card_style">
      <div><img src="${item.img}" alt="" /></div>
      <div class="totals">
        <h3>${item.ner}</h3>
        <p>${item.price}</p>
      </div>
      <div>
          <p>
            ${item.text}
          </p>
      </div>
    </div>`;
    })
    .join("");
  menuContainer.innerHTML = html;
}
displayMenu(menu);
