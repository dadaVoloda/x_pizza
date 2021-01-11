let arr = ["Монстр Мит", "Фитпицца", "Даблвэй", "Мясная", "Цыпленок Кентукки", "БигБосс Барбекю", "Суприм",
  "Пепперони", "Маргарита", "Мега Пепперони", "Сливочно грибная", "Мексиканская", "Гавайи", "Сырная"];
let rand = Math.floor(Math.random() * arr.length);
let button = document.querySelector('.btn');

document.getElementById('random').innerHTML = arr[rand];

button.addEventListener('click', function () {
  rand = Math.floor(Math.random() * arr.length);
  document.getElementById('random').innerHTML = arr[rand];
});