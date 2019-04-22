//----- State ----- //
pkg = {
    page: "home", // home map lno aniaml quiz 
    continent: "none", // NA NP Ant Amzn
    animal: "none", // 1 2 3 4
    animalvisit: { // 1 for visited, 0 for no
        //NA
        otter: 0,
        beaver: 0,
        jellyfish: 0,
        orca: 0,
        //NP
        walrus: 0,
        bear: 0,
        narwhal: 0,
        beluga: 0,
        //Ant
        penguin: 0,
        seal: 0,
        whale: 0,
        squid: 0,
        //Amzn
        crocodile: 0,
        crab: 0,
        dolphin: 0,
        manatee: 0
    } 
}


//load data
var spkg = localStorage.getItem("pkg");
if(spkg){
    pkg = JSON.parse(spkg);
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
            changeLnOContent(value);
        }
        
        if(props == "animal"){
            changeAniamlContent(value);
        }

    
    
    
    }  
}

var proxyPkg = new Proxy(pkg, handler);


//---- Function State ----//


function toMap(){
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
    
    // document visit
    console.log("document visit");
    if (pkg.continent == "NA"){
        if(x==1){
            pkg.animalvisit.otter = 1;
        }
        if(x==2){
            pkg.animalvisit.beaver = 1;
        }
        if(x==3){
            pkg.animalvisit.jellyfish = 1;
        }
        if(x==4){
            pkg.animalvisit.orca = 1;
        }
    }
    if (pkg.continent == "NP"){
        if(x==1){
            pkg.animalvisit.walrus = 1;
        }
        if(x==2){
            pkg.animalvisit.bear = 1;
        }
        if(x==3){
            pkg.animalvisit.narwhal = 1;
        }
        if(x==4){
            pkg.animalvisit.beluga = 1;
        }
    }
    if (pkg.continent == "Amzn"){
        if(x==1){
            pkg.animalvisit.crocodile = 1;
        }
        if(x==2){
            pkg.animalvisit.crab = 1;
        }
        if(x==3){
            pkg.animalvisit.dolphin = 1;
        }
        if(x==4){
            pkg.animalvisit.manatee = 1;
        } 
    }
    if (pkg.continent == "Ant"){
        if(x==1){
            pkg.animalvisit.seal = 1;
        }
        if(x==2){
            pkg.animalvisit.penguin = 1;
        }
        if(x==3){
            pkg.animalvisit.squid = 1;
        }
        if(x==4){
            pkg.animalvisit.whale = 1;
        }    
    }
    
    save();
}



function save(){
    localStorage.setItem("pkg",JSON.stringify(pkg));
}


//---- Function UI ---------//

// -- JUMP TO PAGES UI
function toHomeUI(){
    
    document.querySelector(".map-page").style.left = "100%";
    document.querySelector(".L-n-O-page").style.left = "100%";
    document.querySelector("#animal-page").style.left = "100%";
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
    document.querySelector("#animal-page").style.left = "100%";
    document.querySelector("#feedButton").src = "img/northamerica/animal-page/feedDefault_NA.svg";
}

function toTutorial(){
    window.location.href = "./ATutorial/tutorial-welcome.html";
}

function toLnOUI(){
    document.querySelector(".L-n-O-page").style.left = "0px";
     document.querySelector(".homepage").style.left = "-100%";
    document.querySelector(".map-page").style.left = "-100%px";
    document.querySelector(".hbg-menu-list").style.top = "-100vh";
    document.querySelector("#animal-page").style.left = "100%";
    document.querySelector(".food").style.display = "none";
    document.querySelector("#feedButton").src = "../img/northamerica/animal-page/feedDefault_NA.svg";
}

function toAnimalUI(x){
    document.querySelector(".homepage").style.left = "-100%";
    document.querySelector(".map-page").style.left = "-100%";
    document.querySelector(".L-n-O-page").style.left = "-100%";
    document.querySelector(".hbg-menu").style.display = "block";
    document.querySelector(".hbg-menu-list").style.top = "-100vh";
    document.querySelector("#animal-page").style.left = "0px"; 
}


// -- MENU UI
function expMenu(){
    document.querySelector(".hbg-menu-list").style.top = "0px";
}

function closeMenu(){
    document.querySelector(".hbg-menu-list").style.top = "-100%";
}

// -- LAND AND OCEAN UI

var animal1 = document.querySelector(".animal1 img"),
    animal2 = document.querySelector(".animal2 img"),
    animal3 = document.querySelector(".animal3 img"),
    animal4 = document.querySelector(".animal4 img");

function changeLnOContent(x){
    if (x == "NA"){
        // bg
        document.querySelector(".L-n-O-pagewrap").style.backgroundImage = "url(img/northamerica/NA-bg.svg)";
        // animals
        if(pkg.animalvisit.otter == 1){
            animal1.src = "img/northamerica/Otter.svg";
        } else {
            animal1.src = "img/northamerica/otter-silouette.svg";
        }
        if(pkg.animalvisit.beaver == 1){
            animal2.src = "img/northamerica/Beaver.svg";
        } else {
            animal2.src = "img/northamerica/beaver-silouette.svg";
        }
        if(pkg.animalvisit.jellyfish == 1){
            animal3.src = "img/northamerica/jellyfish.svg";
        } else {
            animal3.src = "img/northamerica/jellyfish-silouette.svg";
        }
        if(pkg.animalvisit.orca == 1){
            animal4.src = "img/northamerica/Orca.svg";
        } else {
            animal4.src = "img/northamerica/orca-silouette.svg";
        } 
    }
    
    if (x == "NP"){
        // bg
        document.querySelector(".L-n-O-pagewrap").style.backgroundImage = "url(img/northamerica/NA-bg.svg)";
        // animals
        if(pkg.animalvisit.walrus == 1){
            animal1.src = "img/northpole/walrus.svg";
        } else {
            animal1.src = "img/northpole/walrus.svg";
        }
        if(pkg.animalvisit.bear == 1){
            animal2.src = "img/northpole/bear.svg";
        } else {
            animal2.src = "img/northpole/bear.svg";
        }
        if(pkg.animalvisit.narwhal == 1){
            animal3.src = "img/northpole/narwhal.svg";
        } else {
            animal3.src = "img/northpole/narwhal.svg";
        }
        if(pkg.animalvisit.beluga == 1){
            animal4.src = "img/northpole/beluga.svg";
        } else {
            animal4.src = "img/northpole/beluga.svg";
        } 
    }
    
    if (x == "Ant"){
        // bg
        document.querySelector(".L-n-O-pagewrap").style.backgroundImage = "url(img/northamerica/NA-bg.svg)";
        // animals
        if(pkg.animalvisit.penguin == 1){
            animal1.src = "img/antarctica/penguin.svg";
        } else {
            animal1.src = "img/antarctica/penguin.svg";
        }
        if(pkg.animalvisit.seal == 1){
            animal2.src = "img/antarctica/seal.svg";
        } else {
            animal2.src = "img/antarctica/seal.svg";
        }
        if(pkg.animalvisit.squid == 1){
            animal3.src = "img/antarctica/squid.svg";
        } else {
            animal3.src = "img/antarctica/squid.svg";
        }
        if(pkg.animalvisit.whale == 1){
            animal4.src = "img/antarctica/whale.svg";
        } else {
            animal4.src ="img/antarctica/whale.svg";
        } 
    }
    
    if (x == "Amzn"){
        // bg
        document.querySelector(".L-n-O-pagewrap").style.backgroundImage = "url(img/northamerica/NA-bg.svg)";
        // animals
        if(pkg.animalvisit.crocodile == 1){
            animal1.src = "img/amazon/crocodile.svg";
        } else {
            animal1.src = "img/amazon/crocodile.svg";
        }
        if(pkg.animalvisit.crab == 1){
            animal2.src = "img/amazon/crab.svg";
        } else {
            animal2.src = "img/amazon/crab.svg";
        }
        if(pkg.animalvisit.dolphin == 1){
            animal3.src = "img/amazon/dolphin.svg";
        } else {
            animal3.src = "img/amazon/dolphin.svg";
        }
        if(pkg.animalvisit.manatee == 1){
            animal4.src = "img/amazon/manatee.svg";
        } else {
            animal4.src ="img/amazon/manatee.svg";
        } 
    }
}

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

// -- ANIMAL UI

var talkBut = document.querySelector("#talkButton"),
    feedBut = document.querySelector("#feedButton"),
    quizBut = document.querySelector("#quizButton"),
    theAnimal = document.querySelector("#animal"),
    animalbg =  document.querySelector("#animal-page");

function changeAniamlContent(x){
    if (pkg.continent == "NA"){
        //north american buttons
        talkBut.src = "img/northamerica/animal-page/TalkDefault_NA.svg";
        feedBut.src = "img/northamerica/animal-page/FeedDefault_NA.svg";
        quizBut.src = "img/northamerica/animal-page/QuizDefault_NA.svg";
        
        //the animal and background
        if (x == 1){
            theAnimal.src = "img/northamerica/Otter.svg";
            animalbg.style.backgroundImage = "url(img/northamerica/animal-page/OtterHabitat.svg)";
        }
        if (x == 2){
            theAnimal.src = "img/northamerica/Beaver.svg";
            animalbg.style.backgroundImage = "url(img/northamerica/animal-page/beaver-bg.svg)";
        }
        if (x == 3){
            theAnimal.src = "img/northamerica/jellyfish.svg";
             animalbg.style.backgroundImage = "url(img/northamerica/animal-page/jellyfish-bg.svg)";
        }
        if (x == 4){
            theAnimal.src = "img/northamerica/Orca.svg";
             animalbg.style.backgroundImage = "url(img/northamerica/animal-page/orca-bg.svg)";
        }
    }
    
    if (pkg.continent == "NP"){
        //north pole buttons
        talkBut.src = "img/northamerica/animal-page/TalkDefault_NA.svg";
        feedBut.src = "img/northamerica/animal-page/FeedDefault_NA.svg";
        quizBut.src = "img/northamerica/animal-page/QuizDefault_NA.svg";
        
        //the animal
        if (x == 1){
            theAnimal.src = "img/northpole/walrus.svg";
            animalbg.style.backgroundImage = "url(img/northpole/animal-page/walrus-bg.svg)";
        }
        if (x == 2){
            theAnimal.src = "img/northpole/bear.svg";
            animalbg.style.backgroundImage = "url(img/northpole/animal-page/bear-bg.svg)";
        }
        if (x == 3){
            theAnimal.src = "img/northpole/narwhal.svg";
            animalbg.style.backgroundImage = "url(img/northpole/animal-page/narwhal-bg.svg)";
        }
        if (x == 4){
            theAnimal.src = "img/northpole/beluga.svg";
            animalbg.style.backgroundImage = "url(img/northpole/animal-page/beluga-bg.svg)";
        }
    }
    
    if (pkg.continent == "Amzn"){
        //Amazon buttons
        talkBut.src = "img/northamerica/animal-page/TalkDefault_NA.svg";
        feedBut.src = "img/northamerica/animal-page/FeedDefault_NA.svg";
        quizBut.src = "img/northamerica/animal-page/QuizDefault_NA.svg";
        
        //the animal
        if (x == 1){
            theAnimal.src = "img/amazon/crocodile.svg";
             animalbg.style.backgroundImage = "url(img/amazon/animal-page/crocodile-bg.svg)";
        }
        if (x == 2){
            theAnimal.src = "img/amazon/crab.svg";
            animalbg.style.backgroundImage = "url(img/amazon/animal-page/crab-bg.svg)";
        }
        if (x == 3){
            theAnimal.src = "img/amazon/dolphin.svg";
            animalbg.style.backgroundImage = "url(img/amazon/animal-page/dolphin-bg.svg)";
        }
        if (x == 4){
            theAnimal.src = "img/amazon/manatee.svg";
            animalbg.style.backgroundImage = "url(img/amazon/animal-page/manatee-bg.svg)";
        }
    }
    
    if (pkg.continent == "Ant"){
        //Antarctica buttons
        talkBut.src = "img/northamerica/animal-page/TalkDefault_NA.svg";
        feedBut.src = "img/northamerica/animal-page/FeedDefault_NA.svg";
        quizBut.src = "img/northamerica/animal-page/QuizDefault_NA.svg";
        
        //the animal
        if (x == 1){
            console.log("got otter");
            theAnimal.src = "img/antarctica/penguin.svg";
            animalbg.style.backgroundImage = "url(img/antarctica/animal-page/penguin-bg.svg)";
        }
        if (x == 2){
            theAnimal.src = "img/antarctica/seal.svg";
            animalbg.style.backgroundImage = "url(img/antarctica/animal-page/seal-bg.svg)";
        }
        if (x == 3){
            theAnimal.src = "img/antarctica/squid.svg";
            animalbg.style.backgroundImage = "url(img/antarctica/animal-page/squid-bg.svg)";
        }
        if (x == 4){
            theAnimal.src = "img/antarctica/whale.svg";
            animalbg.style.backgroundImage = "url(img/antarctica/animal-page/whale-bg.svg)";
        }
    }
}





//--------  Aniaml Page ------------//

var foodMenu = document.querySelector(".food");
var But = 0;
var otterTalk = [ "Hi! I'm Ophie the Otter!", "I have the thickest fur of all animals.", "I like to carry one small rock with me all the time.", "I use rocks to smash open shells.", "I keep the same rock with me for my whole life!", "When I go to sleep, I like to wrap myself and my family in seaweed and float together with them."]

var mtimer = null;

talkBut.addEventListener("touchstart", function(){
     talkBut.src = "img/northamerica/animal-page/TalkSelected_NA.svg";
     
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
    talkBut.src = "img/northamerica/animal-page/TalkDefault_NA.svg";
 });


feedBut.addEventListener("click", function() {
    if(But == 0){
        console.log("clickagain");
        feedBut.src = "img/northamerica/animal-page/FeedSelected_NA.svg";
        foodMenu.style.display = "block";
        But = 1;
    } else {
        console.log("clickme");
        feedBut.src = "img/northamerica/animal-page/FeedDefault_NA.svg";
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
