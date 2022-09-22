const selectPrice = document.querySelectorAll(".price");
const selectPlate = document.querySelectorAll(".plate");
const selectIngredients = document.querySelectorAll(".menu__description");

async function getMenu() {
  const response = await fetch("https://api.brchallenges.com/api/empire-burger/menu");
  const data = await response.json();

  function setPrices() {
    const prices = data.map(menu =>{
      return menu.price;
    })
    prices.forEach((price, index) => {
      const newPrice = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price);
      selectPrice[index].textContent = `${newPrice}`;
    });

  }
  setPrices(data);

  function setPlates() {
    const plates = data.map(menu => {
      return menu.plate;
    })
    plates.forEach((plates, index) => {
      selectPlate[index].textContent = `${plates}`
    })
  }
  setPlates(data);  

  function setIngredients() {
    const ingredients = data.map(menu => {
      return menu.ingredients;
    })
    ingredients.forEach((ingredients, index) =>{
      selectIngredients[index].textContent = `${ingredients}`
     })
    }
    setIngredients(data);

  }
  
function changeColor() {
  const boxColor = document.getElementById("times");
  const date = new Date();
  let weekDate = date.getDay();
  let hourDate = date.getHours();
  
  if (weekDate == 6 || weekDate == 0) {
    hourDate >= 17 && hourDate < 23
    ? boxColor.classList.add("open")
    : boxColor.classList.remove("open");
  } else {
    hourDate >= 18 && hourDate < 23
    ? boxColor.classList.add("open")
    : boxColor.classList.remove("open");
  }
}

getMenu();
changeColor();