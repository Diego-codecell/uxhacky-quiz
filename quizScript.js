//Variáveis de ID/pegas do HTML
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let correctAnswer = 0 //Variavel de acertos
const name = window.prompt('Insira seu nome')

//Estas variáveis serão usadas para embaralharmos as perguntas
//Assim, as perguntas sempre terão uma ordem aleatória
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

//Função que da inicio ao jogo
function startGame() {
    correctAnswer = 0;
    console.log('Começou')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5) //Embaralha as questoes
    currentQuestionIndex = 0 //Questao atual
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

//Função para o progresso de perguntas
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

//Função para mostrar perguntas e respostas
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

 //Volta os botoes para o estado normal a cada nova questao
function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

}

//Função para respostas
function selectAnswer(e) {
   const selectedButton = e.target
   const correct = selectedButton.dataset.correct
   setStatusClass(document.body, correct)
   Array.from(answerButtonsElement.children).forEach(button => {
       setStatusClass(button, button.dataset.correct)
   })
   if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
   } else {
       startButton.innerText = 'Recomeçar'
       startButton.classList.remove('hide')
       if (correctAnswer == 0) {
        window.alert(`Sinto muito, ${name}, mas você não acertou nenhuma questão. Tente novamente!`); // Mostrar pontuação no HTML
       } else {
           correctAnswer++
           if (correctAnswer == 7) {
            window.alert(`Parabéns, ${name}, você acertou todas as questões!`)
           } else {
               window.alert(`${name}, você acertou ${correctAnswer} questões. Tente novamente para acertar todas!`)
           }
       }
      
   }
   if (selectedButton.dataset = correct) {
    correctAnswer++; // Caso acerte uma questão, ganha 1 ponto (variavel correctAnswers na linha 8)
 }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct') 
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//Perguntas do game
const questions = [
    {
        question: 'Qual o significado de HTML?',
        answers: [
            { text: 'HyperText Preprocessor', correct: false},
            { text: 'HyperText Markup Language', correct: true},
            { text: 'HyperText Multiple Language', correct: false},
            { text: 'HyperTool Multi Language', correct: false}
        ]
    },
    {
        question: 'Qual a importância da UX em um site?',
        answers: [
            { text: 'Nenhuma', correct: false},
            { text: 'Demonstrar suas habilidades como designer', correct: false},
            { text: 'Tornar o desenvolvimento de sites mais complicado', correct: false},
            { text: 'Facilitar a navegação do usuário', correct: true}
        ]
    },
    {
        question: 'Por qual motivo a empresa Google decidiu mudar seu fator de ranqueamento?',
        answers: [
            { text: 'Para dar destaque aos sites que possuem a melhor experiência de usuário', correct: true},
            { text: 'Para diminuir o acesso aos sites menores', correct: false},
            { text: 'Tornar o desenvolvimento de sites mais complicado', correct: false},
            { text: 'Nenhuma das anteriores', correct: false}
        ]
    },
    {
        question: 'Qual o significado de CSS?',
        answers: [
            { text: 'Cascading Style Sheets', correct: true},
            { text: 'Counter-Strike: Source', correct: false},
            { text: 'Cascade Style Sheets', correct: false},
            { text: 'Computer Style Sheets', correct: false}
        ]
    },
    {
        question: 'Qual o significado de PHP?',
        answers: [
            { text: 'Hypertext Preprocessor', correct: true},
            { text: 'Hypertext Programming', correct: false},
            { text: 'Hypertext Preprogramming', correct: false},
            { text: 'Hometext Processor', correct: false}
        ]
    },
    {
        question: 'Qual o significado de SQL?',
        answers: [
            { text: 'Stylish Question Language', correct: false},
            { text: 'Sylesheet Query Language', correct: false},
            { text: 'Statement Question Language', correct: false},
            { text: 'Structured Query Language', correct: true}
        ]
    },
    {
        question: 'O que significa UX?',
        answers: [
            { text: 'User Experience', correct: true},
            { text: 'User Expression', correct: false},
            { text: 'Unit Experimental', correct: false},
            { text: 'Unit X', correct: false}
        ]
    },

]