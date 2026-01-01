// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Menu Page</title>
//   <style>
//     * {
//       margin: 0;
//       padding: 0;
//       box-sizing: border-box;
//     }

//     body {
//       font-family: Arial, sans-serif;
//       background-color: #f5f5f5;
//       padding: 20px;
//     }

//     .title {
//       display: flex;
//       justify-content: center;
//       margin: 30px 0;
//       font-size: 36px;
//       color: #333;
//     }

//     .btns {
//       display: flex;
//       justify-content: center;
//       gap: 30px;
//       margin-bottom: 40px;
//     }

//     .btns button {
//       padding: 10px 25px;
//       font-size: 16px;
//       border: 2px solid #d4a574;
//       background-color: white;
//       color: #d4a574;
//       cursor: pointer;
//       border-radius: 5px;
//       transition: all 0.3s ease;
//     }

//     .btns button:hover {
//       background-color: #d4a574;
//       color: white;
//     }

//     .btns button.active {
//       background-color: #d4a574;
//       color: white;
//     }

//     .menu-container {
//       display: grid;
//       grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//       gap: 30px;
//       max-width: 1200px;
//       margin: 0 auto;
//     }

//     .card {
//       background-color: white;
//       border-radius: 10px;
//       overflow: hidden;
//       box-shadow: 0 4px 6px rgba(0,0,0,0.1);
//       transition: transform 0.3s ease;
//     }

//     .card:hover {
//       transform: translateY(-5px);
//       box-shadow: 0 6px 12px rgba(0,0,0,0.15);
//     }

//     .card img {
//       width: 100%;
//       height: 200px;
//       object-fit: cover;
//     }

//     .card-content {
//       padding: 20px;
//     }

//     .card-header {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       margin-bottom: 10px;
//     }

//     .card h3 {
//       font-size: 24px;
//       color: #333;
//     }

//     .card .price {
//       font-size: 20px;
//       color: #d4a574;
//       font-weight: bold;
//     }

//     .card p {
//       color: #666;
//       line-height: 1.6;
//       font-size: 14px;
//     }
//   </style>
// </head>
// <body>
//   <div class="title">
//     <h1>Our Menu</h1>
//   </div>

//   <div class="btns">
//     <button class="filter-btn active" data-type="all">All</button>
//     <button class="filter-btn" data-type="breakfast">Breakfast</button>
//     <button class="filter-btn" data-type="lunch">Lunch</button>
//     <button class="filter-btn" data-type="dinner">Dinner</button>
//     <button class="filter-btn" data-type="shake">Shakes</button>
//   </div>

//   <div class="menu-container" id="menuContainer"></div>

//   <script>
//     const menu = [
//       {
//         type: "breakfast",
//         ner: "Pancake",
//         price: "$15.99",
//         img: "image/morning.png",
//         text: `Ene hool tanii eruul mended tustai.
// Ta ugluu bur ugluuniihuu tsaig zaaval
// uuj baigaarai. Udriig saihan unguruuleerei. Amjilt husey`,
//       },
//       {
//         type: "lunch",
//         ner: "Delight",
//         price: "$20.99",
//         img: "image/afternoon.png",
//         text: `Ene hool tanii eruul mended tustai.
// Ta ugluu bur ugluuniihuu tsaig zaaval
// uuj baigaarai. Udriig saihan unguruuleerei. Amjilt husey`,
//       },
//       {
//         type: "dinner",
//         ner: "Double",
//         price: "$13.99",
//         img: "image/evening.png",
//         text: `Ene hool tanii eruul mended tustai.
// Ta ugluu bur ugluuniihuu tsaig zaaval
// uuj baigaarai. Udriig saihan unguruuleerei. Amjilt husey`,
//       },
//       {
//         type: "shake",
//         ner: "MilkShake",
//         price: "$6.99",
//         img: "image/desert.png",
//         text: `Ene hool tanii eruul mended tustai.
// Ta ugluu bur ugluuniihuu tsaig zaaval
// uuj baigaarai. Udriig saihan unguruuleerei. Amjilt husey`,
//       },
//     ];

//     const menuContainer = document.getElementById('menuContainer');
//     const filterBtns = document.querySelectorAll('.filter-btn');

//     // Бүх menu-г харуулах функц
//     function displayMenu(menuItems) {
//       const html = menuItems.map(item => {
//         return `
//           <div class="card">
//             <img src="${item.img}" alt="${item.ner}">
//             <div class="card-content">
//               <div class="card-header">
//                 <h3>${item.ner}</h3>
//                 <span class="price">${item.price}</span>
//               </div>
//               <p>${item.text}</p>
//             </div>
//           </div>
//         `;
//       }).join('');

//       menuContainer.innerHTML = html;
//     }

//     // Эхлээд бүх menu-г харуулах
//     displayMenu(menu);

//     // Filter товчнууд дээр дарахад
//     filterBtns.forEach(btn => {
//       btn.addEventListener('click', (e) => {
//         const type = e.target.dataset.type;

//         // Active class солих
//         filterBtns.forEach(b => b.classList.remove('active'));
//         e.target.classList.add('active');

//         // Menu шүүх
//         if (type === 'all') {
//           displayMenu(menu);
//         } else {
//           const filteredMenu = menu.filter(item => item.type === type);
//           displayMenu(filteredMenu);
//         }
//       });
//     });
//   </script>
// </body>
// </html>

// Супер 👍 Доор map, filter, reduce-ийг давтах 10 дасгал + шууд хариутай өгье.
// (Хүүхэд, анхан шатанд яг тохирно 👌)

// 📝 ДАСГАЛУУД
// 1️⃣ map

// 👉 Тоонуудыг 2-оор үржүүл

// const nums = [1, 2, 3, 4];

// 2️⃣ map

// 👉 Нэрсийг бүгдийг том үсэг болго

// const names = ["bat", "saraa", "bold"];

// 3️⃣ filter

// 👉 5-аас их тоонуудыг шүү

// const numbers = [2, 6, 1, 8, 4];

// 4️⃣ filter

// 👉 "a" үсэг орсон үгсийг үлдээ

// const words = ["cat", "dog", "ant", "cow"];

// 5️⃣ filter

// 👉 breakfast ангиллын хоолнуудыг ав

// const menu = [
//   { name: "Pancake", category: "breakfast" },
//   { name: "Burger", category: "lunch" },
// ];

// 6️⃣ reduce

// 👉 Тоонуудын нийлбэрийг ол

// const nums = [5, 3, 2];

// 7️⃣ reduce

// 👉 Нийт үгийн урт ол

// const words = ["hi", "hello", "bye"];

// 8️⃣ reduce

// 👉 Нийт үнэ ол

// const items = [
//   { name: "Pen", price: 1000 },
//   { name: "Book", price: 3000 },
// ];

// 9️⃣ map + filter

// 👉 10-аас их тоонуудыг 2-оор үржүүл

// const nums = [4, 10, 15, 2];

// 🔟 filter + reduce

// 👉 5-аас их тоонуудын нийлбэр

// const nums = [1, 6, 3, 8];

// ✅ ХАРИУУД
// 1️⃣
// nums.map(n => n * 2);
// // [2, 4, 6, 8]

// 2️⃣
// names.map(name => name.toUpperCase());
// // ["BAT", "SARAA", "BOLD"]

// 3️⃣
// numbers.filter(n => n > 5);
// // [6, 8]

// 4️⃣
// words.filter(word => word.includes("a"));
// // ["cat", "ant"]

// 5️⃣
// menu.filter(item => item.category === "breakfast");
// // [{ name: "Pancake", category: "breakfast" }]

// 6️⃣
// nums.reduce((sum, n) => sum + n, 0);
// // 10

// 7️⃣
// words.reduce((sum, word) => sum + word.length, 0);
// // 10

// 8️⃣
// items.reduce((sum, item) => sum + item.price, 0);
// // 4000

// 9️⃣
// nums
//   .filter(n => n > 10)
//   .map(n => n * 2);
// // [30]

// 🔟
// nums
//   .filter(n => n > 5)
//   .reduce((sum, n) => sum + n, 0);
// // 14

// 🧠 СУПЕР ДҮРЭМ (дахин сануулахад)

// 🔄 map → өөрчил

// 🧹 filter → шүү

// 🧺 reduce → нэг болго

// const numbers = [5, 10, 15, 20, 25];

// // Бодлого 1: Бүх тоог хэвлэ
// numbers.forEach(num => console.log(num));

// // Бодлого 2: 15-аас их тоонуудыг ол
// const big = numbers.filter(num => num > 15);

// // Бодлого 3: Сондгой индекс дэх утгуудыг хэвлэ
// numbers.forEach((num, i) => {
//   if (i % 2 === 1) console.log(num);
// });

// // Бодлого 4: Бүх утгыг 10-аар ихэсгэ (массив өөрчлөх)
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] = numbers[i] + 10;
// }
