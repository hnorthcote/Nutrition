Main Idea:

The main idea is to bring up 2 of my unique characteristics, latin culture and cooking experience.

One of my biggest hobbies is to cook, I learned cooking brings joy to people, gives you freedom on whatever you may like to eat and most importantly allows your creativity to bring you to create things that in some cases may be the best dishes you ever tasted. 

I am originally from Peru, one of the gastronomic capitals of the world, combines many flavors from many cultures, which makes it unique and delicious.

The website will have a pre-built set of options, one drop down for appetizers, one for main courses and one for desserts
When selected the site will leave only the footer and create a new set of objects including the ingredients, recipe, photo of the dish and a video.

I will ideally also include a button to search for the local markets upon the location provided by the browser. This would be a bonus part.



Steps to take:
Find if the recipe puppy API can handle the recipe, ingredients, photos and video. I got other back up API’s in case it can do only one of them.
As a second backup I can hardcode the photos and videos to each selection
I’ll create my own search objects for each dish with their relevant arrays, this will force me to only have 12 dishes to start with, including 4 appetizers and  5 main dishes and 3 deserts. If time allows I’ll increase the menu.
The site must be built using most of the technologies learned, such as vanilla JS, jQuery, CSS, HTML and AJAX to create the page.





Wireframing:
The page has 2 stages, a search presentation and a recipe presentation.
Here are both of this:
Stage one:
https://www.lucidchart.com/publicSegments/view/c2cffc41-340e-4a7e-a1e7-c48043151ef8/image.png


Stage two:

https://www.lucidchart.com/publicSegments/view/47fbcf81-4714-474e-98af-8c5d0351be84/image.png


Pseudocode:
-Create constants for search arrays (drop down on HTML) for the food items
-Create constant for background image
-Create variables for  ingredients, recipe, video and photo elements for HTML
-If video and photo are not an option to fulfill via API, create the hardcoded links as key of each food item(transforming food items arrays into objects).
-create event listeners for each food item on the dropdown menu
-create function for event listener when clicked concatenate the search command for the API
-if needed create function to tie the hardcoded links to the photo and video elements
-create reset button function

