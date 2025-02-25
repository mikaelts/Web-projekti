//Vastaus pankki
let questionBank = [
    {
        question : "Missä Olympialaiset saivat alkunsa?", 
        option : ["Kreikka","Italia","Suomi","Amerikka"],
        answer : "Kreikka"
    },
    {
        question : "Kuka keksi puhelimen?", 
        option : ["Antonio Meucc","Elon Musk","Alexander Graham Bel","Steve Jobs"],
        answer : "Antonio Meucc"
    },
    {
        question : "Mikä maa käytti ensimmäisenä paperi rahaa?", 
        option : ["Italia","Amerikka","Kiina","Suomi"],
        answer : "Kiina"
    },
    {
        question : "Mikä maa lahjoitti Vapaudenpatsaan Amerikkaan?", 
        option : ["Ranska","Venäjä","Ruotsi","Suomi"],
        answer : "Ranska"
    },
    {
        question : "Minä vuonna Suomi sai itsenäisyyden", 
        option : ["1917","1876","2000","1984"],
        answer : "1917"
    },
]

let question = document.getElementById("question");
let quizContainer = document.getElementById("quiz-container");
let scorecard = document.getElementById("scorecard");
let option0 = document.getElementById("option0");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let options = document.querySelector(".next");
let points = document.getElementById("score");
let span = document.querySelectorAll("span");
let i=0;
let score= 0;
const PERFECT ="Mahtavaa sait täydet pisteet ja keräsit kaikki tulikärpäset!"
const GOOD = "Hienoa työtä! Keräsit melkein kaikki tulikärpäset!"
const AVERAGE = "Hyvää työtä! Seuraavalla kerralla saat varmasti kaikki tulikärpäset!"
const POOR = "Onnistut varmasti paremmin ensikerralla! Yritä visaa uudestaan."
const IMAGE0 = document.getElementById("pointsOne");
const IMAGE1 = document.getElementById("pointsTwo");
const IMAGE2 = document.getElementById("pointsThree");
const IMAGE3 = document.getElementById("pointsFour");
const IMAGE4 = document.getElementById("pointsFive");

//function to display questions
function displayQuestion(){
    for(let a=0;a<span.length;a++){
        span[a].style.background="none";
    }
    question.innerHTML= " " +(i+1)+". "+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Kysymys"+" "+(i+1)+" "+"/"+" "+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= "#57E30B";
    }
    else{
        document.getElementById(e.id).style.background= "#E30B21";
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        finalScore.innerHTML= points+ "/"+ questions.length;
        quiz.style.display= "none";
        scoreBoard.style.display= "block"
        if(points===5){
            document.getElementById("answerComment").textContent= PERFECT;
            IMAGE4.classList.remove("hidden");
        } else if (points===4){
            document.getElementById("answerComment").textContent= GOOD;
            IMAGE3.classList.remove("hidden");
        } else if(points===3){
            document.getElementById("answerComment").textContent= AVERAGE;
            IMAGE2.classList.remove("hidden");
            hideButton.classList.add("hidden");
            showButton.classList.remove("hidden");
        } else if (points===2){
            document.getElementById("answerComment").textContent= POOR;
            IMAGE1.classList.remove("hidden");
            hideButton.classList.add("hidden");
            showButton.classList.remove("hidden");
        } else if (points===0 || points===1){
            document.getElementById("answerComment").textContent= POOR;
            IMAGE0.classList.remove("hidden");
            hideButton.classList.add("hidden");
            showButton.classList.remove("hidden");
            
        }
    }
}

function backToQuiz(){
    location.reload();
}

//function to check answers
function checkAnswer(){
    let answerBank = document.getElementById("answerBank");
    let answers= document.getElementById("answers");
    answerBank.style.display= "block";
    scoreboard.style.display= "none";
    for(let a=0;a<questionBank.length;a++)
    {
        let list = document.createElement("li");
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
        
    }
    

}
displayQuestion();
//https://www.youtube.com/watch?v=2jwdyO_UunE&t=121s//

