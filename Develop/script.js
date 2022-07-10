var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

document.getElementById('currentDay').innerHTML = today

// document.write(today);

// var input = document.getElementById("user-input");


// function save() { 
//     localStorage.setItem("response", input);
// }

// var button = document.querySelector('.saveBtn');
// var inputText = document.querySelector('.user-input');


// function save() {
//     // var input = JSON.parse(window.localStorage.getItem('jokes'))
  
//     if (input) {
//       window.localStorage.setItem('jokes', JSON.stringify([...favoriteJokes, jokeText.innerHTML]))
//     } else {
//       window.localStorage.setItem('jokes', JSON.stringify([jokeText.innerHTML]))
//     }


function save() {
    var input = document.getElementById("user-input-9").value ;

    localStorage.setItem("input9", JSON.stringify (input));
}
   