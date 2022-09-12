//load meal from api
const loadMeals = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
}
//display meal to UI
const displayMeals = (meals) => {
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerHTML = "";
  meals.forEach((meal) => {
    // console.log(meal)
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
    <div onclick="loadMealDetail(${meal.idMeal})" class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
    </div>
  </div>
    `;
    mealsContainer.appendChild(mealDiv);
  })
}
//search food by button
const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadMeals(searchText);
  searchField.value = "";
}
//load meal details from api
const loadMealDetail = (idMeal) => {
  // console.log('serching',idMeal)
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  // console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals[0]));
}
//display meal to UI
const displayMealDetails = meal => {
    const detailContainer = document.getElementById("detail-container");
    detailContainer.innerHTML = '';
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("card");
    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    detailContainer.appendChild(mealDiv);
}
loadMeals("");
