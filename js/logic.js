class FamilyFeudGame {
    constructor() {
        this.players = [];
        this.currentPlayer;
        this.questionCounter = 0;
        this.correctAnswersCounter = 0;
        //this.currentQuestion = this.questions[questionCounter];
        this.questions = [{
                question: "Name a bad job for someone who's accident-prone.",
                answers: [{
                        answer: "Driver",
                        percentage: 33
                    },
                    {
                        answer: "Construction Worker",
                        percentage: 20
                    },
                    {
                        answer: "Police Officer",
                        percentage: 11
                    },
                    {
                        answer: "Food Service",
                        percentage: 10
                    },
                    {
                        answer: "Glass Maker",
                        percentage: 9
                    },
                    {
                        answer: "Window Washer",
                        percentage: 7
                    },
                    {
                        answer: "Surgeon",
                        percentage: 6
                    }
                ]
            },
            {
                question: "Name something that you hang up.",
                answers: [{
                        answer: "The Phone",
                        percentage: 54
                    },
                    {
                        answer: "Clothes",
                        percentage: 38
                    },
                    {
                        answer: "Towel",
                        percentage: 4
                    },
                    {
                        answer: "Picture Frame",
                        percentage: 3
                    }
                ]
            }
        ]

    }


    addPlayer() {
        this.players.push(new Player);
    }

    checkIfRight(submittedAnswer) {
        let answersArray = this.questions[this.questionCounter].answers
        for (let i =0; i < answersArray.length; i++){
            let answer = answersArray[i];
            if (answer.answer.toLowerCase() === submittedAnswer.toLowerCase()) {
                document.querySelector(`.answer-${i}`).innerHTML = "YES!";
                this.correctAnswersCounter++;
                return;
            }
        } 
        this.showBigRedX()
    }


    showBigRedX() {
        var bigRedX = document.querySelector(".big-red-x");
        if (bigRedX.style.display === "none") {
            bigRedX.style.display = "block";
        } else {
            bigRedX.style.display = "none";
        }
    }

    nextQuestion() {
        if (this.correctAnswersCounter === this.questions[this.questionCounter].answers.length){
            this.questionCounter++;
            this.correctAnswersCounter = 0;
            debugger
            renderQuestion(this.questions[this.questionCounter]);
        }
    }


}






class Player {
    constructor() {
        this.wrongAnswers = 0;
        this.rightAnswers = 0;
    }

    checkGameOver() {
        if (this.questionsAnswered === questions.length) {
            return true;
        } else if (this.questionsAnswered < questions.length) {
            return false;
        }
    }
}