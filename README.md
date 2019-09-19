## Recipe Finder

Check our project out by the [Link](https://facn7.github.io/week2-akn-api/)

### `about the project`

* Week 2 Founders and Coders group project
* Topic: API, software architecture & design
* API used: [www.food2fork.com](https://www.food2fork.com)
* There is a limit of 50 requests per day (!)
* Functionality: a simple search through the recipes base. Enter a key word and press search!
* Mobile-first design
* Code structure benchmarks: Avoiding repetitions, using correct scope and abstractions

### `user journey`

![Schema](https://i.ibb.co/D7zgGMj/Whats-App-Image-2019-09-18-at-19-27-54.jpg)

### `Our stretch goals are:`

![StretchGoals](https://media.giphy.com/media/QNHURlakvZmO4/giphy.gif)

* To add navigation buttons
* To launch search on pressing _Enter_

### `Organizational process`

![Fight](https://media.giphy.com/media/NsGxD9ZtEGLLuGrOQp/giphy.gif)

* We made a sketch of the page
* We drew a user journey (please see above)
* We pair programmed to make a basic setup and a HTML structure
* Work division: Natalia - CSS, Karem & Ariel - API functions (parsing and results display)
* Had to change API because were unable to parse a JSON object from an initial one
* Pair programming on fixing bugs

### `Interaction with API`

* Link is modifies according to the user input
* Access keys are used. Daily limit is 50 requests per key :(
* Fetching and parsind and object using _fetch()_
* Access an array of recipes and printing certain properties on a page

### `Useful stuff`

We did have a problem with CORS
A solution which worked for us: _Allow CORS: Access-Control-Allow-Origin_ Chrome extension
