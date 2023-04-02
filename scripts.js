var userScore = 0 //keeps track of user score,  starts at 0 and goes up by 1 for each correct answer
var secondsLeft = 60; //this is for the timer, 60 seconds or 1 minute is the timer for the game



var timerDisplay = document.getElementById("timer")  //gets the timer element to dynanically update
var timeClass = document.querySelector(".time"); //grabs time from the browser to use for the timer

function setTime() { //function that starts the timer, ends the game if no time left, and has a function for stopping the timer at game end

    var timerInterval = setInterval(function() {
    secondsLeft--;
    
    timerDisplay.textContent = secondsLeft
    if(secondsLeft === 0) {
        Page5()}}, 1000);
    function stopFunction() {
        clearInterval(timerInterval);
        } 
        
    }

//below is just the store of the questions and the multiple choice answers for each

var GuessQuestionOne = 'What does MS stand for in "MS-Dos"?'

var GuessAnswerOne = "Ms. That's her personal title"

var GuessAnswerTwo = "Microsoft"

var GuessAnswerThree = "Micro Shaft"

var GuessAnswerFour = "Mono Sodium"


var GuessQuestionTwo = "Which gaming console came first?"


var GuessAnswerOne2 = "ColecoVision"

var GuessAnswerTwo2 = "Intellivision"

var GuessAnswerThree2 = "Magnavox Odyssey²"

var GuessAnswerFour2 = "Atari 2600"

var GuessQuestionThree = "Which of the following is NOT a cryptocurrency?"


var GuessAnswerOne3 = "Bored Ape"

var GuessAnswerTwo3 = "Bitcoin"

var GuessAnswerThree3 = "Etherum"

var GuessAnswerFour3 = "USDC"

var GuessQuestionFour = "Which of the following is NOT an example of the Object Oriented Programming Language?"

var GuessAnswerOne4 = "Ruby"

var GuessAnswerTwo4 = "Python"

var GuessAnswerThree4 = "C"

var GuessAnswerFour4 = "Java"


//above is just the store of the questions and the multiple choice answers for each


const startButton = document.getElementById("startbutton"); //start button for games, grabs click and starts, starts timer
startButton.addEventListener("click", function() {
setTime();
startButton.style.display = 'none';

let questionBoxSelector = document.getElementById('questionBox'); //grabber for question box
let answerBoxSelector = document.getElementById('answerBox') //grabber for answer box

//dynamically adds questions and answer buttons
let firstQuestion = document.createElement('li')
firstQuestion.setAttribute("class","questions")
firstQuestion.textContent = GuessQuestionOne
questionBoxSelector.appendChild(firstQuestion)

let secondQuestion = document.createElement('li')
secondQuestion.setAttribute("class","questions")
secondQuestion.textContent = GuessQuestionTwo


var answerOneButton = document.createElement("button");
answerOneButton.innerHTML = GuessAnswerOne;
answerOneButton.addEventListener("click", function() {Page2()})
var firstAnswer = document.createElement('li')
firstAnswer.setAttribute("class","answer")
firstAnswer.textContent = GuessAnswerOne

answerBoxSelector.appendChild(answerOneButton)


var answerTwoButton = document.createElement("button");
answerTwoButton.innerHTML = GuessAnswerTwo;
answerTwoButton.addEventListener("click", function() {Page2w()})
var secondAnswer = document.createElement('li')
secondAnswer.setAttribute("class","answer")
secondAnswer.textContent = GuessAnswerTwo

answerBoxSelector.appendChild(answerTwoButton)

var answerThreeButton = document.createElement("button");
answerThreeButton.innerHTML = GuessAnswerThree;
answerThreeButton.addEventListener("click", function() {Page2()})
var thirdAnswer = document.createElement('li')
thirdAnswer.setAttribute("class","answer")
thirdAnswer.textContent = GuessAnswerThree

answerBoxSelector.appendChild(answerThreeButton)

var answerFourButton = document.createElement("button");
answerFourButton.innerHTML = GuessAnswerFour;
answerFourButton.addEventListener("click", function() {Page2()})
var forthAnswer = document.createElement('li')
forthAnswer.setAttribute("class","answer")
forthAnswer.textContent = GuessAnswerFour

answerBoxSelector.appendChild(answerFourButton)
});

function Page2w(){ //Page(number)w buttons are the correct answer selection it ups the users score and time and then runs the function that the rest of the buttons use
    userScore += 1 //ups user score for correct answer
    secondsLeft += 10 //next page decreases user score and this function runs next page so this adds 10 to balance it out.  Display is not updated until score is balanced out so this is great and invisible to user
    Page2() //runs the next page function that runs on every non-win button
}

function Page2() {
secondsLeft -= 10 //loses 10 seconds for an incorrect answer
timerDisplay.textContent = secondsLeft  //updates timer to show user their new time
clearElement = document.getElementById('questionBox') //clears out the page so it can be written to again
clearElement.innerHTML = ""

clearQuestion = document.getElementById('answerBox')
clearQuestion.innerHTML = ""

//dynamically builds next page buttons

let questionBoxSelector = document.getElementById('questionBox');
let firstQuestion = document.createElement('li')
firstQuestion.setAttribute("class","questions")
firstQuestion.textContent = GuessQuestionTwo
questionBoxSelector.appendChild(firstQuestion)


let answerBoxSelector = document.getElementById('answerBox')


var answerOneButton = document.createElement("button");
answerOneButton.innerHTML = GuessAnswerOne2;
answerOneButton.addEventListener("click", function() {Page3()})
var firstAnswer = document.createElement('li')
firstAnswer.setAttribute("class","answer")
firstAnswer.textContent = GuessAnswerOne2

answerBoxSelector.appendChild(answerOneButton)


var answerTwoButton = document.createElement("button");
answerTwoButton.innerHTML = GuessAnswerTwo2;
answerTwoButton.addEventListener("click", function() {Page3()})
var secondAnswer = document.createElement('li')
secondAnswer.setAttribute("class","answer")
secondAnswer.textContent = GuessAnswerTwo2

answerBoxSelector.appendChild(answerTwoButton)

var answerThreeButton = document.createElement("button");
answerThreeButton.innerHTML = GuessAnswerThree2;
answerThreeButton.addEventListener("click", function() {Page3()})
var thirdAnswer = document.createElement('li')
thirdAnswer.setAttribute("class","answer")
thirdAnswer.textContent = GuessAnswerThree2

answerBoxSelector.appendChild(answerThreeButton)

var answerFourButton = document.createElement("button");
answerFourButton.innerHTML = GuessAnswerFour2;
answerFourButton.addEventListener("click", function() {Page3w()})
var forthAnswer = document.createElement('li')
forthAnswer.setAttribute("class","answer")
forthAnswer.textContent = GuessAnswerFour2

answerBoxSelector.appendChild(answerFourButton)

}

function Page3w(){ //same as Page2w
    userScore += 1
    secondsLeft += 10
    Page3()
}

function Page3() { //same as Page2
    secondsLeft -= 10
    clearElement = document.getElementById('questionBox')
    clearElement.innerHTML = ""
    
    clearQuestion = document.getElementById('answerBox')
    clearQuestion.innerHTML = ""
    
    
    
    let questionBoxSelector = document.getElementById('questionBox');
    let firstQuestion = document.createElement('li')
    firstQuestion.setAttribute("class","questions")
    firstQuestion.textContent = GuessQuestionThree
    questionBoxSelector.appendChild(firstQuestion)
    
    
    let answerBoxSelector = document.getElementById('answerBox')
    
    
    var answerOneButton = document.createElement("button");
    answerOneButton.innerHTML = GuessAnswerOne3;
    answerOneButton.addEventListener("click", function() {Page4w()})
    var firstAnswer = document.createElement('li')
    firstAnswer.setAttribute("class","answer")
    firstAnswer.textContent = GuessAnswerOne3
    
    answerBoxSelector.appendChild(answerOneButton)
    
    
    var answerTwoButton = document.createElement("button");
    answerTwoButton.innerHTML = GuessAnswerTwo3;
    answerTwoButton.addEventListener("click", function() {Page4()})
    var secondAnswer = document.createElement('li')
    secondAnswer.setAttribute("class","answer")
    secondAnswer.textContent = GuessAnswerTwo3
    
    answerBoxSelector.appendChild(answerTwoButton)
    
    var answerThreeButton = document.createElement("button");
    answerThreeButton.innerHTML = GuessAnswerThree3;
    answerThreeButton.addEventListener("click", function() {Page4()})
    var thirdAnswer = document.createElement('li')
    thirdAnswer.setAttribute("class","answer")
    thirdAnswer.textContent = GuessAnswerThree3
    
    answerBoxSelector.appendChild(answerThreeButton)
    
    var answerFourButton = document.createElement("button");
    answerFourButton.innerHTML = GuessAnswerFour3;
    answerFourButton.addEventListener("click", function() {Page4()})
    var forthAnswer = document.createElement('li')
    forthAnswer.setAttribute("class","answer")
    forthAnswer.textContent = GuessAnswerFour3
    
    answerBoxSelector.appendChild(answerFourButton)
    
    }

    function Page4w() { //same as Page2w
        userScore += 1
        secondsLeft += 10
        Page4()
    }

    function Page4() { //same as Page 2
        secondsLeft -= 10
        clearElement = document.getElementById('questionBox')
        clearElement.innerHTML = ""
        
        clearQuestion = document.getElementById('answerBox')
        clearQuestion.innerHTML = ""
        
        
        
        let questionBoxSelector = document.getElementById('questionBox');
        let firstQuestion = document.createElement('li')
        firstQuestion.setAttribute("class","questions")
        firstQuestion.textContent = GuessQuestionFour
        questionBoxSelector.appendChild(firstQuestion)
        
        
        let answerBoxSelector = document.getElementById('answerBox')
        
        
        var answerOneButton = document.createElement("button");
        answerOneButton.innerHTML = GuessAnswerOne4;
        answerOneButton.addEventListener("click", function() {Page5()})
        var firstAnswer = document.createElement('li')
        firstAnswer.setAttribute("class","answer")
        firstAnswer.textContent = GuessAnswerOne4
        
        answerBoxSelector.appendChild(answerOneButton)
        
        
        var answerTwoButton = document.createElement("button");
        answerTwoButton.innerHTML = GuessAnswerTwo4;
        answerTwoButton.addEventListener("click", function() {Page5()})
        var secondAnswer = document.createElement('li')
        secondAnswer.setAttribute("class","answer")
        secondAnswer.textContent = GuessAnswerTwo4
        
        answerBoxSelector.appendChild(answerTwoButton)
        
        var answerThreeButton = document.createElement("button");
        answerThreeButton.innerHTML = GuessAnswerThree4;
        answerThreeButton.addEventListener("click", function() {Page5w()})
        var thirdAnswer = document.createElement('li')
        thirdAnswer.setAttribute("class","answer")
        thirdAnswer.textContent = GuessAnswerThree4
        
        answerBoxSelector.appendChild(answerThreeButton)
        
        var answerFourButton = document.createElement("button");
        answerFourButton.innerHTML = GuessAnswerFour4;
        answerFourButton.addEventListener("click", function() {Page5()})
        var forthAnswer = document.createElement('li')
        forthAnswer.setAttribute("class","answer")
        forthAnswer.textContent = GuessAnswerFour4
        
        answerBoxSelector.appendChild(answerFourButton)
        
        }

        function Page5w(){ //same as Page 2w
            userScore += 1
            Page5()
        }

        function Page5() { //progresses to the Game Over screen
            setTime.stopFunction //stops the timer
            timerDisplay.style.display = 'none'; //clears the timer display
            clearElement = document.getElementById('questionBox')
            clearElement.innerHTML = ""
            
            clearQuestion = document.getElementById('answerBox')
            clearQuestion.innerHTML = ""
            updateHeader = document.getElementById('headname')
            updateHeader.innerHTML = "High Score List"


            userName = prompt("Please enter your initials"); //prompts user for name for the highscore

            const scoreList = JSON.parse(localStorage.getItem("scorelist")) || [] //keeps a list of highscores saved in LocalStorage

            const user = { //user object to store name and score
                userScore,
                userName,
            }

            scoreList.push(user)  //adds to high score
            scoreList.sort(function(a,b){ //sorts high score highest to lowest
                return b.userScore - a.userScore
            
            })
            localStorage.setItem("scorelist", JSON.stringify(scoreList)) //stores scores 
            let HighScoreCounter = document.getElementById('main');
            HighScoreCounter.innerHTML = ""
            for (let i in scoreList){  //displays scores for each item in the score list and displays a message
            HighScoreCounter.innerHTML += (scoreList[i].userName + "'s Score is " + scoreList[i].userScore + "." + "<br>")
            }
        }