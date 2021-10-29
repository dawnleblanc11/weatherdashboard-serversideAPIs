// TO Do: Work on Format for page
// Add color ranges for UV Index
// Assure icons tranlate in format
// Local storage of city entered
// Repopulate screen with local storage items- see work day calendar (sort by alpha or most recent)- determine max length
// Filter duplicates from storage
// READme
// Submission Memo

function myFunction() {
  var searchCity = document.getElementById("searchcity").value;
  // Add Date information with moment.js
  var today = moment();
  var currentDate = moment(today).format("ll");
  var currentp1Date = moment(today, "DD-MM-YYY").add(1, "days");
  var currentp1Datef = moment(currentp1Date).format("ll");
  var currentp2Date = moment(today, "DD-MM-YYY").add(2, "days");
  var currentp2Datef = moment(currentp2Date).format("ll");
  var currentp3Date = moment(today, "DD-MM-YYY").add(3, "days");
  var currentp3Datef = moment(currentp3Date).format("ll");
  var currentp4Date = moment(today, "DD-MM-YYY").add(4, "days");
  var currentp4Datef = moment(currentp4Date).format("ll");
  var currentp5Date = moment(today, "DD-MM-YYY").add(5, "days");
  var currentp5Datef = moment(currentp5Date).format("ll");

  fetch(
    //API to translate the city entered into latitude and longitude
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
      searchCity +
      "&appid=f1e5223681c99ba8e38c2214f7c97f43"
  )
    .then(function (geoResponse) {
      return geoResponse.json();
    })
    .then(function (geoResponse) {
      //creating variables to hold the geo response to searchCity
      var cityLatitude = geoResponse[0].lat;
      var cityLongitude = geoResponse[0].lon;
      console.log(cityLatitude);
      console.log(cityLongitude);
      //API to gather all the current and 4 day forecast based on latitude and logitude returned
      return fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          cityLatitude +
          "&lon=" +
          cityLongitude +
          "&units=imperial&exclude=minutely,hourly,alerts&appid=f1e5223681c99ba8e38c2214f7c97f43"
      );
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      //verified values all correct
      console.log(currentDate);
      // include date from currentDate
      console.log(response.daily[0].temp.day);
      //add dgree symbol and F to the end- no rounding needed
      console.log(response.daily[0].wind_speed);
      //wind speed MPH
      console.log(response.daily[0].humidity);
      //round to no decimals and % symbol to the end
      console.log(response.daily[0].uvi);
      //  Based on UV Index scale CDC - 0-2 minimal- green, 3-5 low- yellow, 6-7 moderate- orange, 8-10 high- red, >11 extreme- purple
      //  https://www.aimatmelanoma.org/melanoma-101/prevention/what-is-ultraviolet-uv-radiation/- SRC for color variations
      console.log(currentp1Datef);
      console.log(response.daily[1].weather[0].icon);
      // http://api.openweathermap.org/img/w/*.png replace * with code of the icon
      console.log(response.daily[1].temp.day);
      console.log(response.daily[1].wind_speed);
      console.log(response.daily[1].humidity);
      console.log(currentp2Datef);
      console.log(response.daily[2].weather[0].icon);
      console.log(response.daily[2].temp.day); 
      console.log(response.daily[2].wind_speed);
      console.log(response.daily[2].humidity);
      console.log(currentp3Datef);
      console.log(response.daily[3].weather[0].icon);
      console.log(response.daily[3].temp.day);
      console.log(response.daily[3].wind_speed);
      console.log(response.daily[3].humidity);
      console.log(currentp4Datef);
      console.log(response.daily[4].weather[0].icon);
      console.log(response.daily[4].temp.day);
      console.log(response.daily[4].wind_speed);
      console.log(response.daily[4].humidity);
      console.log(currentp5Datef);
      console.log(response.daily[4].weather[0].icon);
      console.log(response.daily[4].temp.day);
      console.log(response.daily[4].wind_speed);
      console.log(response.daily[4].humidity);

      // var responseContainerEl = document.querySelector('#response-container');
      // responseContainerEl.innerHTML = '';
      // var gifImg = document.createElement('img');
      // gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
      // responseContainerEl.appendChild(gifImg);
    });
}
