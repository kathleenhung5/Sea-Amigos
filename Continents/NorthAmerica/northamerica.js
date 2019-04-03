var app = document.getElementById("app");
var sun = document.querySelector(".sun");
var landBut = document.getElementById("land"),
    landBut = document.getElementById("ocean");


function goLand (){
    app.style.backgroundPosition = "left";
    sun.style.left = "70%";
    land.style.opacity = "0";
    ocean.style.opacity = "1";
}

function goOcean (){
    app.style.backgroundPosition = "right";
    sun.style.left = "-5%";
    ocean.style.opacity = "0";
    land.style.opacity = "1";
}