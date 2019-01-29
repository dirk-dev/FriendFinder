# FriendFinder

## Summary
The `FriendFinder` app takes in user input from an web page in the form of an object containing an array and runs logic on it to compare the user values with the prepopulated `friends.json` file of sample friends. The logic iterates through the user object and the sample friends file to compare the scores for each question. 

The closest match (the smallest difference between user & sample file entry for each question) indicates the match between user and potential friend.

## Technical Details
* A `server.js` file was used as the entry point, and was run in `Node` on the local machine for development & testing. 
* Two HTML files were coded, `home.html` for the root path (the user entry point) and `survey.html` for the survey questions and JavaScript logic. 
* Two additional JavaScript file were coded to provide routes. 
    * `apiRoutes.js` contains the GET and POST functions to access `friends.json`, as well as the logic to compare user input with the friends file. This file also returned the best match to the user as JSON. Two nested `for loops` were used to iterate through the nested  arrays and compare the user input with `friends.json`.
    * `htmlRoutes.js` contains the GET functions for the root path and the `survey.html` path.
    * `express.static()` used to allow app to access static content (CSS stylesheet).

## Technologies used:
* Express npm package - https://www.npmjs.com/package/express  
* Google Fonts - https://fonts.google.com/
* HTML 5
* CSS 3
* Heroku
* JavaScript
* jQuery - http://jquery.com/
* Node.js - https://nodejs.org
* Twitter Bootstrap CSS framework - http://getbootstrap.com/


