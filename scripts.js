var PageNumberVaribale = 1
var UserScore = 0
var timerDisplay = document.getElementById("timer")
var timeClass = document.querySelector(".time");
var secondsLeft = 60;


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

var GuessQuestionFour = "Which artist had the most hit singles?"

var GuessAnswerOne4 = "Elvis Presley"

var GuessAnswerTwo4 = "The Rolling Stones"

var GuessAnswerThree4 = "The Beatles"

var GuessAnswerFour4 = "Madonna"


const startButton = document.getElementById("startbutton");
startButton.addEventListener("click", function() {
setTime();
startButton.style.display = 'none';

let questionBoxSelector = document.getElementById('questionBox');
let answerBoxSelector = document.getElementById('answerBox')


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

function Page2w(){
    UserScore += 1
    secondsLeft += 10
    Page2()
}

function Page2() {
secondsLeft -= 10
timerDisplay.textContent = secondsLeft
clearElement = document.getElementById('questionBox')
clearElement.innerHTML = ""

clearQuestion = document.getElementById('answerBox')
clearQuestion.innerHTML = ""



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

function Page3w(){
    UserScore += 1
    secondsLeft += 10
    Page3()
}

function Page3() {
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

    function Page4w() {
        UserScore += 1
        secondsLeft += 10
        Page4()
    }

    function Page4() {
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

        function Page5w(){
            UserScore += 1
            Page5()
        }

        function Page5() {
            timerDisplay.style.display = 'none';
            clearElement = document.getElementById('questionBox')
            clearElement.innerHTML = ""
            
            clearQuestion = document.getElementById('answerBox')
            clearQuestion.innerHTML = ""


            userName = prompt("Please enter your initials");
            let HighScoreCounter = document.getElementById('main');
            HighScoreCounter.innerHTML = (userName + " Your Total Score is " + UserScore)
        }
function setTime() {

var timerInterval = setInterval(function() {
secondsLeft--;

timerDisplay.textContent = secondsLeft
if(secondsLeft === 0) {
    Page5()}}, 1000); 
}
