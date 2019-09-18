document.querySelector('#search-button').addEventListener("click", main);

var pageNumber = 1;
function main() {
    //9afc229df852a2a227f0d3cf7ee8ee3d
    var baseUrl = "https://www.food2fork.com/api/search?key=9afc229df852a2a227f0d3cf7ee8ee3d&q=chicken%20leg&page=1";

    var dishName = document.getElementById('dish-input').value;
    var ingredients = document.getElementById('ingredients-input').value;



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
