//Setting up DOM
const $yearEl = $('#year');
let $stage1 = $(".stage1")
$stage1Content = 
`<h1>Peruvian Food Nutrition</h1>
<div class="background">
<form class="inputs">
<div class = "flexContainer">
    <h2>APPETIZERS</h2>
    <select id= "appetizers">
    <option >Please select an appetizer</option>   
    <option value = "Peruvian Ceviche">Ceviche</option>
    <option value = "Papas a la Huancaina">Papa a la huancaina</option>
    <option value = "empanadas">Empanadas</option>
    <option value = "Pork Tamales">Tamales</option>
    </select>
</div>
<div class = "flexContainer">
    <h2 class="middle">ENTREES</h2>
    <select id= "entree">
    <option >Please select a main dish</option> 
    <option value = "Lomo Saltado">Lomo Saltado</option>
    <option value = "Aji de Gallina">Aji de Gallina</option>
    <option value = "Aguadito de Pollo">Aguadito de Pollo</option>
    <option value = "Peruvian Roasted Chicken">Pollo a la brasa</option>
    <option value = "Albondigas">Albondigas</option>
    <option value = "Pescado Sudado">Pescado Sudado</option>
    <option value = "ragu bolognese">Fideos Rojos</option>
    </select>
</div>
<div class = "flexContainer">
    <h2>DESSERTS</h2>
    <select id= "desserts">
    <option >Please select a dessert</option> 
    <option value = "Suspiro Limeno">Suspiro a la limeña</option>
    <option value = "Peruvian Alfajores">Alfajores</option>
    <option value = "Arroz con leche">Arroz con leche</option>
    </select>
</div>    
</form>
</div>` ;

createStage();

// global variables

let storeResponse, $searchQ, theChosenOne, selectedDish;

// Jquery variables (for HTML element selection)
let $selectApps = $('#appetizers');
let $selectEntree = $('#entree');
let $selectDessert = $('#desserts');
let $selectorEl = $(".inputs");
let $ingEl = $(".ingredients");
let $mainEl = $("main");
let $nutriSet = $('#createClassNutr');
let $ingrSet = $('#createClassIngr');


/*******main menu */

$selectApps.change(function() {
   removeStage();
   $searchQ = $selectApps.val();
   $grabData ();
}) 

$searchQ = $selectEntree.change(function() {
    removeStage();
    $searchQ = $selectEntree.val();
    $grabData();
}) 

$searchQ = $selectDessert.change(function() {
    removeStage();
    $searchQ = $selectDessert.val();
    $grabData();
});




/*******Functions! ************/
function createStage(){
    $stage1.append($stage1Content);
    $yearEl.html(new Date().getFullYear());
}

function removeStage(){
 $stage1.empty();
$nutriSet.addClass("nutrition")
$ingrSet.addClass("ingrStyle")
}

function $grabData() {
    console.log("$grabData starting")
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

 $.ajax(settings).done(function (response){
    storeResponse = response;
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
    $stage1.append(`<div class="resetButton">
     <button id='reset'>Search Another Dish</button>
     </div>`)
}
    

    }

   
    function ingredients(){
        console.log("processing ingredients");
        $ingEl.append(`<h3>Ingredients:</h3>`);
        ingList = theChosenOne.food.foodContentsLabel.split(";");
        ingList.forEach(element => {    
        $ingEl.append(`<li>${element}</li>`);})
        $ingEl.append(`</div>`);
        $("body").first().addClass("stage2");
    }
        

     function nutrition() {
        let $nutriEl = $(".nutrition");
        nutriList = theChosenOne.food.nutrients;
        console.log(nutriList);
        $nutriEl.append(`<h3>Nutrition: </h3>`);
        changeKeys();
        for (let [key, value] of Object.entries(nutriList)) {
            $nutriEl.append(`<h5>${key}</h5> <h5 class= "result">${value}</h5>`);
          }

        $resetEl=$('#reset');
        $resetEl.on('click', reset);
  function reset() {
    location.reload(true);
    }
  
      
    function changeKeys() {
        console.log(nutriList)
        nutriList.Calories = nutriList.ENERC_KCAL;
        delete nutriList.ENERC_KCAL;
        nutriList.Protein = nutriList.PROCNT;
        delete nutriList.PROCNT;
        nutriList.Fat = nutriList.FAT;
        delete nutriList.FAT;
        nutriList.Carbohydrates = nutriList.CHOCDF;
        delete nutriList.CHOCDF;
        nutriList.Fiber = nutriList.FIBTG;
        delete nutriList.FIBTG;
        }
    

};
