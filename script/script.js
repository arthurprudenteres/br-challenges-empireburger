function menu() {
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

function data(){
  const selectFeedback = document.querySelectorAll(".feedback");  
  const selectName = document.querySelectorAll(".person-name");
  const selectAge = document.querySelectorAll(".person-age");
  const selectImage = document.querySelectorAll(".person-img");
  
  fetch('https://api.brchallenges.com/api/empire-burger/testimonials')
  .then(response => response.json())
  .then(data => {
  
      
    const feedbacks = data.map(info => {
      return info.testimonial;
    })
  
    const name = data.map(info => {
      return info.name;
    })
    
    const age = data.map(info => {
      return info.age;
    })
  
    const image = data.map(info => {
      return info.image;
    })
  
    function setData(data, selector) {
      data.forEach((info, index) => {
        selector[index].textContent = `${info}`
      })
    }
  
    function Image(data, selector) {
      data.forEach((plates, index) => {
        selector[index].innerHTML = `<img src=${plates}>`
      })
    }
  
    Image(image, selectImage);
    setData(feedbacks, selectFeedback);
    setData(name, selectName);
    setData(age, selectAge)
  })
}

new Glider(document.querySelector('.glider'), {
  slidesToShow: 4,
  slidesToScroll: 2,
  draggable: true,
  dragVelocity: 0.8,
  duration: 3,
  dots: '.carousel-bars',
},
);

data();
menu();
changeColor();