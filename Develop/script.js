var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

document.getElementById('currentDay').innerHTML = today


function save9() {
    var input = document.getElementById("user-input-9").value ;

    localStorage.setItem("input9", JSON.stringify (input));
}

function save10() {
    var input = document.getElementById("user-input-10").value ;

    localStorage.setItem("input10", JSON.stringify (input));
}

function save11() {
    var input = document.getElementById("user-input-11").value ;

    localStorage.setItem("input11", JSON.stringify (input));
}

function save12() {
    var input = document.getElementById("user-input-12").value ;

    localStorage.setItem("input12", JSON.stringify (input));
}

function save1() {
    var input = document.getElementById("user-input-1").value ;

    localStorage.setItem("input1", JSON.stringify (input));
}

function save2() {
    var input = document.getElementById("user-input-2").value ;

    localStorage.setItem("input2", JSON.stringify (input));
}

function save3() {
    var input = document.getElementById("user-input-3").value ;

    localStorage.setItem("input3", JSON.stringify (input));
}

function save4() {
    var input = document.getElementById("user-input-4").value ;

    localStorage.setItem("input4", JSON.stringify (input));
}

function save5() {
    var input = document.getElementById("user-input-5").value ;

    localStorage.setItem("input5", JSON.stringify (input));
}