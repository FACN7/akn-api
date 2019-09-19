document.querySelector('#search-button').addEventListener("click", main);

var pageNumber = 1;




function main() {
    var dishName = parseDishName(document.getElementById('dish-input').value);
    var baseUrl = "https://www.food2fork.com/api/search?key=9afc229df852a2a227f0d3cf7ee8ee3d&q="
        + dishName + "&page=" + pageNumber;


    fetch(baseUrl).then(response => { return response.json(); })
        .then(function (response) {
            document.querySelector('#recipe-name-h1').innerHTML = response.recipes.map(function (item) {
                return item.title + '<p>';
            }).join("");



        })
        .catch(function (error) {
            console.log(error);
        })











}

function parseDishName(str) {
    return str.split(" ").join("%20");
}