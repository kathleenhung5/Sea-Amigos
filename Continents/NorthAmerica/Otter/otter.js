var talkBut = document.querySelector("#talkButton"),
    feedBut = document.querySelector("#feedButton"),
    quizBut = document.querySelector("#quizButton");
var foodMenu = document.querySelector(".food");
var But = 0;

talkBut.addEventListener("touchstart", function() {
   talkBut.src = "Otter_SVGs/TalkSelected_NA.svg";
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

    fish.addEventListener("click", function() {
        console.log("yes");
        var yes = posRes[Math.floor(Math.random() * posRes.length)];
        speech.style.display = "flex";
        speech.innerHTML = yes;
        setTimeout(function() {
            speech.style.display = "none";
        }, 5000);
    });
   fruit.addEventListener("click", function() {
        console.log("yes");
        var no = negRes[Math.floor(Math.random() * negRes.length)];
        speech.style.display = "flex";
        speech.innerHTML = no;
        setTimeout(function() {
            speech.style.display = "none";
        }, 5000);
    });
   seaweed.addEventListener("click", function() {
        console.log("yes");
        var no = negRes[Math.floor(Math.random() * negRes.length)];
        speech.style.display = "flex";
        speech.innerHTML = no;
        setTimeout(function() {
            speech.style.display = "none";
        }, 5000);
    });
   plankton.addEventListener("click", function() {
        console.log("yes");
        var no = negRes[Math.floor(Math.random() * negRes.length)];
        speech.style.display = "flex";
        speech.innerHTML = no;
        setTimeout(function() {
            speech.style.display = "none";
        }, 5000);
    });