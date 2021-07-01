const restaurant = ["WESTY Zöld FUTÁR", "WESTY Ebéd menü", "WESTY Burger", "Chili's Burger", "Barney's American Diner", "HÚSEVŐ Bistro & Steak bar", "Peti's Döner Kebap & Sandwich", "Kebap Ház", "Fei Fei Kínai Ételbár", "Padthai Wokbar", "McDonald's®", "BURGER KING®", "KFC", "Dolce Vita", "Fatányéros Étterem"];
const getRandomNumber = (max) => Math.floor(Math.random() * max);
const getRandomName = () => 
  `${restaurant[getRandomNumber(restaurant.length)]}`;
const setRandomName = () => {
  document.getElementById('randomFood').innerText = getRandomName();
}
document.getElementById('generate')
  .addEventListener('click', setRandomName);
setRandomName();
