# Quiz-test

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)     

## Description 

[Visit the Deployed Site](https://bdalberson.github.io/Quiz-test/)

![plot](./assets/Screen%20Shot%202023-04-02%20at%205.04.45%20PM.png)

## Code Refactor Example


Below is the timer function, it starts and stops the timer and ends the game when time runs out

```javascript
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
```

Below is a little piece of magic that goes runs when an answer is selected.  It goes to the next page, but if you click the winning(w) button there's more magic.
I was able to use the fact that the display is not updated immediately to hide the fact that I always subtract 10 seconds, but I add 10 seconds for the winner so
when it updates the UI is always consistent.

```javascript

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
}
```

This is my HighScore list creator. Quite an impressive bit of coding(Kappa).  The || [] part is key as it makes the scorelist create even in case of null or empty. Its able to sort high to low, it works with localStorage and it has a loop that functions only as long as there are items in the list.

```javascript


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

```


## Usage 

Just head to the site and select the Start Button to begin the quiz.  You will have 1 minute too finish and each incorrect answer subtracts 10 seconds. A High Score list is saved to Local Storage so you can keep refreshing the page and trying to get a higher score. 

## Learning Points 


Huge jump in learning on this project.  I got my process down.  I begin with a big list of todos on a notepad.  Then, without styling I construct the HTML of where I want everything to do with black outline boxes.  Then I start dynamically updating the page. At the end I style it to how I want it visually.  

Learned how to use local storage, learned how to make a timer, learned how to dynamically update a page and its view. 


## Author Info

QA professional turning into coder 

* [Portfolio](https://bdalberson.github.io/Course2Biopage/)
* [LinkedIn](https://www.linkedin.com/in/brian-alberson-464b2271/)
* [Github](https://github.com/bdalberson)
```

## Credits


Many thanks to TA and tutor sessions which both were needed in pulling this off.   

---

## Tests
Tested and works on mobile. test buttons and layout on varrying screens and sizes.  

---
