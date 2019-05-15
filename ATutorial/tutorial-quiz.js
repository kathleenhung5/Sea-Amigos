// QUIZ
var OtterQuiz = [
    {
        q:"What do I eat?",
        a:2,
        but1:"<img src='../img/northamerica/animal-page/Fruit.svg'/>",
        but2:"<img src='../img/northamerica/animal-page/Fish.svg'/>",
        but3:"<img src='../img/northamerica/animal-page/Plankton.svg'/>",
        but4:"<img src='../img/northamerica/animal-page/Seaweed.svg'/>"
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

var qnum = 0,
    quizq = document.querySelector(".quiz-q"),
    but1 = document.querySelector(".quiz-but1"),
    but2 = document.querySelector(".quiz-but2"),
    but3 = document.querySelector(".quiz-but3"),
    but4 = document.querySelector(".quiz-but4");
var qresult = document.querySelector(".result");
var answers = 0;



 
function qna(){    
            quizq.innerHTML = OtterQuiz[qnum].q;
            but1.innerHTML = OtterQuiz[qnum].but1;
            but2.innerHTML = OtterQuiz[qnum].but2;
            but3.innerHTML = OtterQuiz[qnum].but3;
            but4.innerHTML = OtterQuiz[qnum].but4;  
}

qna();

var rnwtimer = null;

function right(butnum){
    document.querySelector(".quiz-but" + butnum).style.backgroundImage = "url(../img/right.svg)";
    answers = answers + 1;
     if (rnwtimer == null){
            rnwtimer = setTimeout(function() {
            document.querySelector(".quiz-but" + butnum).style.backgroundImage = "none";
            //added    
             if (answers >= 3){
                     expert();
                } else if (qnum == 3){
                    nicetry();
                } else {
                    qnum = qnum + 1;
                }
            qna();
                     
            mtimer = null;
        }, 1000);
    } else {
        clearTimeout(rnwtimer);
        rnwtimer = setTimeout(function() {
            document.querySelector(".quiz-but" + butnum).style.backgroundImage = "none";
            //added    
             if (answers >= 3){
                     expert();
                } else if (qnum == 3){
                    nicetry();
                } else {
                    qnum = qnum + 1;
                }
            qna();
            },1000);
    }
}

function wrong(butnum){
    document.querySelector(".quiz-but" + butnum).style.backgroundImage = "url(../img/wrong.svg)";
     if (rnwtimer == null){
            rnwtimer = setTimeout(function() {
            document.querySelector(".quiz-but" + butnum).style.backgroundImage = "none";
            //added 
             if (qnum == 3){
                 nicetry();
             } else {
                 qnum = qnum + 1;
             }
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
            qna();
            
            },1000);
    }
}


function checka (butnum){
    if (butnum == OtterQuiz[qnum].a){
                right(butnum);
            } else {
                  wrong(butnum);
            }
    console.log(answers);
        }

var endquiz = document.querySelector(".end-quiz");
function expert(){
    qresult.style.display = "block";
    qresult.style.backgroundImage = "url(images/Congratulations-tutorial.svg)";
    
}

function nicetry(){
    qresult.style.display = "block";
   qresult.style.backgroundImage = "url(images/sad-otter-tutorial.svg)";
}

function toHome(){
    console.log("haha");
    window.location.href="../index.html";
}