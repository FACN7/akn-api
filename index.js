document.querySelector('#search-button').addEventListener("click", main);

var pageNumber = 1;
function main() {
    // af5cd3d114680f9003daacf4283d4eb4
    //9afc229df852a2a227f0d3cf7ee8ee3d
    var baseUrl = "https://www.food2fork.com/api/search?key=9afc229df852a2a227f0d3cf7ee8ee3d&q=chicken%20leg&page=1";

    var dishName = document.getElementById('dish-input').value;



    // baseUrl = baseUrl + dishName + "&p=" + pageNumber;
    fetch(baseUrl)

        .then(response => {
            return response.json();
        })
        .then(function (response) {

            document.querySelector('#recipes-list').innerHTML = response.recipes.map(function (item) {
                console.log(item.title);
                return ''
                    // + '<div class="table-row">'
                    // + '<p>' + item.title + '</p>'
                    // + '<div class="tumbnail">'
                    // + '<img id="thumb-img" src="' +item.image_url + '" alt="image-thumb">';
                    // + '</div>';
                    // + '<a class="read-more-link" href="' + item.f2f_url + '>Read more</a>';
                    // + '</div>';
            }).join("");



        })
        .catch(function (error) {
            console.log(error);
        })











}
