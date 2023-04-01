var PageNumberVaribale = 1


var GuessQuestionOne = 'What does MS stand for in "MS-Dos"?'

var GuessAnswerOne = "Ms. That's her personal title"

var GuessAnswerTwo = "Microsoft"

var GuessAnswerThree = "Micro Shaft"

var GuessAnswerFour = "Mono Sodium"







const startButton = document.getElementById("button");
startButton.addEventListener("click", function() {
startButton.style.display = 'none';

questionBoxSelector = document.getElementById('questionBox');
answerBoxSelector = document.getElementById('answerBox')


var firstQuestion = document.createElement('li')
firstQuestion.setAttribute("class","questions")
firstQuestion.textContent = GuessQuestionOne
questionBoxSelector.appendChild(firstQuestion)

// var secondQuestion = document.createElement('li')
// secondQuestion.setAttribute("class","questions")
// secondQuestion.textContent = "Second Question"
// questionBoxSelector.appendChild(secondQuestion)


var answerOneButton = document.createElement("button");
answerOneButton.innerHTML = GuessAnswerOne;
var firstAnswer = document.createElement('li')
firstAnswer.setAttribute("class","answer")
firstAnswer.textContent = GuessAnswerOne

answerBoxSelector.appendChild(answerOneButton)



var answerTwoButton = document.createElement("button");
answerTwoButton.innerHTML = GuessAnswerTwo;
var secondAnswer = document.createElement('li')
secondAnswer.setAttribute("class","answer")
secondAnswer.textContent = GuessAnswerTwo

answerBoxSelector.appendChild(answerTwoButton)

var answerThreeButton = document.createElement("button");
answerThreeButton.innerHTML = GuessAnswerThree;
var thirdAnswer = document.createElement('li')
thirdAnswer.setAttribute("class","answer")
thirdAnswer.textContent = GuessAnswerThree

answerBoxSelector.appendChild(answerThreeButton)

var answerFourButton = document.createElement("button");
answerFourButton.innerHTML = GuessAnswerFour;
var forthAnswer = document.createElement('li')
forthAnswer.setAttribute("class","answer")
forthAnswer.textContent = GuessAnswerFour

answerBoxSelector.appendChild(answerFourButton)
});