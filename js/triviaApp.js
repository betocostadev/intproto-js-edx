/* Trivia App */
let questionID, question, choiceA, choiceB, choiceC, choiceD, questions, numQuestions, qInfo,
current = 0;
score = 0;
points = [];

let defaultQuestions = [
{
    question: "Where are the three smallest bones in the human body?",
    choiceA: "middle ear",
    choiceB: "nose",
    choiceC: "toes",
    choiceD: "eyes",
    correct: "A"
},
{
    question: "What is the most abundant element in the Universe?",
    choiceA: "Helium",
    choiceB: "Oxygen",
    choiceC: "Lithium",
    choiceD: "Hydrogen",
    correct: "D"
},
{
    question: "Approximately how long does it take for light to travel from the Sun's surface to the Earth?",
    choiceA: "8 days",
    choiceB: "8 seconds",
    choiceC: "8 minutes",
    choiceD: "8 hours",
    correct: "C"
},
{
    question: "What is 10/2?",
    choiceA: "5",
    choiceB: "2",
    choiceC: "8",
    choiceD: "9",
    correct: "A"
},
{
    question: "Which planet has the most moons?",
    choiceA: "Saturn",
    choiceB: "Mars",
    choiceC: "Jupiter",
    choiceD: "Uranus",
    correct: "C"
}];

// HTML Elements
const elQuiz = document.getElementById("quiz");

let elQuizStatus = document.getElementById("quizStatus");
let elQuestion = document.getElementById("question");
let elChoiceA = document.getElementById("choiceA");
let elChoiceB = document.getElementById("choiceB");
let elChoiceC = document.getElementById("choiceC");
let elChoiceD = document.getElementById("choiceD");
let elChoices = document.getElementsByName("choices");

// startQuiz
populateQuestions();
renderQuestion();
document.getElementById('submit').onclick = gradeQuestion;

function populateQuestions() {
    // populate with default questions
    questions = defaultQuestions;
    // if local storage contains questions, add to question set
    if (localStorage.getItem('questions')) {
        let storedQuestions = JSON.parse(localStorage.getItem('questions'));
        for (let i = 0; i < storedQuestions.length; i++) {
            questions.push(storedQuestions[i]);
        }
    }
    numQuestions = questions.length;
}

function populateQuestionInfo() {
    // populate current question info from question list
    question = questions[current].question;
    qInfo = questions[current];
    choiceA = qInfo.choiceA;
    choiceB = qInfo.choiceB;
    choiceC = qInfo.choiceC;
    choiceD = qInfo.choiceD;
    correct = qInfo.correct;
}

function renderQuestion(){
    // display question on webpage
    questionID = current + 1;
    elQuizStatus.innerHTML = "Question " + (questionID) + " of " + (numQuestions);
    populateQuestionInfo();
    elQuestion.innerHTML = question;
    elChoiceA.innerHTML = choiceA;
    elChoiceB.innerHTML = choiceB;
    elChoiceC.innerHTML = choiceC;
    elChoiceD.innerHTML = choiceD;
}

function gradeQuestion(){
    if(getUserChoice()){
        if(userChoice == questions[current].correct){
            score++;
            points[current] = 1;
        }
        else{
            points[current] = 0;
        }

        if(current == questions.length-1){
            endGame();
        }
        else{
            // next question
            current++;
            renderQuestion();
        }
    }
}

function getUserChoice(){
    for (var i = 0, length = elChoices.length; i < length; i++)
    {
        if (elChoices[i].checked)
        {
            userChoice = elChoices[i].value;

            // clear radio input for next question
            elChoices[i].checked = false;

            return true;
        }
    }
    // user didn't select an answer
    alert("Please select an answer before continuing");
    return false;
}

function endGame(){
    elQuiz.innerHTML = "<h2>Your Score: " + score + " out of " + numQuestions + "</h2>";
    for(var i = 0; i < points.length; i++){
        var summary = document.createElement("p");
        if(points[i] == 0){
            summary.innerHTML = "Question #" + (i+1) + ": INCORRECT";
            summary.style.color = "red";
        }
        else{
            summary.innerHTML = "Question #" + (i+1) + ": CORRECT!";
            summary.style.color = "green";
        }
        elQuiz.appendChild(summary);
    }
    document.getElementById("options").style.display = "block";

}