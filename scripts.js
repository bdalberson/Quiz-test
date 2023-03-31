questionBoxSelector = document.getElementById('questionBox');
answerBoxSelector = document.getElementById('answerBox')


var firstQuestion = document.createElement('li')
firstQuestion.setAttribute("class","questions")
firstQuestion.textContent = "First Question"

var secondQuestion = document.createElement('li')
secondQuestion.setAttribute("class","questions")
secondQuestion.textContent = "Second Question"


questionBoxSelector.appendChild(firstQuestion)
questionBoxSelector.appendChild(secondQuestion)

var firstAnswer = document.createElement('li')

firstAnswer.setAttribute("class","answer")
firstAnswer.textContent = "First Answer"

var firstAnswer = document.createElement('li')
firstAnswer.setAttribute("class","answer")
firstAnswer.textContent = "First Answer"

answerBoxSelector.appendChild(firstAnswer)
