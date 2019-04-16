var talkBut = document.querySelector("#talkButton"),
    feedBut = document.querySelector("#feedButton"),
    quizBut = document.querySelector("#quizButton");
var foodMenu = document.querySelector(".food");
var But = 0;
var otterTalk = ["I have the thickest fur of all animals.", "I like to carry one small rock with me all the time.", "I use rocks to smash open shells.", "I keep the same rock with me for my whole life!", "When I go to sleep, I like to wrap myself and my family in seaweed and float together with them."]

var mtimer = setTimeout(function() {
            speech.style.display = "none";
        }, 5000);

talkBut.addEventListener("touchstart", function() {
    clearTimeout(mtimer);
   talkBut.src = "Otter_SVGs/TalkSelected_NA.svg";
    var talkRes = otterTalk[Math.floor(Math.random() * otterTalk.length)];
        speech.style.display = "flex";
        speech.innerHTML = talkRes;
    var mtimer = setTimeout(function() {
            speech.style.display = "none";
        }, 5000);

});

talkBut.addEventListener("touchend", function() {
    talkBut.src = "Otter_SVGs/TalkDefault_NA.svg";
 });


feedBut.addEventListener("click", function() {
    if(But == 0){
        console.log("clickagain");
        feedBut.src = "Otter_SVGs/FeedSelected_NA.svg";
        foodMenu.style.display = "flex";
        But = 1;
    } else {
        console.log("clickme");
        feedBut.src = "Otter_SVGs/FeedDefault_NA.svg";
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
        speechTimeout = setTimeout(function() {
            speech.style.display = "none";
        }, 5000);
    });
   fruit.addEventListener("click", function() {
        var no = negRes[Math.floor(Math.random() * negRes.length)];
        speech.style.display = "flex";
        speech.innerHTML = no;
        setTimeout(function() {
            speech.style.display = "none";
        }, 5000);
    });
   seaweed.addEventListener("click", function() {
        var no = negRes[Math.floor(Math.random() * negRes.length)];
        speech.style.display = "flex";
        speech.innerHTML = no;
        setTimeout(function() {
            speech.style.display = "none";
        }, 5000);
    });
   plankton.addEventListener("click", function() {
        var no = negRes[Math.floor(Math.random() * negRes.length)];
        speech.style.display = "flex";
        speech.innerHTML = no;
        setTimeout(function() {
            speech.style.display = "none";
        }, 5000);
    });

    function resetTimeout() {
        clearTimeout(speechTimeout);
    }