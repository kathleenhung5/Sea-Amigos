var talkBut = document.querySelector("#talkButton"),
    feedBut = document.querySelector("#feedButton"),
    quizBut = document.querySelector("#quizButton");
var foodMenu = document.querySelector(".food");

talkBut.addEventListener("touchstart", function() {
   talkBut.src = "Otter_SVGs/TalkSelected_NA.svg";
});

talkBut.addEventListener("touchend", function() {
    talkBut.src = "Otter_SVGs/TalkDefault_NA.svg";
 });


feedBut.addEventListener("click", function() {
        feedBut.src = "Otter_SVGs/FeedSelected_NA.svg";
        foodMenu.style.display = "none";
        console.log("click 1");
    if(feedBut.src = "Otter_SVGs/FeedSelected_NA.svg") {
        console.log("clickagain");
        feedBut.src = "Otter_SVGs/FeedDefault_NA.svg";
        foodMenu.style.display = "flex";
    }
 }); 
 
// foodMenu.style.display = "flex";