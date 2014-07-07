#googleMapsModule

This module is to be used in multiple angular applications which will allow the integration of google maps into their apps.

For getting a static map with a click event that redirects, I used and modified the adaptive-googlemaps directive. The directive is available here - https://github.com/angular-adaptive/adaptive-googlemaps

#Usage

Include the following in the app's html file.
```html
<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
<script src="bower_components/angular-adaptive/adaptive-googlemaps.js"></script>
```

Be sure to add ```'adaptive.googlemaps'``` as a dependency in your app.js. Refer to the comments app.js, controllers.js, and adaptive-googlemaps.js for more info.

#How I tested it
I used brackets to test the web browser, phonegap developer to test iOS devices (specifically iOS 7.1.1), and phonegap developer with genymotion to test android devices.

#What to add
- Checking to see if the redirect works on apple devices iOS 5 and below. 
- Potentially adding support for devices other than android/apple.
- The other part of the module which is using AngularGM and not adaptive-googlemaps (uploading soon).
- Reading data from the database.
- Karma testing (or any other tests)
- More fun stuff and other things that I cannot think of right now. :)
