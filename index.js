// document.querySelector('#search-button').addEventListener("click", dataintoList(getDataObject(dummyObject)));

var pageNumber = 1;


function main() {
    //9afc229df852a2a227f0d3cf7ee8ee3d
    var baseUrl = "https://www.food2fork.com/api/search?key=9afc229df852a2a227f0d3cf7ee8ee3d&q=chicken%20leg&page=1";

    var dishName = document.getElementById('dish-input').value;



    // baseUrl = baseUrl + dishName + "&p=" + pageNumber;
    fetch(baseUrl)

        .then(response => {
            return response.json();
        })
        .then(function (response) {

            document.querySelector('#recipe-name-h1').innerHTML = response.recipes.map(function (item) {
                console.log(item.title);
                return ''
                    + '<div>'
                    + '<p>' + item.title + '</p>'
                    + '</div>';
            }).join("");



        })
        .catch(function (error) {
            console.log(error);
        })
}
//------------karems code starts here--------------
//this function takes the fetched and JSON parsed object and turns it into another object
// from the type {length:<number>, meals: <array of recipes objects {title:<string>, url:<string>, image:<string>} >  }
//this function is API dependant
function getDataObject(jsonObj){
  var obj={};
  obj.meals = []; // this line is API dependant "recipes" might need to change
  Array.from(jsonObj.recipes).map(x=>{
    obj.meals.push({
      title: x.title,         //this line is API dependant
      url: x.source_url,      //this line is API dependant
      image: x.image_url      //this line is API dependant
    });
  });
  obj.length = obj.meals.length;

  return obj;
}


//this function takes argument of the type {length:<number>, meals: <array of recipes objects {title:<string>, url:<string>, image:<string>} >  }
//and converts it to html elements
//returns it as string
function dataintoList(obj){
  var str='';
  var recipesArray = obj.meals;
  recipesArray.map(x=>{
    str+='<div class="table-row">'
            +'<div class="recipe-image">'
                +'<img src="'+x.image+'">'
            +'</div>'
            +'<div class="recipe-name">'
                +'<h1 id="recipe-name-h1">'+x.title+'</h1>'
            +'</div>'
            +'<a class="read-more-link" href="'+x.url+'">Read more</a>'
    +'</div>';
  });
 return str;
}

//this function takes paramater str of type <string>
//and manipulates the DOM: adds the table rows
// no return value
function printRowsToForm(str){
  document.querySelector(".recipes-list").innerHTML = str;
}
//-------------karems code ends here ---------------



//------------testing dummyObject --- delete on completion----
var dummyObject = {
count: 30,
recipes: [
{
publisher: "All Recipes",
f2f_url: "http://food2fork.com/view/34889",
title: "Zesty Slow Cooker Chicken Barbeque",
source_url: "http://allrecipes.com/Recipe/Zesty-Slow-Cooker-Chicken-Barbecue/Detail.aspx",
recipe_id: "34889",
image_url: "http://static.food2fork.com/4515542dbb.jpg",
social_rank: 100,
publisher_url: "http://allrecipes.com"
},
{
publisher: "The Pioneer Woman",
f2f_url: "http://food2fork.com/view/47334",
title: "Asian Noodle Salad",
source_url: "http://thepioneerwoman.com/cooking/2008/03/my_most_favorite_salad_ever_ever_ever_ever/",
recipe_id: "47334",
image_url: "http://static.food2fork.com/AsianNoodleSalad1754.jpg",
social_rank: 100,
publisher_url: "http://thepioneerwoman.com"
},
{
publisher: "Two Peas and Their Pod",
f2f_url: "http://food2fork.com/view/5cc4a8",
title: "Quinoa Salad with Asparagus, Peas, Avocados & Lemon Basil Dressing",
source_url: "http://www.twopeasandtheirpod.com/quinoa-salad-with-asparagus-peas-avocado-lemon-basil-dressing/",
recipe_id: "5cc4a8",
image_url: "http://static.food2fork.com/SpringQuinoaSalad3ba71.jpg",
social_rank: 99.99999999993314,
publisher_url: "http://www.twopeasandtheirpod.com"
},
{
publisher: "The Pioneer Woman",
f2f_url: "http://food2fork.com/view/47106",
title: "Layered Salad",
source_url: "http://thepioneerwoman.com/cooking/2010/08/layered-salad/",
recipe_id: "47106",
image_url: "http://static.food2fork.com/4940301746_c16a4e7edf_o72c2.jpg",
social_rank: 99.99999999969766,
publisher_url: "http://thepioneerwoman.com"
},
{
publisher: "Two Peas and Their Pod",
f2f_url: "http://food2fork.com/view/2d1843",
title: "Kale, Strawberry & Avocado Salad with Lemon Poppy Seed Dressing",
source_url: "http://www.twopeasandtheirpod.com/kale-strawberry-avocado-salad-with-lemon-poppy-seed-dressing/",
recipe_id: "2d1843",
image_url: "http://static.food2fork.com/KaleStrawberryAvocadoSalad10ffa.jpg",
social_rank: 99.99999999013855,
publisher_url: "http://www.twopeasandtheirpod.com"
},
{
publisher: "BBC Good Food",
f2f_url: "http://food2fork.com/view/6132fc",
title: "Falafel burgers",
source_url: "http://www.bbcgoodfood.com/recipes/5605/falafel-burgers",
recipe_id: "6132fc",
image_url: "http://static.food2fork.com/5605_MEDIUMe040.jpg",
social_rank: 99.99999997278992,
publisher_url: "http://www.bbcgoodfood.com"
},
{
publisher: "Closet Cooking",
f2f_url: "http://food2fork.com/view/35671",
title: "Warm Mushroom, Roasted Asparagus and Wild Rice Salad with Feta",
source_url: "http://www.closetcooking.com/2011/06/warm-mushroom-and-wild-rice-salad-with.html",
recipe_id: "35671",
image_url: "http://static.food2fork.com/Warm2BMushroom2Band2BRoasted2BAsparagus2BWild2BRice2BSalad2Bwith2Band2BFeta2B5002B71693724de9b.jpg",
social_rank: 99.99999995430609,
publisher_url: "http://closetcooking.com"
},
{
publisher: "The Pioneer Woman",
f2f_url: "http://food2fork.com/view/46944",
title: "New York Style Chopped Salad",
source_url: "http://thepioneerwoman.com/cooking/2012/03/new-york-style-chopped-salad/",
recipe_id: "46944",
image_url: "http://static.food2fork.com/choppedsalad7709.jpg",
social_rank: 99.9999999516044,
publisher_url: "http://thepioneerwoman.com"
},
{
publisher: "All Recipes",
f2f_url: "http://food2fork.com/view/31784",
title: "Sweet Restaurant Slaw",
source_url: "http://allrecipes.com/Recipe/Sweet-Restaurant-Slaw/Detail.aspx",
recipe_id: "31784",
image_url: "http://static.food2fork.com/1788019c15.jpg",
social_rank: 99.99999987987451,
publisher_url: "http://allrecipes.com"
},
{
publisher: "BBC Good Food",
f2f_url: "http://food2fork.com/view/7faef6",
title: "Halloumi stuffed peppers",
source_url: "http://www.bbcgoodfood.com/recipes/1331/halloumi-stuffed-peppers",
recipe_id: "7faef6",
image_url: "http://static.food2fork.com/1331_MEDIUM5e80.jpg",
social_rank: 99.99999908396687,
publisher_url: "http://www.bbcgoodfood.com"
},
{
publisher: "The Pioneer Woman",
f2f_url: "http://food2fork.com/view/46958",
title: "Apple, Pecan, and Blue Cheese Salad with Dried Cherries",
source_url: "http://thepioneerwoman.com/cooking/2012/01/apple-pecan-and-blue-cheese-salad-with-dried-cherries/",
recipe_id: "46958",
image_url: "http://static.food2fork.com/salad8c49.jpg",
social_rank: 99.99999888988314,
publisher_url: "http://thepioneerwoman.com"
},
{
publisher: "101 Cookbooks",
f2f_url: "http://food2fork.com/view/47990",
title: "Vegetarian Thanksgiving Recipes",
source_url: "http://www.101cookbooks.com/archives/vegetarian-thanksgiving-recipes-recipe.html",
recipe_id: "47990",
image_url: "http://static.food2fork.com/vegetarian_thanksgiving_recipesf594.jpg",
social_rank: 99.99999810317004,
publisher_url: "http://www.101cookbooks.com"
},
{
publisher: "The Pioneer Woman",
f2f_url: "http://food2fork.com/view/47010",
title: "Chipotle Steak Salad",
source_url: "http://thepioneerwoman.com/cooking/2011/08/chipotle-steak-salad/",
recipe_id: "47010",
image_url: "http://static.food2fork.com/5993877556_42ba110c20_o990e.jpg",
social_rank: 99.9999942639992,
publisher_url: "http://thepioneerwoman.com"
},
{
publisher: "BBC Good Food",
f2f_url: "http://food2fork.com/view/1db784",
title: "Mexican bean burgers with lime yogurt & salsa",
source_url: "http://www.bbcgoodfood.com/recipes/9978/mexican-bean-burgers-with-lime-yogurt-and-salsa",
recipe_id: "1db784",
image_url: "http://static.food2fork.com/9978_MEDIUM0908.jpg",
social_rank: 99.99999309625808,
publisher_url: "http://www.bbcgoodfood.com"
},
{
publisher: "All Recipes",
f2f_url: "http://food2fork.com/view/28887",
title: "Slow Cooker Buffalo Chicken Sandwiches",
source_url: "http://allrecipes.com/Recipe/Slow-Cooker-Buffalo-Chicken-Sandwiches/Detail.aspx",
recipe_id: "28887",
image_url: "http://static.food2fork.com/678369f067.jpg",
social_rank: 99.9999612474737,
publisher_url: "http://allrecipes.com"
},
{
publisher: "The Pioneer Woman",
f2f_url: "http://food2fork.com/view/47249",
title: "Ginger Steak Salad",
source_url: "http://thepioneerwoman.com/cooking/2009/03/ginger-steak-salad/",
recipe_id: "47249",
image_url: "http://static.food2fork.com/3327439142_56c49630a69bee.jpg",
social_rank: 99.99990262934416,
publisher_url: "http://thepioneerwoman.com"
},
{
publisher: "All Recipes",
f2f_url: "http://food2fork.com/view/1114",
title: "Angel Chicken Pasta",
source_url: "http://allrecipes.com/Recipe/Angel-Chicken-Pasta/Detail.aspx",
recipe_id: "1114",
image_url: "http://static.food2fork.com/43491ae69.jpg",
social_rank: 99.9997172650525,
publisher_url: "http://allrecipes.com"
},
{
publisher: "All Recipes",
f2f_url: "http://food2fork.com/view/1203",
title: "Antipasto Pasta Salad",
source_url: "http://allrecipes.com/Recipe/Antipasto-Pasta-Salad/Detail.aspx",
recipe_id: "1203",
image_url: "http://static.food2fork.com/6556885926.jpg",
social_rank: 99.99966401329048,
publisher_url: "http://allrecipes.com"
},
{
publisher: "Two Peas and Their Pod",
f2f_url: "http://food2fork.com/view/54343",
title: "Southwestern Pasta Salad with Creamy Avocado Dressing",
source_url: "http://www.twopeasandtheirpod.com/southwestern-pasta-salad-with-creamy-avocado-dressing/",
recipe_id: "54343",
image_url: "http://static.food2fork.com/SouthwesternPastaSalad28c66.jpg",
social_rank: 99.99962337974233,
publisher_url: "http://www.twopeasandtheirpod.com"
},
{
publisher: "Simply Recipes",
f2f_url: "http://food2fork.com/view/35734",
title: "Asparagus Salad with Shrimp",
source_url: "http://www.simplyrecipes.com/recipes/asparagus_salad_with_shrimp/",
recipe_id: "35734",
image_url: "http://static.food2fork.com/asparagusshrimpsalada300x200d319b17b.jpg",
social_rank: 99.99910514281466,
publisher_url: "http://simplyrecipes.com"
},
{
publisher: "A Spicy Perspective",
f2f_url: "http://food2fork.com/view/bf5134",
title: "Vietnamese Banh Mi Salad",
source_url: "http://www.aspicyperspective.com/2013/01/vietnamese-chicken-salad.html",
recipe_id: "bf5134",
image_url: "http://static.food2fork.com/IMG_28181180x1807551.jpg",
social_rank: 99.99896179226475,
publisher_url: "http://www.aspicyperspective.com"
},
{
publisher: "Closet Cooking",
f2f_url: "http://food2fork.com/view/35639",
title: "Thai Grilled Chicken Satay Salad",
source_url: "http://www.closetcooking.com/2011/01/thai-grilled-chicken-satay-salad.html",
recipe_id: "35639",
image_url: "http://static.food2fork.com/Thai2BGrilled2BChicken2BSatay2BSalad2B12B800d1f4ee96.jpg",
social_rank: 99.99849554147195,
publisher_url: "http://closetcooking.com"
},
{
publisher: "All Recipes",
f2f_url: "http://food2fork.com/view/28923",
title: "Slow Cooker Chicken Stroganoff",
source_url: "http://allrecipes.com/Recipe/Slow-Cooker-Chicken-Stroganoff/Detail.aspx",
recipe_id: "28923",
image_url: "http://static.food2fork.com/509091b010.jpg",
social_rank: 99.99782985106353,
publisher_url: "http://allrecipes.com"
},
{
publisher: "All Recipes",
f2f_url: "http://food2fork.com/view/2272",
title: "Bacon Ranch Pasta Salad",
source_url: "http://allrecipes.com/Recipe/Bacon-Ranch-Pasta-Salad/Detail.aspx",
recipe_id: "2272",
image_url: "http://static.food2fork.com/580466da88.jpg",
social_rank: 99.99780982410621,
publisher_url: "http://allrecipes.com"
},
{
publisher: "All Recipes",
f2f_url: "http://food2fork.com/view/13552",
title: "Frank's® Red Hot® Buffalo Chicken Dip",
source_url: "http://allrecipes.com/Recipe/Franks-Red-Hot-Buffalo-Chicken-Dip/Detail.aspx",
recipe_id: "13552",
image_url: "http://static.food2fork.com/9808808b64.jpg",
social_rank: 99.99741426377035,
publisher_url: "http://allrecipes.com"
},
{
publisher: "All Recipes",
f2f_url: "http://food2fork.com/view/7203",
title: "Chicken Fiesta Salad",
source_url: "http://allrecipes.com/Recipe/Chicken-Fiesta-Salad/Detail.aspx",
recipe_id: "7203",
image_url: "http://static.food2fork.com/732063d513.jpg",
social_rank: 99.99618734601174,
publisher_url: "http://allrecipes.com"
},
{
publisher: "All Recipes",
f2f_url: "http://food2fork.com/view/27974",
title: "Scrambled Eggs Done Right",
source_url: "http://allrecipes.com/Recipe/Scrambled-Eggs-Done-Right/Detail.aspx",
recipe_id: "27974",
image_url: "http://static.food2fork.com/179792623.jpg",
social_rank: 99.99050635966533,
publisher_url: "http://allrecipes.com"
},
{
publisher: "101 Cookbooks",
f2f_url: "http://food2fork.com/view/48137",
title: "Super Natural Every Day: Published",
source_url: "http://www.101cookbooks.com/archives/super-natural-every-day-published-recipe.html",
recipe_id: "48137",
image_url: "http://static.food2fork.com/sne_roundup2098.jpg",
social_rank: 99.9859304868457,
publisher_url: "http://www.101cookbooks.com"
},
{
publisher: "All Recipes",
f2f_url: "http://food2fork.com/view/2126",
title: "Awesome Pasta Salad",
source_url: "http://allrecipes.com/Recipe/Awesome-Pasta-Salad/Detail.aspx",
recipe_id: "2126",
image_url: "http://static.food2fork.com/852330c2a1.jpg",
social_rank: 99.98332955596851,
publisher_url: "http://allrecipes.com"
},
{
publisher: "Two Peas and Their Pod",
f2f_url: "http://food2fork.com/view/54291",
title: "Brussels Sprout Pomegranate Citrus Salad",
source_url: "http://www.twopeasandtheirpod.com/brussels-sprout-pomegranate-citrus-salad/",
recipe_id: "54291",
image_url: "http://static.food2fork.com/BrusselsSproutPomegranateSalad275dd.jpg",
social_rank: 99.97132843248467,
publisher_url: "http://www.twopeasandtheirpod.com"
}
]
};
