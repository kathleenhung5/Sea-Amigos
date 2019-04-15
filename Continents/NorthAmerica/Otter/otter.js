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


feedBut.addEventListener("touchstart", function() {
    if(feedBut.src = "Otter_SVGs/FeedDefault_NA.svg") {
        feedBut.src = "Otter_SVGs/FeedSelected_NA.svg"
    } else if (feedBut.src = "Otter_SVGs/FeedSelected_NA.svg"){
        feedBut.src = "Otter_SVGs/FeedDefault_NA.svg"
    };
 }); 
 
// foodMenu.style.display = "flex";