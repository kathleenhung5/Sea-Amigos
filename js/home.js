//----- State ----- //
pkg = {
    page: "home", // home map lno aniaml quiz 
    continent: "none", // NA NP Ant Amzn
    animal: "none" // 1 2 3 4
}





//---- Proxy ---- // 
var handler = {
    set: function(obj, props, value){
        if(props == "page"){
            if (value == "map"){
                toMapUI();
            }
            if (value == "home"){
                toHomeUI();
            }
            if (value == "lno"){
                toLnOUI();
            }
            if (value == "animal"){
                toAnimalUI(value);
            }
        }
        
        if(props == "continent"){
            changeLnOBg(value);
        }

    
    
    
    
    
    
    
    }  
}

var proxyPkg = new Proxy(pkg, handler);


//---- Function State ----//

function toMap (){
    pkg.page = "map";
    pkg.continent = "none";
    pkg.animal = "none";
    proxyPkg.page = pkg.page;
    proxyPkg.continent = pkg.continent;
    proxyPkg.animal = pkg.animal;
    save();
}

function toHome (){
    pkg.page = "home";
    pkg.continent = "none";
    pkg.animal = "none";
    proxyPkg.page = pkg.page;
    proxyPkg.continent = pkg.continent;
    proxyPkg.animal = pkg.animal;
    save();
}

function toLnO (x){
    pkg.page = "lno";
    pkg.continent = x;
    pkg.animal = "none";
    proxyPkg.page = pkg.page;
    proxyPkg.continent = pkg.continent;
    proxyPkg.animal = pkg.animal;
    save();
}

function toAnimal (x){
    pkg.page = "animal";
    pkg.animal = x;
    proxyPkg.page = pkg.page;
    proxyPkg.animal = pkg.animal;
    save();
}


function save(){
    localStorage.setItem("pkg",JSON.stringify(pkg));
}


//---- Function UI ---------//

function toHomeUI(){
    
    document.querySelector(".map-page").style.left = "100%";
    document.querySelector(".L-n-O-page").style.left = "100%";
    document.querySelector("#aniaml-page").style.left = "100%";
    document.querySelector(".hbg-menu").style.display = "none";
    document.querySelector(".hbg-menu-list").style.top = "-100vh";
    document.querySelector(".food").style.display = "none";
    document.querySelector(".homepage").style.left = "0px";
    document.querySelector("#feedButton").src = "../img/northamerica/animal-page/feedDefault_NA.svg";
}

function toMapUI (){
    document.querySelector(".homepage").style.left = "-100%";
    document.querySelector(".map-page").style.left = "0px";
    document.querySelector(".L-n-O-page").style.left = "100%";
    document.querySelector(".hbg-menu").style.display = "block";
    document.querySelector(".hbg-menu-list").style.top = "-100vh";
    document.querySelector("#aniaml-page").style.left = "100%";
    document.querySelector("#feedButton").src = "../img/northamerica/animal-page/feedDefault_NA.svg";
}

function toTutorial(){
    window.location.href = "./ATutorial/tutorial-welcome.html";
}

function toLnOUI(){
    document.querySelector(".L-n-O-page").style.left = "0px";
     document.querySelector(".homepage").style.left = "-100%";
    document.querySelector(".map-page").style.left = "-100%px";
    document.querySelector(".hbg-menu-list").style.top = "-100vh";
    document.querySelector("#aniaml-page").style.left = "100%";
    document.querySelector(".food").style.display = "none";
    document.querySelector("#feedButton").src = "../img/northamerica/animal-page/feedDefault_NA.svg";
    
    
    
}

function changeLnOBg(x){
    if (x == "NA"){
        document.querySelector(".L-n-O-pagewrap").style.backgroundImage = "url(../img/northamerica/NA-bg.svg)";
    }
}

function toAnimalUI(x){
    document.querySelector(".homepage").style.left = "-100%";
    document.querySelector(".map-page").style.left = "-100%";
    document.querySelector(".L-n-O-page").style.left = "-100%";
    document.querySelector(".hbg-menu").style.display = "block";
    document.querySelector(".hbg-menu-list").style.top = "-100vh";
    document.querySelector("#aniaml-page").style.left = "0px";
    
    if(x == 1 && pkg.continent )
    
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
    document.querySelector("#aniaml-page").style.left = "0px";
    document.querySelector(".L-n-O-page").style.left = "-100%";
    document.querySelector(".animal1 img").src = "img/northamerica/Otter.svg";
    
}

//function goAni2(){
//    document.querySelector(".animal2 img").src = "img/northamerica/Beaver.svg";
//    //window.location.href = "";
//}
//
//function goAni3(){
//    document.querySelector(".animal3 img").src = "img/northamerica/jellyfish.svg";
//    //window.location.href = "";
//}
//
//function goAni4(){
//    document.querySelector(".animal4 img").src = "img/northamerica/Orca.svg";
//    //window.location.href = "";
//}





//--------  Aniaml Page ------------//
var talkBut = document.querySelector("#talkButton"),
    feedBut = document.querySelector("#feedButton"),
    quizBut = document.querySelector("#quizButton");
var foodMenu = document.querySelector(".food");
var But = 0;
var otterTalk = [ "Hi! I'm Ophie the Otter!", "I have the thickest fur of all animals.", "I like to carry one small rock with me all the time.", "I use rocks to smash open shells.", "I keep the same rock with me for my whole life!", "When I go to sleep, I like to wrap myself and my family in seaweed and float together with them."]

var mtimer = null;

talkBut.addEventListener("touchstart", function(){
     talkBut.src = "../img/northamerica/animal-page/TalkSelected_NA.svg";
     
    var talkRes = otterTalk[Math.floor(Math.random() * otterTalk.length)];
     speech.style.display = "flex";
     speech.innerHTML = talkRes;
//    console.log("start");
    if (mtimer == null){
            mtimer = setTimeout(function() {
            speech.style.display = "none";
            mtimer = null;
//            console.log("stop");
        }, 5000);
    } else {
        clearTimeout(mtimer);
        console.log("force stop and restart");
        mtimer = setTimeout(function() {
            speech.style.display = "none";
//            console.log("stop");
            },5000);
    }
});

talkBut.addEventListener("touchend", function() {
    talkBut.src = "../img/northamerica/animal-page/TalkDefault_NA.svg";
 });


feedBut.addEventListener("click", function() {
    if(But == 0){
        console.log("clickagain");
        feedBut.src = "../img/northamerica/animal-page/FeedSelected_NA.svg";
        foodMenu.style.display = "block";
        But = 1;
    } else {
        console.log("clickme");
        feedBut.src = "../img/northamerica/animal-page/FeedDefault_NA.svg";
        foodMenu.style.display = "none";
        But = 0;
    }
 }); 

    var fish = document.querySelector("#fish"),
        fruit = document.querySelector("#fruit"),
        seaweed = document.querySelector("#seaweed"),
        plankton = document.querySelector("#plankton");
    var speech = document.querySelector("#speechbubble");
    var negRes = ["No, thank you.", "I don't eat that.", "I don't like those!", "I'm sure someone else would like that."];
    var posRes = ["Mmm! Yummy!", "Thank you!", "My favourite! Thanks!", "I like this!"]; 
    var speechTimeout;
    fish.addEventListener("click", function() {
        var yes = posRes[Math.floor(Math.random() * posRes.length)];
        speech.style.display = "flex";
        speech.innerHTML = yes;
        if (mtimer == null){
            mtimer = setTimeout(function() {
            speech.style.display = "none";
            mtimer = null;
//            console.log("stop");
        }, 5000);
        } else {
        clearTimeout(mtimer);
        console.log("force stop and restart");
        mtimer = setTimeout(function() {
            speech.style.display = "none";
//            console.log("stop");
            },5000);
    }});
        
   fruit.addEventListener("click", function() {
        var no = negRes[Math.floor(Math.random() * negRes.length)];
        speech.style.display = "flex";
        speech.innerHTML = no;
        if (mtimer == null){
            mtimer = setTimeout(function() {
            speech.style.display = "none";
            mtimer = null;
//            console.log("stop");
        }, 5000);
        } else {
        clearTimeout(mtimer);
        console.log("force stop and restart");
        mtimer = setTimeout(function() {
            speech.style.display = "none";
//            console.log("stop");
            },5000);
    }});
   seaweed.addEventListener("click", function() {
        var no = negRes[Math.floor(Math.random() * negRes.length)];
        speech.style.display = "flex";
        speech.innerHTML = no;
        if (mtimer == null){
            mtimer = setTimeout(function() {
            speech.style.display = "none";
            mtimer = null;
//            console.log("stop");
        }, 5000);
        } else {
        clearTimeout(mtimer);
        console.log("force stop and restart");
        mtimer = setTimeout(function() {
            speech.style.display = "none";
//            console.log("stop");
            },5000);
    }});
   plankton.addEventListener("click", function() {
        var no = negRes[Math.floor(Math.random() * negRes.length)];
        speech.style.display = "flex";
        speech.innerHTML = no;
        if (mtimer == null){
            mtimer = setTimeout(function() {
            speech.style.display = "none";
            mtimer = null;
//            console.log("stop");
        }, 5000);
        } else {
        clearTimeout(mtimer);
        console.log("force stop and restart");
        mtimer = setTimeout(function() {
            speech.style.display = "none";
//            console.log("stop");
            },5000);
    }});

    function resetTimeout() {
        clearTimeout(speechTimeout);
    };
