

const questions = [
    {
      question: "Name a bad job for someone who's accident-prone.",
      answers: [
                {answer: "Driver", percentage: 33}, 
                {answer: "Construction Worker", percentage: 20}, 
                {answer: "Police Officer", percentage: 11},
                {answer: "Food Service", percentage: 10}, 
                {answer: "Glass Maker", percentage: 9},
                {answer: "Window Washer", percentage: 7}, 
                {answer: "Surgeon", percentage: 6}
              ]
    },
    {
      question: "Name something that you hang up.",
      answers: [
                {answer: "The Phone", percentage: 54},
                {answer: "Clothes", percentage: 38},
                {answer: "Towel", percentage: 4},
                {answer: "Picture Frame", percentage: 3}
      ]
    }
  ]

let theGame = new FamilyFeudGame(questions);



window.addEventListener("load", event => {
  renderQuestion(theGame.questions[0])
});

function renderQuestion(question){
    let answersHTML = "";
    for(let i = 0; i < question.answers.length; i++) {
       answersHTML += `<p>${question.answers[i].answer}</p>`
    }
    document.getElementsByClassName("question")[0].innerHTML = `
      <div class="question">
        <h1>${question.question}</h1>
        ${answersHTML}
      </div>
    `;
}

function revealAnswers(question){

}

document.querySelector(".answer").onclick = function() {
  // todo B
  // get value
  // check if answer is correct
  // go to next question
  // render next question
}