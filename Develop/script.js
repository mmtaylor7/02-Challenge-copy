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

document.addEventListener('DOMContentLoaded', displayData) 

var data9 = document.getElementById('user-input-9');
var data10 = document.getElementById('user-input-10');
var data11 = document.getElementById('user-input-11');
var data12 = document.getElementById('user-input-12');
var data1 = document.getElementById('user-input-1');
var data2 = document.getElementById('user-input-2');
var data3 = document.getElementById('user-input-3');
var data4 = document.getElementById('user-input-4');
var data5 = document.getElementById('user-input-5');


data9.innerHTML = JSON.parse(localStorage.getItem("input9"));
data10.innerHTML = JSON.parse(localStorage.getItem("input10"));
data11.innerHTML = JSON.parse(localStorage.getItem("input11"));
data12.innerHTML = JSON.parse(localStorage.getItem("input12"));
data1.innerHTML = JSON.parse(localStorage.getItem("input1"));
data2.innerHTML = JSON.parse(localStorage.getItem("input2"));
data3.innerHTML = JSON.parse(localStorage.getItem("input3"));
data4.innerHTML = JSON.parse(localStorage.getItem("input4"));
data5.innerHTML = JSON.parse(localStorage.getItem("input5"));



function displayData() {
    localStorage.getItem("input9") = data9;
    localStorage.getItem("input10") = data10;
    localStorage.getItem("input11") = data11;
    localStorage.getItem("input12") = data12;
    localStorage.getItem("input1") = data1;
    localStorage.getItem("input2") = data2;
    localStorage.getItem("input3") = data3;
    localStorage.getItem("input4") = data4;
    localStorage.getItem("input5") = data5;
}

