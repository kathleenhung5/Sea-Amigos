function toHome(){
    document.querySelector(".homepage").style.left = "0px";
    document.querySelector(".map-page").style.left = "100%";
    document.querySelector(".hbg-menu").style.display = "none";
    document.querySelector(".hbg-menu-list").style.top = "-100%";
    document.querySelector(".L-n-O-page").style.left = "100%";
}

function toMap (){
    document.querySelector(".homepage").style.left = "-100%";
    document.querySelector(".map-page").style.left = "0px";
    document.querySelector(".L-n-O-page").style.left = "100%";
    document.querySelector(".hbg-menu").style.display = "block";
    document.querySelector(".hbg-menu-list").style.top = "-100%";
}

function toTutorial(){
    //window.location.href = "./ATutorial/tutorial-welcome.html";
}

function toLnO(){
    document.querySelector(".L-n-O-page").style.left = "0px";
     document.querySelector(".homepage").style.left = "-100%";
    document.querySelector(".map-page").style.left = "-100%px";
    document.querySelector(".hbg-menu-list").style.top = "-100%";
    
}

function expMenu(){
    document.querySelector(".hbg-menu-list").style.top = "0px";
}

function closeMenu(){
    document.querySelector(".hbg-menu-list").style.top = "-100%";
}

// --------- land and ocean page -----------
var lnoPagewrap = document.querySelector(".L-n-O-pagewrap");
var sun = document.querySelector(".sun");
var landAni = document.querySelector(".land-animals"),
    oceanAni = document.querySelector(".ocean-animals");
var landBut = document.getElementById("land"),
    oceanBut = document.getElementById("ocean"),
    cloudR = document.querySelector(".cloud-right"),
    cloudM = document.querySelector(".cloud-middle"),
    cloudL = document.querySelector(".cloud-left");

function goLand(){
    lnoPagewrap.style.backgroundPosition = "left";
    sun.style.left = "70%";
    landBut.style.opacity = "0";
    oceanBut.style.opacity = "1";
    oceanAni.style.left = "260%";
    landAni.style.left = "10%";
    cloudR.style.left = "170%";
    cloudM.style.left = "120%";
    cloudL.style.left = "5%";
}

function goOcean(){
    lnoPagewrap.style.backgroundPosition = "right";
    sun.style.left = "-5%";
    oceanBut.style.opacity = "0";
    landBut.style.opacity = "1";
    landAni.style.left = "-200%";
    oceanAni.style.left = "10%";
    cloudR.style.left = "10%";
    cloudM.style.left = "-10%";
    cloudL.style.left = "-150%";
}

function goAni1(){
    document.querySelector(".animal1 img").src = "img/northamerica/Otter.svg";
    //window.location.href = "";
}

function goAni2(){
    document.querySelector(".animal2 img").src = "img/northamerica/Beaver.svg";
    //window.location.href = "";
}

function goAni3(){
    document.querySelector(".animal3 img").src = "img/northamerica/jellyfish.svg";
    //window.location.href = "";
}

function goAni4(){
    document.querySelector(".animal4 img").src = "img/northamerica/Orca.svg";
    //window.location.href = "";
}
