let questions = [
    {
        'question': 'Wer hat HTML erfunden?',
        'answer_1': 'Robbie Williams',
        'answer_2': 'Lady Gaga',
        'answer_3': 'Tim Berners-Lee',
        'answer_4': 'Justin Bieber',
        'right_answer': 3
    },
    {
        'question': 'Wer ist eine berühmte weibliche Sängerin?',
        'answer_1': 'Robbie Williams',
        'answer_2': 'Lady Gaga',
        'answer_3': 'Tim Berners-Lee',
        'answer_4': 'Justin Bieber',
        'right_answer': 3
    },
    {
        'question': 'Wer hat HTML erfunden?',
        'answer_1': 'Robbie Williams',
        'answer_2': 'Lady Gaga',
        'answer_3': 'Tim Berners-Lee',
        'answer_4': 'Justin Bieber',
        'right_answer': 3
    },
    {
        'question': 'Wer hat HTML erfunden?',
        'answer_1': 'Robbie Williams',
        'answer_2': 'Lady Gaga',
        'answer_3': 'Tim Berners-Lee',
        'answer_4': 'Justin Bieber',
        'right_answer': 3
    },
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/correct-answer.mp3');
let AUDIO_FAIL = new Audio('audio/false-answer.mp3');

function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is ', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is ', selectedQuestionNumber);
    console.log('Current question is ', question['right_answer']);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedQuestionNumber)) { 
        console.log('Richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        console.log('Falsche Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function restartGame() {
    document.getElementById('header-image').src = 'img/questions.png';
    document.getElementById('questionBody').style = ''; // questionBody wieder Anzeigen
    document.getElementById('endScreen').style = 'display: none'; // End Screen ausblenden

    rightQuestions = 0;
    currentQuestion = 0;
    init();
}

function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('amountOfQuestions').innerHTML = questions.length;
    document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
    document.getElementById('header-image').src = 'img/trophy.png';
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
    console.log('Fortschritt:', percent);
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function gameIsOver(){
    return currentQuestion >= questions.length;
}

function rightAnswerSelected(selectedQuestionNumber){
    let question = questions[currentQuestion];
    return selectedQuestionNumber == question['right_answer'];
}