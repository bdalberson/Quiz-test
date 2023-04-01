var PageNumberVaribale = 1


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


const startButton = document.getElementById("startbutton");
startButton.addEventListener("click", function() {
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
answerTwoButton.addEventListener("click", function() {Page2()})
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


function Page2() {

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
var firstAnswer = document.createElement('li')
firstAnswer.setAttribute("class","answer")
firstAnswer.textContent = GuessAnswerOne2

answerBoxSelector.appendChild(answerOneButton)


var answerTwoButton = document.createElement("button");
answerTwoButton.innerHTML = GuessAnswerTwo2;
var secondAnswer = document.createElement('li')
secondAnswer.setAttribute("class","answer")
secondAnswer.textContent = GuessAnswerTwo2

answerBoxSelector.appendChild(answerTwoButton)

var answerThreeButton = document.createElement("button");
answerThreeButton.innerHTML = GuessAnswerThree2;
var thirdAnswer = document.createElement('li')
thirdAnswer.setAttribute("class","answer")
thirdAnswer.textContent = GuessAnswerThree2

answerBoxSelector.appendChild(answerThreeButton)

var answerFourButton = document.createElement("button");
answerFourButton.innerHTML = GuessAnswerFour2;
var forthAnswer = document.createElement('li')
forthAnswer.setAttribute("class","answer")
forthAnswer.textContent = GuessAnswerFour2

answerBoxSelector.appendChild(answerFourButton)

}