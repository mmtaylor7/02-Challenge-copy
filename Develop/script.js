var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

document.getElementById('currentDay').innerHTML = today

// document.write(today);

var input = document.getElementById("user-input");


function save() { localStorage.setItem("server", input.val());
}

