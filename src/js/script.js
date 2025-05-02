import { questions } from "../data/questions";
import { leftResultHTML, rightResultHTML } from '../data/results';

let currentQuestion = 0;
let leftScore = 0;
let rightScore = 0;
let userAnswers = [];

function renderQuestion() {
    const container = document.getElementById("quiz-container");
    const q = questions[currentQuestion];
    const total = questions.length;
    const progress = ((currentQuestion + 1) / total) * 100;
    const selected = userAnswers[q.id];

    container.innerHTML = `
      <div class="card">
        <div class="card-header">
          <h2>Pregunta ${currentQuestion + 1} de ${total}</h1>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
          </div>
        </div>
        <div class="card-body">
          <h3 class="question-text">${q.q}</h3>
          <div class="options">
            <div class="option ${selected === 'left' ? 'selected' : ''}" onclick="selectAnswer(${q.id}, 'left')">
              <span class="circle">${selected === 'left' ? '✓' : ''}</span> ${q.left}
            </div>
            <div class="option ${selected === 'right' ? 'selected' : ''}" onclick="selectAnswer(${q.id}, 'right')">
              <span class="circle">${selected === 'right' ? '✓' : ''}</span> ${q.right}
            </div>
          </div>
        </div>
        <div class="card-footer">
          <button class="nav-button" onclick="prevQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>Anterior</button>
          <button class="nav-button primary" onclick="nextQuestion()" ${!selected ? 'disabled' : ''}>${currentQuestion === total - 1 ? 'Finalizar' : 'Siguiente'}</button>
        </div>
      </div>
    `;
}

function selectAnswer(questionId, side) {
    userAnswers[questionId] = side;
    renderQuestion();
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        showResult();
    }
}

window.selectAnswer = selectAnswer;
window.prevQuestion = prevQuestion;
window.nextQuestion = nextQuestion;

function waitForVisualizationReady(callback) {
    const interval = setInterval(() => {
        if (typeof window.updateBrainVisualization === 'function') {
            clearInterval(interval);
            callback();
        }
    }, 50);
}

function showResult() {
    leftScore = 0;
    rightScore = 0;

    for (const side of userAnswers) {
        if (side === 'left') leftScore++;
        else if (side === 'right') rightScore++;
    }

    const total = leftScore + rightScore;
    const leftPercentage = Math.round((leftScore / total) * 100);
    const rightPercentage = 100 - leftPercentage;
    const isLeftDominant = leftPercentage > rightPercentage;

    waitForVisualizationReady(() => {
        updateBrainVisualization(leftPercentage, rightPercentage);
        renderResultUI(isLeftDominant);

        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("nav-buttons").style.display = "none";
        document.querySelector(".content-wrapper").style.display = "flex";
    });
}

function renderResultUI(isLeftDominant) {
    const rightPanel = document.getElementById('right-panel');
    rightPanel.innerHTML = '';

    const message = document.createElement('div');
    message.className = 'message';

    const title = document.createElement('h1');
    title.className = 'message-title';
    title.textContent = isLeftDominant
        ? 'Predominancia del Hemisferio Izquierdo'
        : 'Predominancia del Hemisferio Derecho';

    const quizResult = document.createElement('div');
    quizResult.className = 'quiz-result';
    quizResult.innerHTML = isLeftDominant ? leftResultHTML : rightResultHTML;

    const restartButton = document.createElement('button');
    restartButton.className = 'nav-button';
    restartButton.textContent = 'Reiniciar Test';
    restartButton.onclick = restartQuiz;

    message.appendChild(title);
    message.appendChild(quizResult);
    message.appendChild(restartButton);
    rightPanel.appendChild(message);
}

function restartQuiz() {
    currentQuestion = 0;
    leftScore = 0;
    rightScore = 0;
    document.getElementById("quiz-container").style.display = "block";
    document.querySelector(".content-wrapper").style.display = "none";
    document.getElementById("right-panel").innerHTML = "";
    userAnswers = [];

    window.scene.children = window.scene.children.filter(obj => obj.name !== 'percentage-label');

    if (window.brainObject) {
        window.scene.remove(window.brainObject);
        window.brainObject = null;

        window.loader.load('obj/freesurff.Obj', function (obj) {
            window.brainObject = obj;
            window.actualizarColoresYTexto();
            window.scene.add(obj);
        });
    }
    renderQuestion();
}
renderQuestion();