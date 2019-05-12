function toAni1(){
   
    document.querySelector(".animal1 img").src = "../img/northamerica/Otter.svg";
     window.location.href = "./otter.html";
}

function toNATutorial(){
   window.location.href = "tutorial-northamerica.html"; 
}
  
function moveToRight(){
    document.querySelector(".talkbox-NA").style.left = "100%";
    document.querySelector(".turtle-NA").style.opacity = "0";
}

var explBut = document.querySelector(".talkbox button");

function explore(){
     window.location.href = "tutorial-map.html";
}
   




function goLand(){
    var lnoPagewrap = document.querySelector(".tutorial-NA");
var sun = document.querySelector(".sun");
var landAni = document.querySelector(".land-animals"),
    oceanAni = document.querySelector(".ocean-animals");
var landBut = document.getElementById("land"),
    oceanBut = document.getElementById("ocean"),
    cloudR = document.querySelector(".cloud-right"),
    cloudM = document.querySelector(".cloud-middle"),
    cloudL = document.querySelector(".cloud-left");
    lnoPagewrap.style.backgroundPosition = "left";
    sun.style.left = "70%";
    landBut.style.opacity = "0";
    oceanAni.style.left = "260%";
    landAni.style.left = "10%";
    cloudR.style.left = "170%";
    cloudM.style.left = "120%";
    cloudL.style.left = "5%";
}

function goHome(){
    window.location.href = "../index.html";
}









