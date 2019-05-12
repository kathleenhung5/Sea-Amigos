function goHome(){
    window.location.href = "../index.html";
}

var talkBut = document.querySelector("#talkButton"),
    feedBut = document.querySelector("#feedButton"),
    quizBut = document.querySelector("#quizButton");
var foodMenu = document.querySelector(".food");
var But = 0;
var otterTalk = ["Hi! I'm Ophie the Otter!", "I have the thickest fur of all animals.", "I like to carry one small rock with me all the time.", "I use rocks to smash open shells.", "I keep the same rock with me for my whole life!", "When I go to sleep, I like to wrap myself and my family in seaweed and float together with them."]

//var mtimer = setTimeout(function() {
//            speech.style.display = "none";
//        }, 5000);

var mtimer = null;
var talknum = 0;
var finger = document.getElementById("finger");
var food1 = 0,
    food2 = 0,
    food3 = 0,
    food4 = 0;


talkBut.addEventListener("touchstart", function(){
//    talkBut.style.animation = "none";
   
//    feedBut.style.animation = "upd 1s infinite";
    talkBut.src = "Otter_SVGs/TalkSelected_NA.svg";
    if(talknum==otterTalk.length){
         document.getElementById("teachbox").innerHTML = "See what the Otter likes to eat."
        finger.style.left = "45%"; 
        talknum = 0;
    }
    var talkRes = otterTalk[talknum];
     speech.style.display = "flex";
     speech.innerHTML = talkRes;
    talknum += 1
    if (mtimer == null){
            mtimer = setTimeout(function() {
            speech.style.display = "none";
            mtimer = null;
            console.log("stop");
        }, 5000);
    } else {
        clearTimeout(mtimer);
        console.log("force stop and restart");
        mtimer = setTimeout(function() {
            speech.style.display = "none";
            console.log("stop");
            },5000);
    }
});

talkBut.addEventListener("touchend", function() {
    talkBut.src = "Otter_SVGs/TalkDefault_NA.svg";
 });


feedBut.addEventListener("click", function() {
//    feedBut.style.animation = "none";
    document.getElementById("teachbox").style.display = "none";
        feedBut.src = "Otter_SVGs/FeedSelected_NA.svg";
        foodMenu.style.display = "flex";
        finger.style.display = "none";
    
//    if(But == 0){
//        console.log("clickagain");
//        feedBut.src = "Otter_SVGs/FeedSelected_NA.svg";
//        foodMenu.style.display = "flex";
//        But = 1;
//    } else {
//        console.log("clickme");
//        feedBut.src = "Otter_SVGs/FeedDefault_NA.svg";
//        foodMenu.style.display = "none";
//        But = 0;
//    }
    
    
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
        food1 += 1;
        if (mtimer == null){
            mtimer = setTimeout(function() {
            speech.style.display = "none";
            mtimer = null;
            console.log("stop");
        }, 5000);
        } else {
        clearTimeout(mtimer);
        console.log("force stop and restart");
        mtimer = setTimeout(function() {
            speech.style.display = "none";
            console.log("stop");
            },5000);
    }
   
    endeat();
    });
        
   fruit.addEventListener("click", function() {
        var no = negRes[Math.floor(Math.random() * negRes.length)];
        speech.style.display = "flex";
        speech.innerHTML = no;
       food2 += 1;
        if (mtimer == null){
            mtimer = setTimeout(function() {
            speech.style.display = "none";
            mtimer = null;
            console.log("stop");
        }, 5000);
        } else {
        clearTimeout(mtimer);
        console.log("force stop and restart");
        mtimer = setTimeout(function() {
            speech.style.display = "none";
            console.log("stop");
            },5000);
        }
       endeat();
   });
   seaweed.addEventListener("click", function() {
        var no = negRes[Math.floor(Math.random() * negRes.length)];
        speech.style.display = "flex";
        speech.innerHTML = no;
       food3 += 1;
        if (mtimer == null){
            mtimer = setTimeout(function() {
            speech.style.display = "none";
            mtimer = null;
            console.log("stop");
        }, 5000);
        } else {
        clearTimeout(mtimer);
        console.log("force stop and restart");
        mtimer = setTimeout(function() {
            speech.style.display = "none";
            console.log("stop");
            },5000);
    }
    endeat();
   });
   plankton.addEventListener("click", function() {
        var no = negRes[Math.floor(Math.random() * negRes.length)];
        speech.style.display = "flex";
        speech.innerHTML = no;
       food4 += 1;
        if (mtimer == null){
            mtimer = setTimeout(function() {
            speech.style.display = "none";
            mtimer = null;
            console.log("stop");
        }, 5000);
        } else {
        clearTimeout(mtimer);
        console.log("force stop and restart");
        mtimer = setTimeout(function() {
            speech.style.display = "none";
            console.log("stop");
            },5000);
    }
        endeat();
   });

    function endeat (){
        console.log(food1, food2, food3, food4);
        if (food1>0 && food2>0 && food3>0 && food4>0){
        finger.style.display = "block";
        feedBut.src = "Otter_SVGs/FeedDefault_NA.svg";
        foodMenu.style.display = "none";
        finger.style.left = "74%";document.getElementById("teachbox").style.display = "block";
        document.getElementById("teachbox").innerHTML = "Now we can do the quiz."
        }
    }

    function goQuiz(){
        window.location.href = "tutorial-quiz.html";
    }

    

    function resetTimeout() {
        clearTimeout(speechTimeout);
    };



