function myFunction() {
    var searchCity = document.getElementById('searchcity').value;
    var ratingtype = document.getElementById('priorcity').value;
    // Create a variable to hold the value of rating
    
    fetch(
      //API for the current weather in the current state
      'https://api.openweathermap.org/data/2.5/onecall?lat='+
      25.7617+
      '&lon='+
      80.1918+
      '&exclude=minutely,hourly,alerts&appid=f1e5223681c99ba8e38c2214f7c97f43'
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
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
        console.log(response.current.weather[0].icon)
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
        console.log(response.daily[0].weather[0].icon)
        //how to translate to photo
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
        console.log(response.daily[1].weather[0].icon)
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
        console.log(response.daily[2].weather[0].icon)
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
        console.log(response.daily[3].weather[0].icon)
        //how to translate to photo
        //how to translate to photo
       // var responseContainerEl = document.querySelector('#response-container');
       // responseContainerEl.innerHTML = '';
       // var gifImg = document.createElement('img');
       // gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
       // responseContainerEl.appendChild(gifImg);
      })}