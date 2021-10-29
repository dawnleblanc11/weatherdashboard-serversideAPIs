function myFunction() {
  var searchCity = document.getElementById("searchcity").value;
  // Add Date information with moment.js
  var currentDate = moment().format('ll');
  var currentp1Date = moment().add(1,'days').calendar();
  var currentp2Date = moment().add(2,'days').calendar();
  var currentp3Date = moment().add(3,'days').calendar();
  var currentp4Date = moment().add(4,'days').calendar();
  console.log(currentDate);
  console.log(currentp1Date);
  console.log(currentp2Date);
  console.log(currentp3Date);
  console.log(currentp4Date);

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
      )
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      //verified values all correct
      console.log(response.current.dt);
      // how to translate date number to current date Moment.js?
      console.log(response.current.temp);
      //what value is the temp using ?
      console.log(response.current.humidity);
      //how best to describe the humidity
      console.log(response.current.uvi);
      //use colors to indicate ranges
      console.log(response.current.wind_speed);
      //is wind speed k/hr or miles/hr
      console.log(response.current.weather[0].icon);
      //how to translate to photo
      console.log(response.daily[0].dt);
      // how to translate date number to current date Moment.js?
      console.log(response.daily[0].temp.day);
      //what value is the temp using ?
      console.log(response.daily[0].humidity);
      //how best to describe the humidity
      console.log(response.daily[0].wind_speed);
      //is wind speed k/hr or miles/hr
      console.log(response.daily[0].uvi);
      //use colors to indicate ranges
      console.log(response.daily[0].weather[0].icon);
      // http://api.openweathermap.org/img/w/*.png replace * with code of the icon
      console.log(response.daily[1].dt);
      // how to translate date number to current date Moment.js?
      console.log(response.daily[1].temp.day);
      //what value is the temp using ?
      console.log(response.daily[1].humidity);
      //how best to describe the humidity
      console.log(response.daily[1].wind_speed);
      //is wind speed k/hr or miles/hr
      console.log(response.daily[1].uvi);
      //use colors to indicate ranges
      console.log(response.daily[1].weather[0].icon);
      //how to translate to photo
      console.log(response.daily[2].dt);
      // how to translate date number to current date Moment.js?
      console.log(response.daily[2].temp.day);
      //what value is the temp using ?
      console.log(response.daily[2].humidity);
      //how best to describe the humidity
      console.log(response.daily[2].wind_speed);
      //is wind speed k/hr or miles/hr
      console.log(response.daily[2].uvi);
      //use colors to indicate ranges
      console.log(response.daily[2].weather[0].icon);
      //how to translate to photo
      console.log(response.daily[3].dt);
      // how to translate date number to current date Moment.js?
      console.log(response.daily[3].temp.day);
      //what value is the temp using ?
      console.log(response.daily[3].humidity);
      //how best to describe the humidity
      console.log(response.daily[3].wind_speed);
      //is wind speed k/hr or miles/hr
      console.log(response.daily[3].uvi);
      //use colors to indicate ranges
      console.log(response.daily[3].weather[0].icon);
      //how to translate to photo
      //how to translate to photo
      // var responseContainerEl = document.querySelector('#response-container');
      // responseContainerEl.innerHTML = '';
      // var gifImg = document.createElement('img');
      // gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
      // responseContainerEl.appendChild(gifImg);
    });
}
