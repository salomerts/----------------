

function searchDish() {
  let toSearch = document.getElementById("floatingInputGroup1").value;
  let formedUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${toSearch}`
  
    let productsList = [];
    let productContainer = document.getElementById("product-container");
   
    fetch(formedUrl, {
      method: "GET",
    })
      .then((response) => response.json()) 
      .then((products) => {
          productsList = [];
          productContainer.innerHTML = "";
       
        
        products.meals.forEach((product) => {
          productsList.push(product);
          console.log(product);
        });
  
        productsList.forEach((product) => {
          productContainer.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${product.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">${product.strMeal}</p>
              <p class="card-text">${product.idMeal} </p>
          </div>
          </div>
          `;
        });
      });
  }