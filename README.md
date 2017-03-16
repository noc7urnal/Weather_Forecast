# 5 Day Weather Forecast App

## Task

Please build a one page application displaying a 5 day weather forecast for a location.  The data might look something like the information provided by [http://openweathermap.org/forecast5](http://openweathermap.org/forecast5) - The web framework used. Use ES6/HTML5/CSS3/JavaScript to create your solution. You are free to use whatever frameworks and such that you like.

You should:
* Give some thought to what will make for a good user experience.
* Ensure your code works on the following browsers (only needs to support the last two major versions for each browser): Safari, Chrome, Firefox and Internet Explorer
* Produce a responsive page
* Please ensure that what you do implement is good quality code using best practices and runs without any bugs, crashes or issues
* Be prepared to discuss any tradeoffs and/or compromises you make

Please upload your code to GitHub (https://github.com) - you can create a free account if needed. Please make sure the GitHub project is public and respond back to us with the URL for the project.
 
All submissions should be viewable standalone on standard browsers and can also be hosted by yourself if you like. Any environment or build steps required should be documented in a README markdown file.  Installation of global packages is discouraged.
 
Good luck and thank you for your time - we look forward to seeing your creation.

## User flow

1. User enter web page
2. User then enters a state or city into input field
3. 5 day forecast is displayed to user

## Functionality

### 1. User enter web page

* **Current Functionality**
  * Get the user's local time to determine loading day time or night time theme

* **Desired/Future Functionality**
    * Use video backgrounds to create more of an immersive experience

### 2. User then enters a state or city into input field

  * **Current Functionality**
    * Using an API call to openweathermap search for the users location using a state or city within the US
    * Create stylized input field following styling and interactions provided in prototype  
    * Bind enter key to search button
    * After user has clicked search, slide input to top of page and reduce opacity as shown in provided prototype
    
  * **Desired/Future Functionality**
    * Using an API call to openweathermap find users location by geolocation.  Also allow the user to enter any search criteria in the input field including:
      * City
      * Geographic Coordinates
      * Zip

### 3. 5 day forecast is displayed to user

  * **Current Functionality**
    * Once API call is made, fade in five day forecast in the center of the user’s viewport.
    
  * **Desired/Future Functionality**
    * Adjusting load animation for each day’s content.  Possibly staggering fade up animation from left to right.
    * Add animation when user changes location.
    * Introduce more realistic imagery for iconography and add animations to them.
    * Add additional data about within forecast
    * Create configuration to allow user to choose what data is displayed within forecast
    * On mobile consider using a carousel instead of stacking cards
