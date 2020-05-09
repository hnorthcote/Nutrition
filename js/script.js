
// how to use grabdata for only the one selection

let storeResponse, $searchQ, theChosenOne;
let $selectApps = $('#appetizers');
let $selectEntree = $('#entree');
let $selectDessert = $('#desserts');
let $selectorEl = $(".inputs");
let $ingEl = $(".ingredients");
let $nutriEl = $(".nutrition");
$selectApps.change(function() {
   $searchQ = $selectApps.val();
   console.log($searchQ);
   $grabData ();
}) 

$searchQ = $selectEntree.change(function() {
    $searchQ = $selectEntree.val();
    $grabData();
}) 

$searchQ = $selectDessert.change(function() {
    $searchQ = $selectDessert.val();
    $grabData();
});

function $grabData() {
    console.log("$gragData starting")
const settings = {
	"async": true,
	"crossDomain": true,
    "url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=" + $searchQ,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
		"x-rapidapi-key": "fa87412ee4msh462d34ac629510cp13b460jsnac2f474cd3d2"
	}
}

 $.ajax(settings).done(function (response) {
console.log(response);
    storeResponse = response;
    console.log(storeResponse);
    let filteredRecipe = storeResponse;
    parser();
    ingredients();
    nutrition();
    
});

   function parser() { 
       console.log('parser started!!')
       let filter = $searchQ
       filteredRecipe =  storeResponse.hints.filter(function(dish) {
         return dish.food.label.includes(filter);
        });
    theChosenOne = filteredRecipe[0];
    }
   
    function ingredients(){
        ingList = theChosenOne.food.foodContentsLabel.split(";");
        ingList.forEach(element => {
        
        $ingEl.append(`<li>${element}</li>`);
            
     });
     }

     function nutrition() {
        nutriList = theChosenOne.food.nutrients;
        console.log(nutriList);
        for (let [key, value] of Object.entries(nutriList)) {
            $nutriEl.append(`<h5>${key}</h5`);
            $nutriEl.append(`<h5 class= "result">${value}</h5`);
          }
          

     }

}


