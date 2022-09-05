const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
const result = document.querySelector("#result");
const cont = document.querySelector(".container");


searchBtn.addEventListener("click", () => {
  let country = searchBar.value.split(" ").join("");
  let url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].capital[0]);
      console.log(data[0].flags.svg);
      console.log(data[0].name.common);
      console.log(data[0].population);
      console.log(data[0].continents[0]);
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      console.log(Object.values(data[0].languages).toString().split(",").join(", "));
      result.innerHTML = `
        <img src='${data[0].flags.svg}' class="flag-img">
        <h2 class="flag-name">${data[0].name.common}</h2>
        <div class="wrap">
          <h3 class="wrap-capital con">Capital: <span class="">${data[0].capital[0]}</span></h3>
          <h3 class="wrap-continent con">Continent: <span class="">${data[0].continents[0]}</span></h3>
          <h3 class="wrap-pop con">Population: <span class="">${data[0].population}</span></h3>
          <h3 class="wrap-curr con">Currency: <span class="">${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span></h3>
          <h3 class="wrap-lang con">Common Languages: <span class="">${Object.values(data[0].languages).toString().split(",").join(", ")}</span></h3>

        </div>
      `;
    });
});
