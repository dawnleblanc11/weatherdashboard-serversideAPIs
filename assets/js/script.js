// TO Do: Work on Format for page
// make color block smaller for background color//test other colors work
// Fix bootstrap formatting
// make all weather cards dynamic and loop through to appear- shorter code
// Filter duplicates from storage
// how to handle cities added during session
// Create an error message for not valid city modal?
// READme- ADD Photos and fix details
// Submission Memo

//  if (citySearchList == null) {
//    citySearchList = {};
//  };

//  $("#").hide(currentweatherbox);
//  $("#forecast-weather").hide(forecast-weather);

//  when page is loaded, list all prior cities in local storage and allows then to be clicked again to view weather
$(document).ready(function () {
  var citySearchListparsed = JSON.parse(
    window.localStorage.getItem("storedCities")
  );
  for (i = 0; i < citySearchListparsed.length; i++) {
    $("#city-list")
      .append("<li>" + citySearchListparsed[i] + "</li>")
      .on("click", "li", function () {
        $(this).css("background", "#d9f531");
        var index = $("li").index(this);
        populateweather(citySearchListparsed[index]);
      });
  }
});

//var citySearchList = [];

//function createCitylist(anycity) {
//  citySearchList.push(anycity);
//  localStorage.setItem("citySearchList", JSON.stringify(citySearchList));
//}

//$("city-list").empty();
//  for (i = 0; i < citySearchListparsed.length; i++) {
//$("city-list").append('<li>'+ val(citySearchListparsed[i]+ '<li>'));
//  );
//  for (i = 0; i < citySearchListparsed.length; i++) {
//    $("city-list").val(citySearchListparsed[i]);
//  }
//};

// function to populate the weather
function populateweather(anycity) {
  fetch(
    //API to translate the city entered into latitude and longitude
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
      anycity +
      "&appid=f1e5223681c99ba8e38c2214f7c97f43"
  )
    .then(function (geoResponse) {
      console.log(geoResponse);
      return geoResponse.json();
    })
    .then(function (geoResponse) {
      if (geoResponse[0] === undefined) {
        //return getCity();
        //can also try not === to process fetch
        console.log("error");
      }
      //creating variables to hold the geo response to searchCity
      var cityLatitude = geoResponse[0].lat;
      var cityLongitude = geoResponse[0].lon;

      //API to gather all the current and 5 day forecast based on latitude and logitude returned
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

      //start Current Weather Section
      var today = moment();
      var currentDate = moment(today).format("ll");
      //date from moment.js
      var currentweathericon = response.daily[0].weather[0].icon;
      var currentweathericonURL =
        "http://api.openweathermap.org/img/w/" + currentweathericon + ".png";
      // http://api.openweathermap.org/img/w/*.png replace * with code of the icon
      $("#currentcitydateicon").html(
        anycity +
          "  " +
          currentDate +
          "  " +
          "<img id='wicon' src=" +
          currentweathericonURL +
          " alt='WeatherIcon'>"
      );
      var currenttemp = response.daily[0].temp.day;
      $("#temp").text("Temp: " + currenttemp + "°F");
      //add dgree symbol and F to the end- no rounding needed
      var currentwindspeed = response.daily[0].wind_speed;
      $("#wind").text("Wind: " + currentwindspeed + " MPH");
      //wind speed MPH
      var currenthumidity = response.daily[0].humidity.toPrecision(2);
      $("#humidity").text("Humidity: " + currenthumidity + "%");
      //round to no decimals and % symbol to the end
      var currentuvindex = response.daily[0].uvi;
      $("#uvindex").text("UV Index: " + currentuvindex);

      if (currentuvindex < 3) {
        $("#uvindex").css("background-color", "green");
      } else if (currentuvindex >= 3 || currentuvindex < 6) {
        $("#uvindex").css("background-color", "yellow");
      } else if (currentuvindex >= 6 || currentuvindex < 8) {
        $("#uvindex").css("background-color", "orange");
      } else if (currentuvindex >= 8 || currentuvindex < 11) {
        $("#uvindex").css("background-color", "red");
      } else {
        $("#uvindex").css("background-color", "purple");
      }

      //  ToDo: Set Background color
      //  Based on UV Index scale CDC - 0-2 minimal- green, 3-5 low- yellow, 6-7 moderate- orange, 8-10 high- red, >11 extreme- purple
      //  https://www.aimatmelanoma.org/melanoma-101/prevention/what-is-ultraviolet-uv-radiation/- SRC for color variations
      //end Current Weather Section
      //TO DO: Add Section Header Here
      //start Day Plus 1 Section
      var currentp1Date = moment(today, "DD-MM-YYY").add(1, "days");
      var currentp1Datef = moment(currentp1Date).format("ll");
      //date from moment.js
      var p1weathericon = response.daily[1].weather[0].icon;
      var p1weathericonURL =
        "http://api.openweathermap.org/img/w/" + p1weathericon + ".png";
      // http://api.openweathermap.org/img/w/*.png replace * with code of the icon
      $("#p1date").html(
        currentp1Datef +
          "  " +
          "<img id='wicon' src=" +
          p1weathericonURL +
          " alt='WeatherIcon'>"
      );
      var p1temp = response.daily[1].temp.day;
      $("#p1temp").text("Temp: " + p1temp + "°F");
      //add dgree symbol and F to the end- no rounding needed
      var p1windspeed = response.daily[1].wind_speed;
      $("#p1wind").text("Wind: " + p1windspeed + " MPH");
      //wind speed MPH
      var p1humidity = response.daily[1].humidity.toPrecision(2);
      $("#p1humidity").text("Humidity: " + p1humidity + "%");
      //round to no decimals and % symbol to the end
      // end Day Plus 1 Section
      // start Day Plus 2 Section
      var currentp2Date = moment(today, "DD-MM-YYY").add(2, "days");
      var currentp2Datef = moment(currentp2Date).format("ll");
      //date from moment.js
      var p2weathericon = response.daily[2].weather[0].icon;
      var p2weathericonURL =
        "http://api.openweathermap.org/img/w/" + p2weathericon + ".png";
      // http://api.openweathermap.org/img/w/*.png replace * with code of the icon
      $("#p2date").html(
        currentp2Datef +
          "  " +
          "<img id='wicon' src=" +
          p2weathericonURL +
          " alt='WeatherIcon'>"
      );
      var p2temp = response.daily[2].temp.day;
      $("#p2temp").text("Temp: " + p2temp + "°F");
      //add dgree symbol and F to the end- no rounding needed
      var p2windspeed = response.daily[2].wind_speed;
      $("#p2wind").text("Wind: " + p2windspeed + " MPH");
      //wind speed MPH
      var p2humidity = response.daily[2].humidity.toPrecision(2);
      $("#p2humidity").text("Humidity: " + p2humidity + "%");
      //round to no decimals and % symbol to the end
      //end Day Plus 2 Section
      //start Day Plus 3 Section
      var currentp3Date = moment(today, "DD-MM-YYY").add(3, "days");
      var currentp3Datef = moment(currentp3Date).format("ll");
      var p3weathericon = response.daily[3].weather[0].icon;
      var p3weathericonURL =
        "http://api.openweathermap.org/img/w/" + p3weathericon + ".png";
      // http://api.openweathermap.org/img/w/*.png replace * with code of the icon
      $("#p3date").html(
        currentp3Datef +
          "  " +
          "<img id='wicon' src=" +
          p3weathericonURL +
          " alt='WeatherIcon'>"
      );
      var p3temp = response.daily[3].temp.day;
      $("#p3temp").text("Temp: " + p3temp + "°F");
      //add dgree symbol and F to the end- no rounding needed
      var p3windspeed = response.daily[3].wind_speed;
      $("#p3wind").text("Wind: " + p3windspeed + " MPH");
      //wind speed MPH
      var p3humidity = response.daily[3].humidity.toPrecision(2);
      $("#p3humidity").text("Humidity: " + p3humidity + "%");
      //round to no decimals and % symbol to the end
      //end Day Plus 3 Section
      //start Day Plus 4 Section
      var currentp4Date = moment(today, "DD-MM-YYY").add(4, "days");
      var currentp4Datef = moment(currentp4Date).format("ll");
      var p4weathericon = response.daily[4].weather[0].icon;
      var p4weathericonURL =
        "http://api.openweathermap.org/img/w/" + p4weathericon + ".png";
      // http://api.openweathermap.org/img/w/*.png replace * with code of the icon
      $("#p4date").html(
        currentp4Datef +
          "  " +
          "<img id='wicon' src=" +
          p4weathericonURL +
          " alt='WeatherIcon'>"
      );
      var p4temp = response.daily[4].temp.day;
      $("#p4temp").text("Temp: " + p4temp + "°F");
      //add dgree symbol and F to the end- no rounding needed
      var p4windspeed = response.daily[4].wind_speed;
      $("#p4wind").text("Wind: " + p4windspeed + " MPH");
      //wind speed MPH
      var p4humidity = response.daily[4].humidity.toPrecision(2);
      $("#p4humidity").text("Humidity: " + p4humidity + "%");
      //round to no decimals and % symbol to the end
      // end Day Plus 4 section
      // start Day Plus 5 Section
      var currentp5Date = moment(today, "DD-MM-YYY").add(5, "days");
      var currentp5Datef = moment(currentp5Date).format("ll");
      var p5weathericon = response.daily[5].weather[0].icon;
      var p5weathericonURL =
        "http://api.openweathermap.org/img/w/" + p5weathericon + ".png";
      // http://api.openweathermap.org/img/w/*.png replace * with code of the icon
      $("#p5date").html(
        currentp5Datef +
          "  " +
          "<img id='wicon' src=" +
          p5weathericonURL +
          " alt='WeatherIcon'>"
      );
      var p5temp = response.daily[5].temp.day;
      $("#p5temp").text("Temp: " + p5temp + "°F");
      //add dgree symbol and F to the end- no rounding needed
      var p5windspeed = response.daily[5].wind_speed;
      $("#p5wind").text("Wind: " + p5windspeed + " MPH");
      //wind speed MPH
      var p5humidity = response.daily[5].humidity.toPrecision(2);
      $("#p5humidity").text("Humidity: " + p5humidity + "%");
      //round to no decimals and % symbol to the end
      // end Day Plus 5 Section
    });
}

// function to recognize a new city is entered an populates the weather
function getCity() {
  var searchCity = document.getElementById("city").value;
  if (localStorage.getItem("storedCities") == null) {
    localStorage.setItem("storedCities", "[]");
  }
  var citySearchList = JSON.parse(localStorage.getItem("storedCities"));
  //removes duplicates before sendign to storage
  if (citySearchList.indexOf(searchCity)=== -1) {
    citySearchList.push(searchCity);
  };
  localStorage.setItem("storedCities", JSON.stringify(citySearchList));
  $("#city-list")
    .append("<li>" + searchCity + "</li>")
    .on("click", "li", function () {
      $(this).css("background", "#d9f531");
      populateweather(searchCity);
    });
  populateweather(searchCity);
  // buildmenu();
}
//createCitylist();

//localStorage.setItem("citySearchList", JSON.stringify(citySearchList));/
