const restaurant = ["Westy", "PadThai", "Peti's Döner", "Kebap Ház", "Fei-Fei Kínai", "Chili's Burger", "Arizona", "Bolero"];
const getRandomNumber = (max) => Math.floor(Math.random() * max);
const getRandomName = () => 
  `${restaurant[getRandomNumber(restaurant.length)]}`;
const setRandomName = () => {
  document.getElementById('randomFood').innerText = getRandomName();
}
document.getElementById('generate')
  .addEventListener('click', setRandomName);
setRandomName();
