// I hope this merges!
var pageNumber = 1;

function main() {
    var dishName = document.getElementById('dish-input').value.replace(/ /, "%20");
    var baseUrl = "https://www.food2fork.com/api/search?key=9afc229df852a2a227f0d3cf7ee8ee3d&q="
        + dishName + "&page=" + pageNumber;

    fetch(baseUrl)
        .then(response => {
            return response.json();
        })
        .then(function (response) {
            printRowsToForm(dataintoList(getDataObject(response)));
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
