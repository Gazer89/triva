$(document).ready(function (){

console.log("java passoever is working");
$("#head").text("Harry Potter Triva");
$("#restart").hide();

var questionlist = [
    {
        q: "Where does Harry FIRST meet Malfoy?",
        a: ["On Hogwart's Express", "Madam Malkin's","Muggle Shop", "Hogwarts School of Magic"],
        ca: "Hogwarts School of Magic",
        image:"<img src=https://media.giphy.com/media/ptlcxIDncvatG/giphy.gif>",
        image2: "<img src=https://media.giphy.com/media/NoBXm9gmqzx96/giphy.gif>",
    },
    {
        q: "Who is the teacher who Harry thinks is working with Voldemort?",
        a: ["Snape", "Sprout", "McGonagall", "Quirell"],
        ca: "Snape",
        image:"<img src=https://media.giphy.com/media/HNoY8sztGOryE/giphy.gif>",
        image2: "<img src=https://media.giphy.com/media/i8tL4unehxmvu/giphy.gif>",
    }, 
    {
        q:"What is the name of the ghost who haunts the girl's bathroom?",
        a: ["The Wailing Widow", "Moaning Myrtle", "The Grey Lady", "The Fat Friar"],
        ca: "Moaning Myrtle" ,
        image:"<img src=https://media.giphy.com/media/PXvCWUnmqVdks/giphy.gif>",
        image2: "<img src=https://media.giphy.com/media/720g7C1jz13wI/giphy.gif>",
    }, 
    {
        q: "Where is Sirius Black hiding in the Prisoner of Azkaban?",
        a: ["A Cave", "Grimmauld Place", "Hogwarts", "He Is Not Hideing"],
        ca: "He Is Not Hideing",
        image:"<img src=https://media.giphy.com/media/fKcvTanp70dEc/giphy.gif>",
        image2: "<img src=https://media.giphy.com/media/12nfFCZA0vyrSw/giphy.gif>",
    }, 
    {
        q: "Who or what attacks Ron in the Ministry of Magic?",
        a: ["Bellatrix", "Snape", "He Who Shall Not Be Named", "Dolohov"],
        ca: "Snape",
        image:"<img src=https://media.giphy.com/media/11MrXbrzSEZBKM/giphy.gif>",
        image2: "<img src=https://media.giphy.com/media/unZIP5hDMveIU/giphy.gif>",
    }, 
    
    {
        q:"What village do Harry and Dumbledore visit to find Slughorn?",
        a: ["Grodric's Hollow", "Little Whinging", "Budleigh Babberton", "Ottery St. Catchpole"],
        ca: "Grodric's Hollow",
        image:"<img src=https://media.giphy.com/media/wFf9JmAwPuyxW/giphy.gif>",
        image2: "<img src=https://media.giphy.com/media/WTTdbXlefU6vS/giphy.gif>",
    },
    {
        q: "What did Dumbledore leave in his will for Ron?",
        a: ["Horcruxe", "The sowrd of Gryffindor", "Deluminator", "Telescope"],
        ca: "Deluminator",
        image:"<img src=https://media.giphy.com/media/ZqaUbgzQiaOli/giphy.gif>",
        image2: "<img src=https://media.giphy.com/media/vb7YYpLs9RvR6/giphy.gif>",
    }, 
    {
        q:"How many Horcruxes does Dumbledore think Voldemort has (not including the piece in Voldemort himself)?",
        a: ["5", "6", "7", "9"],
        ca: "7",
        image:"<img src=https://media.giphy.com/media/B2ZldWbH24vcY/giphy.gif>",
        image2: "<img src=https://media.giphy.com/media/SKp7ZpRP4a8iQ/giphy.gif>",
    },
    {
        q:"What do Ron and Hermione name their kids?",
        a: ["Jean and Bilius", "Scorpis and Sarah", "Rose and Hugo", "Albus and Severus"],
        ca: "Rose and Hugo",
        image:"<img src=https://media.giphy.com/media/O1lbWlwZilQo8/giphy.gif>",
        image2: "<img src=https://media.giphy.com/media/tpwwhv1BLd31e/giphy.gif>",
    },
    {
        q:"What is Hermione's middle name?",
        a: ["Weasley", "Jean", "Sara", "Linda"],
        ca: "Jean",
        image:"<img src=https://media.giphy.com/media/UXKy7mHAZ5Mqc/giphy.gif>",
        image2: "<img src=https://media.giphy.com/media/NoBXm9gmqzx96/giphy.gif>",
    },
    {
        q:"Who said it:'He held his head high and went about buisness as usual. I'm not sure he could read, though, so I'm not sure that was bravery'.",
        a: ["Snape", "Dumbeldore", "Bellatrix", "McGonagall"],
        ca: "Dumbeldore",
        image:"<img src=https://media.giphy.com/media/hMMfRc0lGq5bi/giphy.gif>",
        image2: "<img src=https://media.giphy.com/media/rvMQcARjST01W/giphy.gif>",
    },
    {
        q:"If she was not put in Gryffindor, what house would Hermione Granger probably be in?",
        a: ["Expelled", "Slytherin", "Ravenclaw", "Hufflepuff"],
        ca: "Hufflepuff",
        image:"<img src=https://media.giphy.com/media/P5ow2yhkqzkuA/giphy.gif>",
        image2: "<img src=https://media.giphy.com/media/SqF8NUfOXiJ2M/giphy.gif>",
    },
    {
        q:"Who in the 3rd year class wrote an essay on werewolves?",
        a: ["Harry", "Ron", "Herminone", "Authur"],
        ca: "Herminone",
        image:"<img src=https://media.giphy.com/media/6CI9XdbgiqgWA/giphy.gif>",
        image2: "<img src=https://media.giphy.com/media/pWBTO0wk9Pb5C/giphy.gif>",
    },
    {
        q:"What are the creatures who suck the soul out of people called?",
        a: ["Dementors", "Azkaban", "Quidditch", "Griffindor"],
        ca: "Dementors",
        image:"<img src=https://media.giphy.com/media/RB0VCenCDzthm/giphy.gif>",
        image2: "<img src=https://media.giphy.com/media/aNdy0Kv7CJ5kY/giphy.gif>",
    },
    {
        q:"Who is also known as Padfoot?",
        a: ["Petter Pettigrew", "Malfoy", "Tom Riddle", "Sirius"],
        ca: "Sirius",
        image:"<img src=https://media.giphy.com/media/lb3u7UalT5q1O/giphy.gif>",
        image2: "<img src=https://media.giphy.com/media/wfclQPOIU1DyM/giphy.gif>",
    }
  ];

    var question="";
    var correct="";
    var answers="";
    var selectedanswer;
    var a="";
    var b="";
    var c="";
    var d="";
    var image;
    var image2;
    var width; 
    var answer = "";
    var choice ="";
    var correctanswers = 0;
    var wrong = 0;
    var clickon;
    var movebar;
    var unanswered = 0;
    var totalpoints = 0;

  console.log(JSON.parse(JSON.stringify(questionlist)));
  console.log("++++++++++++++++++++++++++++++");
//   console.log(JSON.parse(JSON.stringify(questionlist.ca)));
//start game 


    $("#start").click(function (){
        displayquestions ();
        correctanswers = 0;
        wrong = 0;
        unanswered = 0;
        selectedanswer = false;
        console.log("+++++++++++++++++++++++++++++++++++++")
        $("#quesbar").show();
        $("#questimer").show();

    });


//display next question 
function displayquestions (){
        ("#quesbar").show;
       
        for (i=0; i < questionlist.length; i++ ) {
              (function (i) {
                setTimeout(function () {
                    selectedanswer = false;
                    clickon = true;
                    barmove();
                    $("#start").hide();
                    $("#pic").empty();
                    $("#answerchoices").show();
                    $("#question").show();
                    $("#answer1").css("background-color", "");
                    $("#answer2").css("background-color", "");
                    $("#answer3").css("background-color", "");
                    $("#answer4").css("background-color", "");
                    question = questionlist[i].q;
                    answers = questionlist[i].a;
                    correct =  questionlist[i].ca; 
                    image = questionlist[i].image; 
                    image2 = questionlist[i].image2; 
                    a = (answers[0]);
                    b = (answers[1]);
                    c = (answers[2]);
                    d = (answers[3]);
                    $("#question").text(question);
                    $("#answer1").text(a);
                    $("#answer2").text(b);
                    $("#answer3").text(c);
                    $("#answer4").text(d);
                    console.log ("correctanswers: " + correctanswers);
                    console.log ("Wrong: " + wrong);
                    console.log("totalpoints: " + totalpoints);
                }, 4000 * i);
            })(i);           
        }
    }




    $("#answerchoices").on("click","div", function (){
        selectedanswer = $(this).text();

        if (selectedanswer === correct && clickon){
            clickon=false;
            stopbarmove();
            $(this).css("background-color", "red");
            $("#answerchoices").hide();
            $("#question").hide();
            var newrow = $("<tr>");
            var correctmessage = $("#pic").text("You got it right, the answer is: "+ correct);
            $(correctmessage).append(image);
            correctanswers ++;
            totalpoints ++;
            console.log ("correctanswers: " + correctanswers)
            }   

        else if (selectedanswer != correct && clickon){
            clickon=false;
            stopbarmove();
            $(this).css("background-color", "red");
            $("#answerchoices").hide();
            $("#question").hide();
            var wrongmessage =$("#pic").text("Wrong, the correct answer is: "+ correct);
            $(wrongmessage).append(image2);
            wrong ++;
            totalpoints ++;
            console.log ("Wrong: " + wrong)
            }

            else {
                unknown ++;
                totalpoints ++;
            }

            setTimeout(function () {

                if (totalpoints >= 15){
                    $("#questimer").hide();
                    $("#question").hide();
                    $("#answerchoices").hide();
                    $("#pic").hide();
                    $("#endgame").text("Game Over");
                    $("#endgame").append("#Correct: " + correctanswers);
                    $("#endgame").append("#Wrong: " + wrong);
                    $("#endgame").append("#Unaswered: " + unanswered);
                    $("#endgame").append("<img src =https://media.giphy.com/media/gbErpwcLlizvi/giphy.gif>");
                    
                }
            }, 5000);
        });
    
      
//barmove(start);
    function barmove (){
        var getelement = document.getElementById("quesbar");
        width = 0;
        movebar = setInterval (frame, 40);
        console.log(movebar);
        function frame () {
            if (width == 100) {
                clearInterval(movebar);
            }
            else {
                width ++;
                getelement.style.width = width + "%";
                }
            }
        }

        function stopbarmove() {
            clearInterval(movebar);
        }
});
