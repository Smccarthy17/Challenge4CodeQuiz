var startbtn=document.querySelector("button")
console.log(startbtn)
var listOfQuestions=[
    {
        question:"question1",
        choiceA:"choiceA",
        choiceB:"choiceB",
        choiceC:"choiceC",
        choiceD:"choiceD",
        answer:"choiceD"

    },
    {
        question:"question2",
        choiceA:"choiceA",
        choiceB:"choiceB",
        choiceC:"choiceC",
        choiceD:"choiceD",
        answer:"choiceD"
        
    }


]
function showQuestion(){
console.log(listOfQuestions[0])
var questionTitleEl=document.getElementById("questionTitle")
questionTitleEl.innerText=listOfQuestions[0]
}
function startGame(){
  showQuestion()
}
startbtn.addEventListener("click",startGame)
