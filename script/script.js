const selectPrice = document.querySelectorAll(".price");
const selectPlate = document.querySelectorAll(".plate");
const selectIngredients = document.querySelectorAll(".menu__description");

fetch('https://api.brchallenges.com/api/empire-burger/menu')
.then(response => response.json())
.then(data => {
    
  const formatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    });
    
  const prices = data.map(menu => {
    return menu.price;
  })
  const newPrice = prices.map(price => {
    return formatted.format(price)
  })

  const plates = data.map(menu => {
    return menu.plate;
  })
  
  const ingredients = data.map(menu => {
    return menu.ingredients;
  })

  function setData(data, selector) {
    data.forEach((plates, index) => {
      selector[index].textContent = `${plates}`
    })
  }

  setData(newPrice, selectPrice);
  setData(plates, selectPlate);
  setData(ingredients, selectIngredients)
})
  
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

changeColor();