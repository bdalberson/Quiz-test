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

var firstAnswer = document.createElement('li')
firstAnswer.setAttribute("class","answer")
firstAnswer.textContent = GuessAnswerOne

answerBoxSelector.appendChild(firstAnswer)


var secondAnswer = document.createElement('li')
secondAnswer.setAttribute("class","answer")
secondAnswer.textContent = GuessAnswerTwo

answerBoxSelector.appendChild(secondAnswer)


var thirdAnswer = document.createElement('li')
thirdAnswer.setAttribute("class","answer")
thirdAnswer.textContent = GuessAnswerThree

answerBoxSelector.appendChild(thirdAnswer)

var forthAnswer = document.createElement('li')
forthAnswer.setAttribute("class","answer")
forthAnswer.textContent = GuessAnswerFour

answerBoxSelector.appendChild(forthAnswer)
});