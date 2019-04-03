var app = document.getElementById("app");
var sun = document.querySelector(".sun");


function goLand (){
    app.style.backgroundPosition = "left";
    sun.style.left = "70%";
}

function goOcean (){
    app.style.backgroundPosition = "right";
    sun.style.left = "-5%";
}