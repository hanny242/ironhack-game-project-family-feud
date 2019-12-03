class FamilyFeudGame {
    constructor(questions) {
        this.questions = questions;
        this.players = [];
        this.currentPlayer;
        this.questionCounter = 0;
        //this.currentQuestion = this.questions[questionCounter];
    }

    shuffle(questions) {
        for(let i = this.questions.length - 1; i > 0; i--){
            const J = Math.floor(Math.random() * i)
            const temp = this.questions[i]
            this.questions[i] = this.questions[j]
            this.questions[j] = temp
        }
        return this.question;
    }

    addPlayer(player) {
        this.players.push(player);
    }

    checkIfRight(answer){
        for(let i = 0; i < question.answers.length; i++){
            if(this.questions.answers[i] === document.getElementsByClassName("playerAnswer").innerHTMl){
                <p>${question.answers[i].answer}</p>
            }
        }
    }

    nextQuestion(){
        
    }


}

class PLayer {
    constructor(){
        this.wrongAnswers = 0;
        this.rightAnswers = 0;
    }

    checkGameOver() {
        if(this.questionsAnswered === questions.length) {
            return true;
        } else if(this.questionsAnswered < questions.length) {
            return false;
        }
    }
}

