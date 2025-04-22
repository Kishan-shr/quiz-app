document.addEventListener('DOMContentLoaded',()=>{
const startBtn = document.querySelector('#start-btn')
const restartBtn = document.querySelector('#restart-btn')
const nextBtn = document.querySelector('#next-btn')
const questionContainer = document.querySelector('#question-container')
const questionText = document.querySelector('#question-text')
const choiceList = document.querySelector('#choices-list')
const resultContainer = document.querySelector('#result-container')
const scoreDisplay = document.querySelector('#score')

const questions = [
    {
    question : "What is the Capital of France ?",
    choices:["Paris","London","Berlin","Madrid"],
    answer:"Paris",
},
    {
    question : "Which Planet is Known as the Red Planet ?",
    choices:["Mars","Venus","Jupiter","Saturn"],
    answer:"Mars",
},
    {
    question : "Who wrote 'Hamlet'?",
    choices:["Charles Dickens","jane Austen","William Shakespeare","Mark Twain"],
    answer:"William Shakespeare",
},

]

let currentQuestionIndex = 0
let score = 0

startBtn.addEventListener('click',startQuiz);
nextBtn.addEventListener('click',()=>{
 currentQuestionIndex++
 if(currentQuestionIndex < questions.length){
    showQuestion()
 } else {
    showResult()
 }
})
restartBtn.addEventListener('click',()=>{
    currentQuestionIndex =0;
    score =0;
    resultContainer.classList.add('hidden');
    startQuiz()
})
    function startQuiz(){
    startBtn.classList.add('hidden')
    resultContainer.classList.add('hidden')
    questionContainer.classList.remove('hidden')
    showQuestion()
    }
function showQuestion(){
nextBtn.classList.add('hidden');
questionText.textContent = questions[currentQuestionIndex].question
choiceList.innerHTML =""//clear previous choices
// choiceList.textContent = questions[currentQuestionIndex].choices
questions[currentQuestionIndex].choices.forEach(choice => {
    const li = document.createElement('li')
    li.textContent = choice
    li.addEventListener('click',() => selectAnswer(choice))
    choiceList.appendChild(li);
})
}

function selectAnswer(choice){
   const correctAnswer = questions[currentQuestionIndex].answer;
  correctAnswer.style.background="#5CB338;"
   if(choice === correctAnswer){
       score++
   }
   nextBtn.classList.remove("hidden")
   console.log("fire");
}
function showResult(){
questionContainer.classList.add('hidden')
resultContainer.classList.remove('hidden')
scoreDisplay.textContent = `${score} out of ${questions.length}`
}
})