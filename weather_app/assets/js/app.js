(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"../components/App":2}],2:[function(require,module,exports){
'use strict';

// Adds classes for different states of input for styling changes

var $input = $('.input');

$input.on('focus', function () {
		$(this).parent().addClass('focused').addClass('active');
});

$input.on('blur', function () {
		if (this.value == '') {
				$(this).parent().removeClass('active').removeClass('focused');
				$('body').removeClass('search-active');
		} else if (this.value !== '') {
				$(this).parent().removeClass('focused');
		} else {
				$(this).parent().addClass('active');
		}
});

// Binds enter key to trigger search

$input.keypress(function (e) {
		if (e.which == 13) {
				$('#input__search').click();
				return false;
		}
});

// Find out if it is day or night and add class to body to adjust styling

var currentTime = new Date().getHours();

if (7 <= currentTime && currentTime < 20) {
		if (document.body) {
				$('body').removeClass('nighttime').addClass('daytime');
		}
} else {
		if (document.body) {
				$('body').removeClass('daytime').addClass('nighttime');
		}
}

// Initialize Weather App when #input__search is clicked

var weatherApp = {
		init: function init() {
				$('#input__search').click(function () {
						$('body').addClass('search-active');
						return weatherApp.callAPI();
				});
		},

		callAPI: function callAPI() {
				$.ajax({
						url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + $("#state").val() + "," + $("#country").val() + "&APPID=49122cdefa284b6457b78069f190b45c" + "&units=imperial",
						type: 'GET',
						dataType: 'jsonp',
						success: function success(data) {
								var wrapper = $("#forecast__wrapper");
								wrapper.empty();
								wrapper.append("<div class='location'> <p>5 Day Forecast For " + data.city.name + ", " + data.city.country + "</p></div>");
								var forecast = data.list;
								var i = 0;

								// Only loop through the first 5 list items to get 5 day forecast

								for (var i = 0; i < Math.min(5, forecast.length); i++) {
										wrapper.append(weatherApp.forecastItem(forecast[i]));
								}

								// Get current day and then loop through array to get next 4 days

								var weekday = new Array(7);
								weekday[0] = "Sunday";
								weekday[1] = "Monday";
								weekday[2] = "Tuesday";
								weekday[3] = "Wednesday";
								weekday[4] = "Thursday";
								weekday[5] = "Friday";
								weekday[6] = "Saturday";

								function setDate() {
										var elements = document.getElementsByClassName("day");
										var day = new Date();
										var today = day.getDay();
										for (var i = 0; i < elements.length; i++) {
												elements[i].innerHTML = weekday[(today + i) % 7];
										}
								}

								setDate();
						},
						error: function error() {
								alert('An error has occured.  Please be sure you have entered a valid State.');
						}
				});
		},

		//	Creates each day in 5 day forecast using weatherApp data
		forecastItem: function forecastItem(data) {
				return "<div class='forecast__item'>" + "<div class='day'></div>" + "<div class='icon wi wi-owm-" + data.weather[0].id + "'></div>" + "<div class='temp__high'>" + data.temp.max.toFixed(0) + " &deg;F</p></div>" + "<div class='temp__low'>" + data.temp.min.toFixed(0) + " &deg;F</p></div>" + "<div class='description'>" + data.weather[0].description + "</p></div>" + "<div class='additional__data'> <p>Wind Speed: " + data.speed + " mph</p></div>" + "<div class='additional__data'> <p>Humidity: " + data.humidity + "%</p></div>" + "</div>";
		}
};

weatherApp.init();

},{}]},{},[1])

//# sourceMappingURL=app.js.map
