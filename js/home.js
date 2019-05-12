//----- State ----- //
var pkg = {
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
    },
    quiz: { // 1-4
        //NA
        otter: [],
        beaver: [],
        jellyfish: [],
        orca: [],
        //NP
        walrus: [],
        bear: [],
        narwhal: [],
        beluga: [],
        //Ant
        penguin: [],
        seal: [],
        whale: [],
        squid: [],
        //Amzn
        crocodile: [],
        crab: [],
        dolphin: [],
        manatee: []
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
                changeLnOContent(pkg.continent);
                toLnOUI();
            }
            if (value == "animal"){
                toAnimalUI(value);
            }
            if (value == "quiz"){
                toQuizUI();
                quizContent();
            }
        }
        
        if(props == "continent"){
            //changeLnOContent(value);
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
            pkg.animalvisit.penguin = 1;
        }
        if(x==2){
            pkg.animalvisit.seal = 1;
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

function toQuiz(){
    pkg.page = "quiz";
    proxyPkg.page = pkg.page;
    save();
}

function toLast(){
    if (pkg.page == "map"){
        toHome();
    } else if (pkg.page == "lno"){
        toMap();
    } else if (pkg.page == "animal"){
        toLnO(pkg.continent);
    } else if (pkg.page == "quiz"){
        toAnimal(pkg.animal);
    }   
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
    document.querySelector(".back-button").style.display = "none";
    document.querySelector(".hbg-menu").style.display = "none";
    document.querySelector(".hbg-menu-list").style.top = "-100vh";
    document.querySelector(".food").style.display = "none";
    document.querySelector(".homepage").style.left = "0px";
    document.querySelector(".quiz-page").style.left = "100%";
    closePopup();
}

function toMapUI (){
    document.querySelector(".homepage").style.left = "-100%";
    document.querySelector(".map-page").style.left = "0px";
    document.querySelector(".L-n-O-page").style.left = "100%";
    document.querySelector(".back-button").style.display = "block";
    document.querySelector(".hbg-menu").style.display = "block";
    document.querySelector(".hbg-menu-list").style.top = "-100vh";
    document.querySelector("#animal-page").style.left = "100%";
    document.querySelector(".quiz-page").style.left = "100%";
    closePopup();
}

function toTutorial(){
    window.location.href = "./ATutorial/tutorial-welcome.html";
}

function toLnOUI(){
    document.querySelector(".L-n-O-page").style.left = "0px";
    document.querySelector(".homepage").style.left = "-100%";
    document.querySelector(".map-page").style.left = "-100%";
    document.querySelector(".back-button").style.display = "block";
    document.querySelector(".hbg-menu-list").style.top = "-100vh";
    document.querySelector("#animal-page").style.left = "100%";
    document.querySelector(".food").style.display = "none";
    document.querySelector(".quiz-page").style.left = "100%";
    closePopup();
}

function toAnimalUI(x){
    document.querySelector(".homepage").style.left = "-100%";
    document.querySelector(".map-page").style.left = "-100%";
    document.querySelector(".L-n-O-page").style.left = "-100%";
    document.querySelector(".back-button").style.display = "block";
    document.querySelector(".hbg-menu").style.display = "block";
    document.querySelector(".hbg-menu-list").style.top = "-100vh";
    document.querySelector("#animal-page").style.left = "0px";
    document.querySelector(".quiz-page").style.left = "100%";
    closePopup();
}

function toQuizUI(){
    document.querySelector(".L-n-O-page").style.left = "-100%";
    document.querySelector(".homepage").style.left = "-100%";
    document.querySelector(".map-page").style.left = "-100%";
    document.querySelector(".back-button").style.display = "block";
    document.querySelector(".hbg-menu-list").style.top = "-100vh";
    document.querySelector(".quiz-page").style.left = "0px";
    document.querySelector("#animal-page").style.left = "-100%";
    document.querySelector(".food").style.display = "none";
    closePopup();
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
    animal4 = document.querySelector(".animal4 img"),
    animal1but = document.querySelector(".animal1 button"),
    animal2but = document.querySelector(".animal2 button"),
    animal3but = document.querySelector(".animal3 button"),
    animal4but = document.querySelector(".animal4 button"),
    clouds = document.querySelectorAll(".cloud"),
    land = document.getElementById("land"),
    ocean = document.getElementById("ocean"),
    ppbut = document.querySelectorAll(".ppbut");

function changeLnOContent(x){
    
    if (x == "NA"){
        // bg
        document.querySelector(".L-n-O-pagewrap").style.backgroundImage = "url(img/northamerica/NA-bg.svg)";
        sun.style.display = "none";
        var x;
        for (x=0;x<clouds.length;x++){
            clouds[x].style.display = "block";
        }
        land.src = "img/northamerica/land-button.svg";
        ocean.src = "img/northamerica/ocean-button.svg";
        // button colours
        var i;
        for (i=0;i<ppbut.length;i++){
        ppbut[i].style.backgroundColor = "#F78330";
        }
        animal1but.innerHTML = "Predator";
        animal2but.innerHTML = "Prey";
        animal3but.innerHTML = "Prey";
        animal4but.innerHTML = "Predator";
        // animals
        if(pkg.animalvisit.otter == 1){
            animal1.src = "img/northamerica/Otter.svg";
        } else if (pkg.animalvisit.otter == 0){
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
        document.querySelector(".L-n-O-pagewrap").style.backgroundImage = "url(img/northpole/NP-bg.svg)";
        sun.style.display = "block";
        var x;
        for (x=0;x<clouds.length;x++){
            clouds[x].style.display = "block";
        }
        land.src = "img/northpole/land-button.svg";
        ocean.src = "img/northpole/ocean-button.svg";
        // button colours
        var i;
        for (i=0;i<ppbut.length;i++){
        ppbut[i].style.backgroundColor = "#45ABE1";
        }
        animal1but.innerHTML = "Prey";
        animal2but.innerHTML = "Predator";
        animal3but.innerHTML = "Predator";
        animal4but.innerHTML = "Prey";
        // animals
        if(pkg.animalvisit.walrus == 1){
            animal1.src = "img/northpole/walrus.svg";
        } else {
            animal1.src = "img/northpole/walrus-silouette.svg";
        }
        if(pkg.animalvisit.bear == 1){
            animal2.src = "img/northpole/bear.svg";
        } else {
            animal2.src = "img/northpole/bear-silouette.svg";
        }
        if(pkg.animalvisit.narwhal == 1){
            animal3.src = "img/northpole/narwhal.svg";
        } else {
            animal3.src = "img/northpole/narwhal-silouette.svg";
        }
        if(pkg.animalvisit.beluga == 1){
            animal4.src = "img/northpole/beluga.svg";
        } else {
            animal4.src = "img/northpole/beluga-silouette.svg";
        } 
    }
    
    if (x == "Ant"){
        // bg
        document.querySelector(".L-n-O-pagewrap").style.backgroundImage = "url(img/antarctica/Antarctica-bg.svg)";
        sun.style.display = "block";
        var x;
        for (x=0;x<clouds.length;x++){
            clouds[x].style.display = "block";
        }
        land.src = "img/antarctica/land-button.svg";
        ocean.src = "img/antarctica/ocean-button.svg";
        // button colours
        var i;
        for (i=0;i<ppbut.length;i++){
        ppbut[i].style.backgroundColor = "#8A77B5";
        }
        animal1but.innerHTML = "Predator";
        animal2but.innerHTML = "Predator";
        animal3but.innerHTML = "Prey";
        animal4but.innerHTML = "Predator";
        // animals
        if(pkg.animalvisit.penguin == 1){
            animal1.src = "img/antarctica/penguin.svg";
        } else {
            animal1.src = "img/antarctica/penguin-silouette.svg";
        }
        if(pkg.animalvisit.seal == 1){
            animal2.src = "img/antarctica/seal.svg";
        } else {
            animal2.src = "img/antarctica/seal-silouette.svg";
        }
        if(pkg.animalvisit.squid == 1){
            animal3.src = "img/antarctica/squid.svg";
        } else {
            animal3.src = "img/antarctica/squid-silouette.svg";
        }
        if(pkg.animalvisit.whale == 1){
            animal4.src = "img/antarctica/whale.svg";
        } else {
            animal4.src ="img/antarctica/whale-silouette.svg";
        } 
    }
    
    if (x == "Amzn"){
        // bg
        document.querySelector(".L-n-O-pagewrap").style.backgroundImage = "url(img/amazon/Amazon-bg.svg)";
        sun.style.display = "block";
        var x;
        for (x=0;x<clouds.length;x++){
            clouds[x].style.display = "none";
        }
        land.src = "img/amazon/land-button.svg";
        ocean.src = "img/amazon/ocean-button.svg";
        // button colours
        var i;
        for (i=0;i<ppbut.length;i++){
        ppbut[i].style.backgroundColor = "#5FD92B";
        }
        animal1but.innerHTML = "Predator";
        animal2but.innerHTML = "Predator";
        animal3but.innerHTML = "Prey";
        animal4but.innerHTML = "Prey";
        // animals
        if(pkg.animalvisit.crocodile == 1){
            animal1.src = "img/amazon/crocodile.svg";
        } else {
            animal1.src = "img/amazon/crocodile-silouette.svg";
        }
        if(pkg.animalvisit.crab == 1){
            animal2.src = "img/amazon/crab.svg";
        } else {
            animal2.src = "img/amazon/crab-silouette.svg";
        }
        if(pkg.animalvisit.dolphin == 1){
            animal3.src = "img/amazon/dolphin.svg";
        } else {
            animal3.src = "img/amazon/dolphin-silouette.svg";
        }
        if(pkg.animalvisit.manatee == 1){
            animal4.src = "img/amazon/manatee.svg";
        } else {
            animal4.src ="img/amazon/manatee-silouette.svg";
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
    animalbg =  document.querySelector("#animal-page"),
    quizyes = document.querySelector(".quiz-popup button:nth-child(3)");
    

function changeAniamlContent(x){
    if (pkg.continent == "NA"){
        //theme
        talkBut.src = "img/northamerica/animal-page/TalkDefault_NA.svg";
        feedBut.src = "img/northamerica/animal-page/FeedDefault_NA.svg";
        quizBut.src = "img/northamerica/animal-page/QuizSelected_NA.svg";
        speech.style.border = "3px solid #F78330";
        document.querySelector(".foodMenu").style.border = "3px solid #F78330";
        quizyes.style.backgroundColor = "#F78330";
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
        //theme 
        talkBut.src = "img/northpole/TalkDefault_NP.svg";
        feedBut.src = "img/northpole/FeedDefault_NP.svg";
        quizBut.src = "img/northpole/Quiz_NP.svg";
        speech.style.border = "3px solid #45ABE1";
        document.querySelector(".foodMenu").style.border = "3px solid #45ABE1";
        quizyes.style.backgroundColor = "#45ABE1";
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
        //theme
        talkBut.src = "img/amazon/TalkDefault_AZ.svg";
        feedBut.src = "img/amazon/FeedDefault_AZ.svg";
        quizBut.src = "img/amazon/Quiz_AZ.svg";
        speech.style.border = "3px solid #5FD92B";
        document.querySelector(".foodMenu").style.border = "3px solid #5FD92B";
        quizyes.style.backgroundColor = "#5FD92B";
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
        //theme
        talkBut.src = "img/antarctica/TalkDefault_AT.svg";
        feedBut.src = "img/antarctica/FeedDefault_AT.svg";
        quizBut.src = "img/antarctica/Quiz_AT.svg";
        speech.style.border = "3px solid #8A77B5";
        document.querySelector(".foodMenu").style.border = "3px solid #8A77B5";
        quizyes.style.backgroundColor = "#8A77B5";
        //the animal
        if (x == 1){
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

// ------- Animal talk, feed, quiz
var foodMenu = document.querySelector(".food"),
    fish = document.querySelector("#fish"),
    fruit = document.querySelector("#fruit"),
    seaweed = document.querySelector("#seaweed"),
    plankton = document.querySelector("#plankton"),
    speech = document.querySelector("#speechbubble");

/* North America Animals */ 
var otterTalk = [ "Hi! I'm Ophie the Otter!", "I have the thickest fur of all animals.", "I like to carry one small rock with me all the time.", "I use rocks to smash open shells.", "I keep the same rock with me for my whole life!", "When I go to sleep, I like to wrap myself and my family in seaweed and float together with them."]

var beaverTalk = ["Hello! I'm Bev the Beaver.", "I do most of my work during the evening", "I slap the water with my tail to tell my family when there is danger.", "I don't see well, but I can see underwater!", "I can stay underwater for up to 15 minutes.", "I make dams by chewing on trees and moving them around."]

var jellyfishTalk = ["Hey! I'm Belly the Jellyfish.", "Jellyfish can be as small as a peanut, or as big as a human!", "Did you know, we don't have brains!", "Some jellyfish can sting, and some are poisonous", "We are transluscent! That means we're almost see-through."]

var orcaTalk = ["Hello, I'm Ollie the Orca.", "Another name for us is the 'Killer Whale'", "We might look cute, but we're one of the most powerful predators in the world!", "We're not a whale or a fish! We're a type of dolphin.", "We can't smell anything!", "We use our sense of sight and hearing to help us hunt for food."]

/*Antartica Animals*/

var penguinTalk = ["Hi! I'm Peggy the Emperor Penguin", "We are the tallest and heaviest of all penguins.", "When I was little, my parents would take turns getting food and taking care of me.", "We're the only penguins that breed in the winter.", "We can dive deep! We can swim up to 500 metres underwater.", "We can stay underwater for as long as 22 minutes."]

var sealTalk = ["Hello! My name is Nelly, I'm a seal.", "I spend most of my time in the water.", "We have lots of blubber, which helps us stay warm in the cold", "We're colourblind, but we see blue and green really well!", "We sleep underwater, but we come up to breathe sometimes.", "Underwater, we have really good hearing."]

var whaleTalk = ["Hello, I'm Flo the Blue Whale.", "I'm the largest animal in the world!", "We travel in groups called 'pods'.", "When I want to talk to my friends, I make noises such as clicks, whistles and pulsed calls.", "We might be big, but we eat a lot of small things, like krill.", "I look like a fish, but I don't lay eggs."]

var squidTalk = ["Hi, I'm Squishy, the Squid.", "I can change colour to hide from my predators.", "When I'm in danger, I shoot a cloud of ink as a distraction.", "Our arms are called tentacles.", "If we lose an arm, we can grow it back!", "Sometimes we're mistaken for our cousin, the octopus."]

/* North Pole Animals */
var walrusTalk = ["Hello, I'm Waldo. I'm a Walrus.", "Both boy and girl walruses have large tusks.", "I'm very social, I love hanging out with my friends.", "We use our tusks to cut ice and defend ourselves.", "Most of us can live up to 40 years old.", "We're really heavy, we can weigh up to 4,000 pounds"]

var bearTalk = ["Hi, I'm Pablo, the Polar Bear!", "My fur might look white, but it's actually transparent.", "My skin under my fur is black in colour.", "I can swim in the water for several days at a time.", "I spend a lot of time on the ice to look for food.", "We have a thick layer of blubber to keep us warm."]

var narwhalTalk = ["Hello! My name is Nora, the Narwhal.", "My tusk is my left tooth!", "My tooth spirals and grows for my whole life!", "Not all narwhals have tusks, we are all different.", "Our tusks can grow up to 10 feet long.", "Our skin starts off dark, and turns white as we get older."]

var belugaTalk = ["Hi! I'm Bobby the Beluga.", "I can swim backwards! It's a lot of fun.", "When we are born, our skin is grey.", "I like to make funny noises, like whistling, and clicking.", "The bump on our heads is called a 'melon'!", "When I go exploring, I use something called 'echolocation' to help me find my way in the water."]

/* Amazon Animals */
var crabTalk = ["Hello, I'm Cas, the Coconut Crab.", "Sometimes we're called the 'robber crab', because we take things without asking.", "I don't like living with others. I need my privacy!", "We're called coconut crabs because we like to eat and hide in coconuts.", "We have a strong sense of smell.", "We're nocturnal, that means we like to hunt at night."]

var crocodileTalk = ["Hi! My name is Rocky. I'm a Crocodile!", "We have very good night vision. We can see clearly in the dark.", "We cry when we eat, not because we're sad, it's because we don't chew our food.", "We can weigh up to 1000 pounds!", "We lay lots of eggs, anywhere between 20 and 80 eggs.", "We take care of our eggs for 3 months before they hatch."]

var manateeTalk = ["Hello, I'm Manny the Manatee. Nice to meet you.", "I spend half my day eating.", "We like to hang out in warm water, we don't have much protection against the cold.", "We might be called 'sea cows', but we're actually related to the elephant!", "Our brains are smooth, not bumpy like yours!", "Our teeth fall out in the front and grow at the back all the time."]

var dolphinTalk = ["Hey! I'm Wisp, the Amazon River Dolphin!", "We have 2 stomachs, one for storing food and the other for digesting food.", "We talk to our friends and family by whistling and clicking.", "I'm really smart. Our brains are 40% bigger than a human's brain.", "There are lots of legends about us, some cultures think we are magical!", "I like being alone. Sometimes I'm with 2-4 of my other friends, but I rarely travel in large groups."]

var negRes = ["No, thank you.", "I don't eat that.", "I don't like those!", "I'm sure someone else would like that."];
var posRes = ["Mmm! Yummy!", "Thank you!", "My favourite! Thanks!", "I like this!"]; 


var mtimer = null;
var But = 0;

function timing(){
    if (mtimer == null){
            mtimer = setTimeout(function() {
            speech.style.display = "none";
            mtimer = null;
        }, 5000);
    } else {
        clearTimeout(mtimer);
        mtimer = setTimeout(function() {
            speech.style.display = "none";
            },5000);
    }
}
talknum = 0;
function talk1(){
    //button look
     console.log(pkg);
    if (pkg.continent == "NA"){
        talkBut.src = "img/northamerica/animal-page/TalkSelected_NA.svg";
    } else if (pkg.continent == "Amzn"){
        console.log("amazon talk selected");
        talkBut.src = "img/amazon/TalkSelected_AZ.svg";
    } else if (pkg.continent == "Ant"){
        talkBut.src = "img/antarctica/TalkSelected_AT.svg";
    } else if (pkg.continent == "NP"){
        talkBut.src = "img/northpole/TalkSelected_NP.svg";
        console.log("northpole talk selected");
    }
    //sentences
    var talkRes;
    if (pkg.continent == "NA"){
        if(pkg.animal == 1){
            talkRes = otterTalk;
        } else if (pkg.animal == 2){
            talkRes = beaverTalk;
        } else if (pkg.animal == 3){
            talkRes = jellyfishTalk;
        } else if (pkg.animal == 4){
            talkRes = orcaTalk;
        }
    } else if (pkg.continent == "NP"){
        if(pkg.animal == 1){
            talkRes = walrusTalk;
        } else if (pkg.animal == 2){
            talkRes = bearTalk;
        } else if (pkg.animal == 3){
            talkRes = narwhalTalk;
        } else if (pkg.animal == 4){
            talkRes = belugaTalk;
        }
    } else if (pkg.continent == "Amzn"){
        if(pkg.animal == 1){
            talkRes = crocodileTalk;
        } else if (pkg.animal == 2){
            talkRes = crabTalk;
        } else if (pkg.animal == 3){
            talkRes = dolphinTalk;
        } else if (pkg.animal == 4){
            talkRes = manateeTalk;
        }
    } else if (pkg.continent == "Ant"){
        if(pkg.animal == 1){
            talkRes = penguinTalk;
        } else if (pkg.animal == 2){
            talkRes = sealTalk;
        } else if (pkg.animal == 3){
            talkRes = squidTalk;
        } else if (pkg.animal == 4){
            talkRes = whaleTalk;
        }
    } 
    console.log(pkg);
        if(talknum == talkRes.length){
            talknum = 0;
        }
    speech.innerHTML = talkRes[talknum];
    talknum = talknum+1;
    speech.style.display = "flex";
    timing();
}

function talk2(){
    if(pkg.continent == "NA"){
       talkBut.src = "img/northamerica/animal-page/TalkDefault_NA.svg";
    } else if (pkg.continent == "Amzn"){
        talkBut.src = "img/amazon/TalkDefault_AZ.svg";
    } else if (pkg.continent == "Ant"){
        talkBut.src = "img/antarctica/TalkDefault_AT.svg";
    } else if (pkg.continent == "NP"){
        talkBut.src = "img/northpole/TalkDefault_NP.svg";
    }
    
}


function feed(){
    if(But == 0){
        if(pkg.continent == "NA"){
            feedBut.src = "img/northamerica/animal-page/FeedSelected_NA.svg";
        } else if (pkg.continent == "NP"){
        feedBut.src = "img/northpole/FeedSelected_NP.svg";
        } else if (pkg.continent == "Amzn"){
        feedBut.src = "img/amazon/FeedSelected_AZ.svg";
        } else if (pkg.continent == "Ant"){
        feedBut.src = "img/antarctica/FeedSelected_AT.svg";
        }
        foodMenu.style.display = "block";
        But = 1;
    } else {
        if(pkg.continent == "NA"){
            feedBut.src = "img/northamerica/animal-page/FeedDefault_NA.svg";
        } else if (pkg.continent == "NP"){
        feedBut.src = "img/northpole/FeedDefault_NP.svg";
        } else if (pkg.continent == "Amzn"){
        feedBut.src = "img/amazon/FeedDefault_AZ.svg";
        } else if (pkg.continent == "Ant"){
        feedBut.src = "img/antarctica/FeedDefault_AT.svg";
        }
        foodMenu.style.display = "none";
        But = 0;
    }
}


function sayyes(){
    var yes = posRes[Math.floor(Math.random() * posRes.length)];
    speech.innerHTML = yes;
    speech.style.display = "flex";
    timing();
}

function sayno(){
    var no = negRes[Math.floor(Math.random() * negRes.length)];
    speech.style.display = "flex";
    speech.innerHTML = no;
    timing();
}

function foodres(elid){
    if(elid == "fish"){
        if(
            (pkg.continent == "NA" && (pkg.animal == 1 || pkg.animal == 3 || pkg.animal == 4)) ||
            pkg.continent == "NP" ||
            (pkg.continent == "Amzn" && (pkg.animal == 1||pkg.animal == 3)) ||
            (pkg.continent == "Ant" && (pkg.animal == 1 || pkg.animal ==2 || pkg.animal == 3))
            ){
           sayyes();
           } else {
               sayno();
           }
    } else if (elid == "fruit"){
        if(pkg.continent == "Amzn" && pkg.animal == 2){
           sayyes();
           } else {
               sayno();
           }
    } else if (elid == "seaweed"){
        if(
            (pkg.continent == "NA" && pkg.animal == 2)||
            (pkg.continent == "Amzn" && pkg.animal == 4)
            ){
           sayyes();
           } else {
               sayno();
           }
    } else if (elid == "plankton"){
         if(
            (pkg.continent == "NA" && pkg.animal == 3) ||
            (pkg.continent == "NP" && pkg.animal == 4)||
            (pkg.continent == "Ant" && (pkg.animal == 1 || pkg.animal ==3))
            ){
           sayyes();
           } else {
               sayno();
           }
    } 
}

var popup = document.querySelector(".quiz-popup");

function openPopup(){
    popup.style.display = "block";
}

function closePopup(){
    popup.style.display = "none";
}

//------ Quiz Page --------//

// -- Quiz Questions----
// NORTH AMERICAN ANIMALS //
var OtterQuiz = [
    {
        q:"What do I eat?",
        a:2,
        but1:"<img src='img/northamerica/animal-page/Fruit.svg'/>",
        but2:"<img src='img/northamerica/animal-page/Fish.svg'/>",
        but3:"<img src='img/northamerica/animal-page/Plankton.svg'/>",
        but4:"<img src='img/northamerica/animal-page/Seaweed.svg'/>"
    },
    {
        q: "What do I like to keep?",
        a: 3,
        but1: "Fish",
        but2: "Baby otters",
        but3: "Rocks",
        but4: "Branches"
    },
    {
        q: "Where do I like to sleep on?",
        a: 1,
        but1: "Seaweed",
        but2: "Rocks",
        but3: "The beach",
        but4: "Underwater"
    },
    {
        q: "What is the texture of my fur?",
        a: 2,
        but1: "Thin",
        but2: "Thick",
        but3: "Smooth",
        but4: "Rough"
    }
]

var BeaverQuiz = [
    {
        q:"What time of day do I work?",
        a:3,
        but1:"Morning",
        but2:"Afternoon",
        but3:"Evening",
        but4:"Midnight"
    },
    {
        q: "When do I slap my tail?",
        a: 2,
        but1: "When I'm excited",
        but2: "When I'm in danger",
        but3: "When I wake up",
        but4: "Before I make a dam"
    },
    {
        q: "How long can I stay under the water?",
        a: 1,
        but1: "15 minutes",
        but2: "15 seconds",
        but3: "15 hours",
        but4: "15 milliseconds"
    },
    {    
        q: "How do I make dams?",
        a: 1,
        but1: "I chew on trees",
        but2: "I move rocks",
        but3: "I slap mud in place",
        but4: "I use leaves"
    }
]

var JellyfishQuiz = [
    {
        q:"What organ am I missing?",
        a:2,
        but1:"Stomach",
        but2:"Brain",
        but3:"Intestines",
        but4:"Nose"
    },
    {
        q: "How big are the smallest jellyfish?",
        a: 2,
        but1: "The size of a marble",
        but2: "The size of a peanut",
        but3: "The size of your hand",
        but4: "The size of an iPhone"
    },
    {
        q: "Most jellyfish sting, but some jellyfish are also _________",
        a: 1,
        but1: "Poisonous",
        but2: "Invisible",
        but3: "Super fast",
        but4: "Smelly"
    },
    {    
        q: "What do we like to eat?",
        a: 3,
        but1:"<img src='img/northamerica/animal-page/Fruit.svg'/>",
        but2:"<img src='img/northamerica/animal-page/Fish.svg'/>",
        but3:"<img src='img/northamerica/animal-page/Plankton.svg'/>",
        but4:"<img src='img/northamerica/animal-page/Seaweed.svg'/>"
    }
]

var OrcaQuiz = [
    {
        q:"What another nickname for Orcas?",
        a:1,
        but1:"Killer Whales",
        but2:"Dolphins",
        but3:"Dark Whales",
        but4:"Hunting Whales"
    },
    {
        q: "We don't have a sense of __________",
        a: 3,
        but1: "Touch",
        but2: "Sight",
        but3: "Smell",
        but4: "Hearing"
    },
    {
        q: "Orcas are a type of __________",
        a: 4,
        but1: "Fish",
        but2: "Reptile",
        but3: "Whale",
        but4: "Dolphin"
    },
    {    
        q: "Which senses help us hunt for food?",
        a: 1,
        but1: "Seeing and hearing",
        but2: "Hearing and feeling",
        but3: "Feeling and smelling",
        but4: "Smelling and hearing"
    }
]

// ANTARCTICA ANIMALS //
var PenguinQuiz = [
    {
        q:"What season do we breed?",
        a:4,
        but1:"Summer",
        but2:"Autumn",
        but3:"Spring",
        but4:"Winter"
    },
    {
        q: "How far can we swim underwater?",
        a: 4,
        but1: "100 metres",
        but2: "10 metres",
        but3: "50 metres",
        but4: "500 metres"
    },
    {
        q: "How long can we stay underwater?",
        a: 2,
        but1: "10 minutes",
        but2: "22 minutes",
        but3: "5 minutes",
        but4: "30 minutes"
    },
    {   
        q: "Who takes care of the baby penguins?",
        a: 1,
        but1: "Mom and dad penguin",
        but2: "Mom penguin only",
        but3: "Dad penguin only",
        but4: "They take care of themselves"
    }
]

var SealQuiz = [
    {
        q:"Where do I spend most of my time?",
        a:1,
        but1:"Underwater",
        but2:"On the ice",
        but3:"On rocky shores",
        but4:"In the snow"
    },
    {
        q: "What colours do we see best?",
        a: 3,
        but1: "Red and green",
        but2: "Purple and blue",
        but3: "Blue and green",
        but4: "Blue and red"
    },
    {
        q: "Underwater, we have really good ___________",
        a: 4,
        but1: "Taste",
        but2: "Smell",
        but3: "Sight",
        but4: "Hearing"
    },
    {    
        q: "What keeps us warm in the cold?",
        a: 2,
        but1: "Fur",
        but2: "Blubber",
        but3: "Water",
        but4: "Ice"
    }
]

var WhaleQuiz = [
    {
        q:"What are groups of whales called?",
        a:3,
        but1:"Herd",
        but2:"Gang",
        but3:"Pods",
        but4:"Colony"
    },
    {
        q: "What is one of the noises I make when I talk to other whales?",
        a: 2,
        but1: "Yell",
        but2: "Whistle",
        but3: "Snort",
        but4: "Mumble"
    },
    {
        q: "Which animal is larger than a blue whale?",
        a: 4,
        but1: "Narwhals",
        but2: "Giant squids",
        but3: "Belgua whales",
        but4: "None of them!"
    },
    {    
        q: "What my favourite food?",
        a: 3,
        but1:"<img src='img/northamerica/animal-page/Fruit.svg'/>",
        but2:"<img src='img/northamerica/animal-page/Fish.svg'/>",
        but3:"<img src='img/northamerica/animal-page/Plankton.svg'/>",
        but4:"<img src='img/northamerica/animal-page/Seaweed.svg'/>"
    }
]

var SquidQuiz = [
    {
        q:"Which animal is related to the squid?",
        a:2,
        but1:"Jellyfish",
        but2:"Octopus",
        but3:"Sea Anenome",
        but4:"Starfish"
    },
    {
        q: "What do we do when we are in danger?",
        a: 2,
        but1: "Use their tentacles",
        but2: "Shoot ink",
        but3: "Run away",
        but4: "Stay still"
    },
    {
        q: "How do squids hide from our predators?",
        a: 1,
        but1: "They change colour",
        but2: "They hide between rocks",
        but3: "They hide with other animals",
        but4: "They hide under the sand"
    },
    {    
        q: "What happens when we lose an arm?",
        a: 2,
        but1:"It's gone forever",
        but2:"It will grow back",
        but3:"It will grow back with an extra arm",
        but4:"We can't swim anymore"
    }
]

//NORTH POLE ANIMALS//
var WalrusQuiz = [
    {
        q:"How long can walruses live for?",
        a:3,
        but1:"50 years",
        but2:"20 years",
        but3:"40 years",
        but4:"10 years"
    },
    {
        q: "Walruses can weigh up to __________",
        a: 1,
        but1: "4,000 pounds",
        but2: "100 pounds",
        but3: "20,000 pounds",
        but4: "10,000 pounds"
    },
    {
        q: "What do walruses like to eat?",
        a: 2,
        but1:"<img src='img/northamerica/animal-page/Fruit.svg'/>",
        but2:"<img src='img/northamerica/animal-page/Fish.svg'/>",
        but3:"<img src='img/northamerica/animal-page/Plankton.svg'/>",
        but4:"<img src='img/northamerica/animal-page/Seaweed.svg'/>"
    },
    {    
        q: "What do walruses use their tusks for?",
        a: 4,
        but1:"To scratch each other's backs",
        but2:"To climb rocks",
        but3:"To hunt for food",
        but4:"To cut ice"
    }
]

var BearQuiz = [
    {
        q:"What colour is our fur?",
        a:4,
        but1:"Black",
        but2:"Grey",
        but3:"White",
        but4:"Transparent"
    },
    {
        q: "How long can I swim for?",
        a: 2,
        but1: "Several hours",
        but2: "Several days",
        but3: "A few minutes",
        but4: "A few hours"
    },
    {
        q: "Where do we usually look for food?",
        a: 3,
        but1:"Underwater",
        but2:"On rocks",
        but3:"On ice",
        but4:"In the snow"
    },
    {    
        q: "What colour is my skin?",
        a: 4,
        but1:"White",
        but2:"Brown",
        but3:"Grey",
        but4:"Black"
    }
]


var NarwhalQuiz = [
    {
        q:"How long does my tooth grow for?",
        a:4,
        but1:"10 years",
        but2:"5 years",
        but3:"Until they are old",
        but4:"My whole life"
    },
    {
        q: "What colour does my skin become?",
        a: 3,
        but1: "Black",
        but2: "Pink",
        but3: "White",
        but4: "Blue"
    },
    {
        q: "My tusk is my ______ tooth",
        a: 2,
        but1:"Right",
        but2:"Left",
        but3:"Front",
        but4:"Back"
    },
    {    
        q: "My tooth can grow up to be _______ long.",
        a: 1,
        but1:"10 feet",
        but2:"5 feet",
        but3:"2 feet",
        but4:"15 feet"
    }
]

var BelugaQuiz = [
    {
        q:"What colour was my skin when I was born?",
        a:1,
        but1:"Grey",
        but2:"White",
        but3:"Blue",
        but4:"Black"
    },
    {
        q: "Name a noise I make when I talk to my friends.",
        a: 2,
        but1: "Yelling",
        but2: "Clicking",
        but3: "Squealing",
        but4: "Burping"
    },
    {
        q: "What is the bump on my head called?",
        a: 3,
        but1:"Brain",
        but2:"Bump",
        but3:"Melon",
        but4:"Noggin"
    },
    {    
        q: "What helps me find my way through water?",
        a: 4,
        but1:"Snapping",
        but2:"Seeing",
        but3:"Feeling",
        but4:"Echolocation"
    }
]

// AMAZON ANIMALS //
var CrabQuiz = [
    {
        q:"What's another name for the Coconut crab?",
        a:4,
        but1:"Cococrab",
        but2: "Hermit Crab",
        but3: "Fruity Crab",
        but4:"Robber Crab"
    },
    {
        q: "Do I like living with others?",
        a: 2,
        but1: "Yes",
        but2: "No",
        but3: "Only with friends",
        but4: "Only with family"
    },
    {
        q: "What's my favourite food?",
        a: 1,
        but1:"<img src='img/northamerica/animal-page/Fruit.svg'/>",
        but2:"<img src='img/northamerica/animal-page/Fish.svg'/>",
        but3:"<img src='img/northamerica/animal-page/Plankton.svg'/>",
        but4:"<img src='img/northamerica/animal-page/Seaweed.svg'/>"
    },   
    {
        q: "What time of day do we like to hunt?",
        a: 4,
        but1:"Morning",
        but2:"Evening",
        but3:"Afternoon",
        but4:"Night"
    }
]

var CrocodileQuiz = [
    {
        q:"How many eggs do Crocodiles lay?",
        a:3,
        but1:"10-20",
        but2: "30-40",
        but3: "20-80",
        but4:"50-100"
    },
    {
        q: "We can see very well in _________",
        a: 4,
        but1: "The day",
        but2: "The water",
        but3: "The fog",
        but4: "The dark"
    },
    {
        q: "How long do Crocodiles take care of their eggs?",
        a: 1,
        but1:"3 months",
        but2:"6 months",
        but3:"9 months",
        but4:"12 months"
    },
    {
        q: "Crocodiles _______ when they eat",
        a: 2,
        but1:"Chew",
        but2:"Cry",
        but3:"Breathe",
        but4:"Close their eyes"
    }
]

var ManateeQuiz = [
    {
        q:"Which animal are we related to?",
        a:3,
        but1:"Cows",
        but2: "Dolphins",
        but3: "Elephants",
        but4:"Seals"
    },
    {
        q: "What is a nickname for the manatee?",
        a: 4,
        but1: "Amazon Seal",
        but2: "Ocean dogs",
        but3: "Dugong",
        but4: "Sea Cows"
    },
    {
        q: "What is the texture of our brain?",
        a: 1,
        but1:"Smooth",
        but2:"Bumpy",
        but3:"Rough",
        but4:"Dry"
    },
    {
        q: "What do manatees like to eat?",
        a: 4,
        but1:"<img src='img/northamerica/animal-page/Fruit.svg'/>",
        but2:"<img src='img/northamerica/animal-page/Fish.svg'/>",
        but3:"<img src='img/northamerica/animal-page/Plankton.svg'/>",
        but4:"<img src='img/northamerica/animal-page/Seaweed.svg'/>"
    }
]

var DolphinQuiz = [
    {
        q:"How many stomachs do I have?",
        a:2,
        but1:"1",
        but2: "2",
        but3: "3",
        but4:"4"
    },
    {
        q: "How do dolphins talk?",
        a: 1,
        but1: "Whistling",
        but2: "Yelling",
        but3: "Laughing",
        but4: "Pulsed Calls"
    },
    {
        q: "My brain is __________ than a human brain!",
        a: 3,
        but1:"20% larger",
        but2:"20% smaller",
        but3:"40% larger",
        but4:"40% smaller"
    },
    {
        q: "Some legends say we are ________",
        a: 2,
        but1:"Evil",
        but2:"Magical",
        but3:"Healers",
        but4:"Mysterious"
    }
]


//--- Quiz UI ----
var qnum = 0,
    quizani = document.querySelector(".quiz-animal"),
    quizq = document.querySelector(".quiz-q"),
    abox = document.querySelectorAll(".quiz-a div"),
    but1 = document.querySelector(".quiz-but1"),
    but2 = document.querySelector(".quiz-but2"),
    but3 = document.querySelector(".quiz-but3"),
    but4 = document.querySelector(".quiz-but4");
var qresult = document.querySelector(".result");

function quizContent(){
    document.querySelector(".quiz-page").style.backgroundImage = "url(img/quiz-bg.svg)";
    
    
    
    if(pkg.continent == "NA"){
    //border colors
        var z;
        for (z=0;z<abox.length;z++){
        abox[z].style.border = "4px solid #F78330";
        }
        quizq.style.border = "4px solid #F78330";
    //animal
        if(pkg.animal == 1){
            quizani.src = "img/northamerica/Otter.svg";
            if (pkg.quiz.otter.length >=3){
                expert();
            } else {
                qresult.style.display = "none";
                pkg.quiz.otter = [];
                save();
                qnum = 0;
                qna();
            }
        }
        
        if(pkg.animal == 2){
            quizani.src = "img/northamerica/Beaver.svg";
            if (pkg.quiz.beaver.length >=3){
                expert();
            } else {
                qresult.style.display = "none";
                pkg.quiz.beaver = [];
                save();
                qnum = 0;
                qna();
            }
        }
        
        if(pkg.animal == 3){
            quizani.src = "img/northamerica/jellyfish.svg";
            if (pkg.quiz.jellyfish.length >=3){
                expert();
            } else {
                qresult.style.display = "none";
                pkg.quiz.jellyfish = [];
                save();
                qnum = 0;
                qna();
            }
        }
        
        if(pkg.animal == 4){
            quizani.src = "img/northamerica/Orca.svg";
            if (pkg.quiz.orca.length >=3){
                expert();
            } else {
                qresult.style.display = "none";
                pkg.quiz.orca = [];
                save();
                qnum = 0;
                qna();
            }
        }
    }
    
    
    if(pkg.continent == "NP"){
    //border colors
        var i;
        for (i=0;i<abox.length;i++){
        abox[i].style.border = "4px solid #45ABE1";
        }
        quizq.style.border = "4px solid #45ABE1";
    //animal
        if(pkg.animal == 1){
            quizani.src = "img/northpole/walrus.svg";
            if (pkg.quiz.walrus.length >=3){
                expert();
            } else {
                qresult.style.display = "none";
                pkg.quiz.walrus = [];
                save();
                qnum = 0;
                qna();
            }
        }
        
        if(pkg.animal == 2){
            quizani.src = "img/northpole/bear.svg";
            if (pkg.quiz.bear.length >=3){
                expert();
            } else {
                qresult.style.display = "none";
                pkg.quiz.bear = [];
                save();
                qnum = 0;
                qna();
            }
        }
        
        if(pkg.animal == 3){
            quizani.src = "img/northpole/narwhal.svg";
            if (pkg.quiz.narwhal.length >=3){
                expert();
            } else {
                qresult.style.display = "none";
                pkg.quiz.narwhal = [];
                save();
                qnum = 0;
                qna();
            }
        }
        
        if(pkg.animal == 4){
            quizani.src = "img/northpole/beluga.svg";
            if (pkg.quiz.beluga.length >=3){
                expert();
            } else {
                qresult.style.display = "none";
                pkg.quiz.beluga = [];
                save();
                qnum = 0;
                qna();
            }
        }
    }
    
    if(pkg.continent == "Amzn"){
                console.log("in Amaz");
    //border colors
        var i;
        for (i=0;i<abox.length;i++){
        abox[i].style.border = "4px solid #5FD92B";
        }
        quizq.style.border = "4px solid #5FD92B";
    //animal
        if(pkg.animal == 1){
            quizani.src = "img/amazon/crocodile.svg";
            if (pkg.quiz.crocodile.length >=3){
                expert();
            } else {
                qresult.style.display = "none";
                pkg.quiz.crocodile = [];
                save();
                qnum = 0;
                qna();
            }
        }
        
        if(pkg.animal == 2){
            quizani.src = "img/amazon/crab.svg";
            if (pkg.quiz.crab.length >=3){
                expert();
            } else {
                qresult.style.display = "none";
                pkg.quiz.crab = [];
                save();
                qnum = 0;
                qna();
            }
        }
        
        if(pkg.animal == 3){
            quizani.src = "img/amazon/dolphin.svg";
            if (pkg.quiz.dolphin.length >=3){
                expert();
            } else {
                qresult.style.display = "none";
                pkg.quiz.dolphin = [];
                save();
                qnum = 0;
                qna();
            }
        }
        
        if(pkg.animal == 4){
            quizani.src = "img/amazon/manatee.svg";
            if (pkg.quiz.manatee.length >=3){
                expert();
            } else {
                qresult.style.display = "none";
                pkg.quiz.manatee = [];
                save();
                qnum = 0;
                qna();
            }
        }
    }
    
    
    if(pkg.continent == "Ant"){
        console.log("ant quiz");
    //border colors
        var i;
        for (i=0;i<abox.length;i++){
        abox[i].style.border = "4px solid #8A77B5";
        }
        quizq.style.border = "4px solid #8A77B5";
    //animal
        if(pkg.animal == 1){
            quizani.src = "img/antarctica/penguin.svg";
            if (pkg.quiz.penguin.length >=3){
                expert();
            } else {
                qresult.style.display = "none";
                pkg.quiz.penguin = [];
                save();
                qnum = 0;
                qna();
            }
        }
        
        if(pkg.animal == 2){
            quizani.src = "img/antarctica/seal.svg";
            if (pkg.quiz.seal.length >=3){
                expert();
            } else {
                qresult.style.display = "none";
                pkg.quiz.seal= [];
                save();
                qnum = 0;
                qna();
            }
        }
        
        if(pkg.animal == 3){
            quizani.src = "img/antarctica/squid.svg";
            if (pkg.quiz.squid.length >=3){
                expert();
            } else {
                qresult.style.display = "none";
                pkg.quiz.squid = [];
                save();
                qnum = 0;
                qna();
            }
        }
        
        if(pkg.animal == 4){
            quizani.src = "img/antarctica/whale.svg";
            if (pkg.quiz.whale.length >=3){
                expert();
            } else {
                qresult.style.display = "none";
                pkg.quiz.whale = [];
                save();
                qnum = 0;
                qna();
            }
        }
    }
    
}


function qna(){    
    if (pkg.continent == "NA"){
        if (pkg.animal == 1){
            quizq.innerHTML = OtterQuiz[qnum].q;
            but1.innerHTML = OtterQuiz[qnum].but1;
            but2.innerHTML = OtterQuiz[qnum].but2;
            but3.innerHTML = OtterQuiz[qnum].but3;
            but4.innerHTML = OtterQuiz[qnum].but4;  
        }
        if (pkg.animal == 2){
            quizq.innerHTML = BeaverQuiz[qnum].q;
            but1.innerHTML = BeaverQuiz[qnum].but1;
            but2.innerHTML = BeaverQuiz[qnum].but2;
            but3.innerHTML = BeaverQuiz[qnum].but3;
            but4.innerHTML = BeaverQuiz[qnum].but4;  
        }
        if (pkg.animal == 3){
            quizq.innerHTML = JellyfishQuiz[qnum].q;
            but1.innerHTML = JellyfishQuiz[qnum].but1;
            but2.innerHTML = JellyfishQuiz[qnum].but2;
            but3.innerHTML = JellyfishQuiz[qnum].but3;
            but4.innerHTML = JellyfishQuiz[qnum].but4;  
        }
        if (pkg.animal == 4){
            quizq.innerHTML = OrcaQuiz[qnum].q;
            but1.innerHTML = OrcaQuiz[qnum].but1;
            but2.innerHTML = OrcaQuiz[qnum].but2;
            but3.innerHTML = OrcaQuiz[qnum].but3;
            but4.innerHTML = OrcaQuiz[qnum].but4;  
        }
    }
    
    if (pkg.continent == "NP"){
        if (pkg.animal == 1){
            quizq.innerHTML = WalrusQuiz[qnum].q;
            but1.innerHTML = WalrusQuiz[qnum].but1;
            but2.innerHTML = WalrusQuiz[qnum].but2;
            but3.innerHTML = WalrusQuiz[qnum].but3;
            but4.innerHTML = WalrusQuiz[qnum].but4;  
        }
        if (pkg.animal == 2){
            quizq.innerHTML = BearQuiz[qnum].q;
            but1.innerHTML = BearQuiz[qnum].but1;
            but2.innerHTML = BearQuiz[qnum].but2;
            but3.innerHTML = BearQuiz[qnum].but3;
            but4.innerHTML = BearQuiz[qnum].but4;  
        }
        if (pkg.animal == 3){
            quizq.innerHTML = NarwhalQuiz[qnum].q;
            but1.innerHTML = NarwhalQuiz[qnum].but1;
            but2.innerHTML = NarwhalQuiz[qnum].but2;
            but3.innerHTML = NarwhalQuiz[qnum].but3;
            but4.innerHTML = NarwhalQuiz[qnum].but4;  
        }
        if (pkg.animal == 4){
            quizq.innerHTML = BelugaQuiz[qnum].q;
            but1.innerHTML = BelugaQuiz[qnum].but1;
            but2.innerHTML = BelugaQuiz[qnum].but2;
            but3.innerHTML = BelugaQuiz[qnum].but3;
            but4.innerHTML = BelugaQuiz[qnum].but4;  
        }
    }
    
    if (pkg.continent == "Amzn"){
        if (pkg.animal == 1){
            quizq.innerHTML = CrocodileQuiz[qnum].q;
            but1.innerHTML = CrocodileQuiz[qnum].but1;
            but2.innerHTML = CrocodileQuiz[qnum].but2;
            but3.innerHTML = CrocodileQuiz[qnum].but3;
            but4.innerHTML = CrocodileQuiz[qnum].but4;  
        }
        if (pkg.animal == 2){
            quizq.innerHTML = CrabQuiz[qnum].q;
            but1.innerHTML = CrabQuiz[qnum].but1;
            but2.innerHTML = CrabQuiz[qnum].but2;
            but3.innerHTML = CrabQuiz[qnum].but3;
            but4.innerHTML = CrabQuiz[qnum].but4;  
        }
        if (pkg.animal == 3){
            quizq.innerHTML = DolphinQuiz[qnum].q;
            but1.innerHTML = DolphinQuiz[qnum].but1;
            but2.innerHTML = DolphinQuiz[qnum].but2;
            but3.innerHTML = DolphinQuiz[qnum].but3;
            but4.innerHTML = DolphinQuiz[qnum].but4;  
        }
        if (pkg.animal == 4){
            quizq.innerHTML = ManateeQuiz[qnum].q;
            but1.innerHTML = ManateeQuiz[qnum].but1;
            but2.innerHTML = ManateeQuiz[qnum].but2;
            but3.innerHTML = ManateeQuiz[qnum].but3;
            but4.innerHTML = ManateeQuiz[qnum].but4;  
        }
    }
    
    if (pkg.continent == "Ant"){
        if (pkg.animal == 1){
            quizq.innerHTML = PenguinQuiz[qnum].q;
            but1.innerHTML = PenguinQuiz[qnum].but1;
            but2.innerHTML = PenguinQuiz[qnum].but2;
            but3.innerHTML = PenguinQuiz[qnum].but3;
            but4.innerHTML = PenguinQuiz[qnum].but4;  
        }
        if (pkg.animal == 2){
             quizq.innerHTML = SealQuiz[qnum].q;
            but1.innerHTML = SealQuiz[qnum].but1;
            but2.innerHTML = SealQuiz[qnum].but2;
            but3.innerHTML = SealQuiz[qnum].but3;
            but4.innerHTML = SealQuiz[qnum].but4;  
        }
        if (pkg.animal == 3){
            quizq.innerHTML = SquidQuiz[qnum].q;
            but1.innerHTML = SquidQuiz[qnum].but1;
            but2.innerHTML = SquidQuiz[qnum].but2;
            but3.innerHTML = SquidQuiz[qnum].but3;
            but4.innerHTML = SquidQuiz[qnum].but4;  
        }
        if (pkg.animal == 4){
            quizq.innerHTML = WhaleQuiz[qnum].q;
            but1.innerHTML = WhaleQuiz[qnum].but1;
            but2.innerHTML = WhaleQuiz[qnum].but2;
            but3.innerHTML = WhaleQuiz[qnum].but3;
            but4.innerHTML = WhaleQuiz[qnum].but4;  
        }
    }

}

var rnwtimer = null;
function right(butnum, aniarray){
    document.querySelector(".quiz-but" + butnum).style.backgroundImage = "url(img/right.svg)";
     if (rnwtimer == null){
            rnwtimer = setTimeout(function() {
            document.querySelector(".quiz-but" + butnum).style.backgroundImage = "none";
            //added    
             if (aniarray >= 3){
                     expert();
                } else if (qnum == 3){
                    nicetry();
                } else {
                    qnum = qnum + 1;
                }
            save();
            qna();
                     
            mtimer = null;
        }, 1000);
    } else {
        clearTimeout(rnwtimer);
        rnwtimer = setTimeout(function() {
            document.querySelector(".quiz-but" + butnum).style.backgroundImage = "none";
            //added    
             if (aniarray >= 3){
                     expert();
                } else if (qnum == 3){
                    nicetry();
                } else {
                    qnum = qnum + 1;
                }
            save();
            qna();
            
            },1000);
    }
}

function wrong(butnum){
    console.log(".quiz-but"+butnum);
    document.querySelector(".quiz-but" + butnum).style.backgroundImage = "url(img/wrong.svg)";
     if (rnwtimer == null){
            rnwtimer = setTimeout(function() {
            document.querySelector(".quiz-but" + butnum).style.backgroundImage = "none";
            //added 
             if (qnum == 3){
                 nicetry();
             } else {
                 qnum = qnum + 1;
             }
            save();
            qna();
                
            mtimer = null;     
        }, 1000);
    } else {
        clearTimeout(rnwtimer);
        rnwtimer = setTimeout(function() {
            document.querySelector(".quiz-but" + butnum).style.backgroundImage = "none";
            //added 
             if (qnum == 3){
                 nicetry();
             } else {
                 qnum = qnum + 1;
             }
            save();
            qna();
            
            },1000);
    }
}


function checka (butnum){
// North America    
    if (pkg.continent == "NA"){
        if (pkg.animal == 1){
            if (butnum == OtterQuiz[qnum].a){
                pkg.quiz.otter.push(qnum);
                right(butnum,pkg.quiz.otter.length);
            } else {
                  wrong(butnum);
            }
        }
        
        else if (pkg.animal == 2){
            if (butnum == BeaverQuiz[qnum].a){
                pkg.quiz.beaver.push(qnum);
                right(butnum,pkg.quiz.beaver.length);
            } else {
                  wrong(butnum);
            }
        }
        
        else if (pkg.animal == 3){
            if (butnum == JellyfishQuiz[qnum].a){
                pkg.quiz.jellyfish.push(qnum);
                right(butnum,pkg.quiz.jellyfish.length);
            } else {
                  wrong(butnum);
            }
        }
        
        else if (pkg.animal == 4){
            if (butnum == OrcaQuiz[qnum].a){
                pkg.quiz.orca.push(qnum);
                right(butnum,pkg.quiz.orca.length);
            } else {
                  wrong(butnum);
            }
        }
        
    }
    
// North Pole
    if (pkg.continent == "NP"){
        if (pkg.animal == 1){
            if (butnum == WalrusQuiz[qnum].a){
                pkg.quiz.walrus.push(qnum);
                right(butnum,pkg.quiz.walrus.length);
            } else {
                  wrong(butnum);
            }
        }
        
        else if (pkg.animal == 2){
            if (butnum == BearQuiz[qnum].a){
                pkg.quiz.bear.push(qnum);
                right(butnum,pkg.quiz.bear.length);
            } else {
                  wrong(butnum);
            }
        }
        
        else if (pkg.animal == 3){
            if (butnum == NarwhalQuiz[qnum].a){
                pkg.quiz.narwhal.push(qnum);
                right(butnum,pkg.quiz.narwhal.length);
            } else {
                  wrong(butnum);
            }
        }
        
        else if (pkg.animal == 4){
            if (butnum == BelugaQuiz[qnum].a){
                pkg.quiz.beluga.push(qnum);
                right(butnum,pkg.quiz.beluga.length);
            } else {
                  wrong(butnum);
            }
        }
        
    }
    
    
//Amazon
    if (pkg.continent == "Amzn"){
        if (pkg.animal == 1){
            if (butnum == CrocodileQuiz[qnum].a){
                pkg.quiz.crocodile.push(qnum);
                right(butnum,pkg.quiz.crocodile.length);
            } else {
                  wrong(butnum);
            }
        }
        
        else if (pkg.animal == 2){
            if (butnum == CrabQuiz[qnum].a){
                pkg.quiz.crab.push(qnum);
                right(butnum,pkg.quiz.crab.length);
            } else {
                  wrong(butnum);
            }
        }
        
        else if (pkg.animal == 3){
            if (butnum == DolphinQuiz[qnum].a){
                pkg.quiz.dolphin.push(qnum);
                right(butnum,pkg.quiz.dolphin.length);
            } else {
                  wrong(butnum);
            }
        }
        
        else if (pkg.animal == 4){
            if (butnum == ManateeQuiz[qnum].a){
                pkg.quiz.manatee.push(qnum);
                right(butnum,pkg.quiz.manatee.length);
            } else {
                  wrong(butnum);
            }
        }
        
    }
    
//Antarctica
    if (pkg.continent == "Ant"){
        if (pkg.animal == 1){
            if (butnum == PenguinQuiz[qnum].a){
                pkg.quiz.penguin.push(qnum);
                right(butnum,pkg.quiz.penguin.length);
            } else {
                  wrong(butnum);
            }
        }
        
        else if (pkg.animal == 2){
            if (butnum == SealQuiz[qnum].a){
                pkg.quiz.seal.push(qnum);
                right(butnum,pkg.quiz.seal.length);
            } else {
                  wrong(butnum);
            }
        }
        
        else if (pkg.animal == 3){
            if (butnum == SquidQuiz[qnum].a){
                pkg.quiz.squid.push(qnum);
                right(butnum,pkg.quiz.squid.length);
            } else {
                  wrong(butnum);
            }
        }
        
        else if (pkg.animal == 4){
            if (butnum == WhaleQuiz[qnum].a){
                pkg.quiz.whale.push(qnum);
                right(butnum,pkg.quiz.whale.length);
            } else {
                  wrong(butnum);
            }
        }
        
    }
    
    
}



function expert(){
    qresult.style.display = "block";
    qresult.style.backgroundImage = "url(img/Congratulations.svg)";
}

function nicetry(){
    qresult.style.display = "block";
   
    if (pkg.continent == "NA"){
        if (pkg.animal == 1){
            qresult.style.backgroundImage = "url(img/northamerica/sad-otter.svg)";
        } else if (pkg.animal == 2){
            qresult.style.backgroundImage = "url(img/northamerica/sad-beaver.svg)";
        } else if (pkg.animal == 3){
            qresult.style.backgroundImage = "url(img/northamerica/sad-jellyfish.svg)";
        } else if (pkg.animal == 4){
            qresult.style.backgroundImage = "url(img/northamerica/sad-orca.svg)";
        }
    }
    
    if (pkg.continent == "NP"){
        if (pkg.animal == 1){
            qresult.style.backgroundImage = "url(img/northpole/sad-walrus.svg)";
        } else if (pkg.animal == 2){
            qresult.style.backgroundImage = "url(img/northpole/sad-bear.svg)";
        } else if (pkg.animal == 3){
            qresult.style.backgroundImage = "url(img/northpole/sad-narwhal.svg)";
        } else if (pkg.animal == 4){
            qresult.style.backgroundImage = "url(img/northpole/sad-beluga.svg)";
        }
    }
    
    if (pkg.continent == "Amzn"){
        if (pkg.animal == 1){
            qresult.style.backgroundImage = "url(img/amazon/sad-crocodile.svg)";
        } else if (pkg.animal == 2){
            qresult.style.backgroundImage = "url(img/amazon/sad-crab.svg)";
        } else if (pkg.animal == 3){
            qresult.style.backgroundImage = "url(img/amazon/sad-dolphin.svg)";
        } else if (pkg.animal == 4){
            qresult.style.backgroundImage = "url(img/amazon/sad-manatee.svg)";
        }
    }
    
    if (pkg.continent == "Ant"){
        if (pkg.animal == 1){
            qresult.style.backgroundImage = "url(img/antarctica/sad-penguin.svg)";
        } else if (pkg.animal == 2){
            qresult.style.backgroundImage = "url(img/antarctica/sad-seal.svg)";
        } else if (pkg.animal == 3){
            qresult.style.backgroundImage = "url(img/antarctica/sad-squid.svg)";
        } else if (pkg.animal == 4){
            qresult.style.backgroundImage = "url(img/antarctica/sad-whale.svg)";
        }
    }
    
}

