var app = document.getElementById("app");
var sun = document.querySelector(".sun");
var landAni = document.querySelector(".land-animals"),
    oceanAni = document.querySelector(".ocean-animals");
var landBut = document.getElementById("land"),
    oceanBut = document.getElementById("ocean");

function goLand(){
    app.style.backgroundPosition = "left";
    sun.style.left = "70%";
    landBut.style.opacity = "0";
    oceanBut.style.opacity = "1";
    oceanAni.style.left = "260%";
    landAni.style.left = "10%";
}

function goOcean(){
    app.style.backgroundPosition = "right";
    sun.style.left = "-5%";
    oceanBut.style.opacity = "0";
    landBut.style.opacity = "1";
    landAni.style.left = "-200%";
    oceanAni.style.left = "10%";
}

function goOtter(){
    document.querySelector(".otter img").src = "Otter/Otter_SVGs/Otter.svg";
    //window.location.href = "";
}

function goBeaver(){
    document.querySelector(".beaver img").src = "Beaver/Beaver_SVGs/Beaver.svg";
    //window.location.href = "";
}

function goOrca(){
    document.querySelector(".orca img").src = "Orca/Orca_SVGs/Orca.svg";
    //window.location.href = "";
}

function goJellyfish(){
    document.querySelector(".jellyfish img").src = "Jellyfish/Jellyfish_SVGs/jellyfish.svg";
    //window.location.href = "";
}
