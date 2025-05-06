import { questions } from "../data/questions";
import { leftResultHTML, rightResultHTML } from '../data/results';
import { saveUserResult } from "../services/firebaseService.js";

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
    renderResultUI(isLeftDominant, leftPercentage, rightPercentage);
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("nav-buttons").style.display = "none";
    document.querySelector(".content-wrapper").style.display = "flex";
  });
}

function renderResultUI(isLeftDominant, leftPercentage, rightPercentage) {
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

  const saveButton = document.createElement('button');
  saveButton.className = 'nav-button';
  saveButton.textContent = 'Guardar Resultados';
  saveButton.onclick = () =>
    createSaveResultsForm(leftPercentage, rightPercentage);

  message.appendChild(title);
  message.appendChild(quizResult);
  message.appendChild(restartButton);
  message.appendChild(saveButton);
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

function createSaveResultsForm(leftPercentage, rightPercentage) {
  const modal = document.createElement('div');
  modal.className = 'results-modal';

  modal.innerHTML = `
  <div class="results-form">
    <h2>Guardar Resultados</h2>
    <p><strong>Hemisferio Izquierdo:</strong> ${leftPercentage}%</p>
    <p><strong>Hemisferio Derecho:</strong> ${rightPercentage}%</p>
    
    <label>Nombre completo:
      <input type="text" id="form-name" required />
      <div class="input-error-message" id="error-name">Este campo es obligatorio.</div>
    </label>

  <label>Correo electrónico (opcional):
   <input type="email" id="form-email" />
   <div class="input-error-message" id="error-email">
     Si lo proporciona, debe ser un formato de correo válido.
    </div>
  </label>

    <label>Celular:
      <input type="text" id="form-phone" required />
      <div class="input-error-message" id="error-phone">Debe tener 8 dígitos.</div>
    </label>

    <label>Puntaje del juego:
      <input type="number" id="form-score" />
      <div class="input-error-message" id="error-score">Debe ser un número entre 1 y 100.</div>
    </label>

    <button id="submit-results" class="nav-button primary">Enviar</button>
    <button class="nav-button" id="close-modal" onclick="closeModal()">Cancelar</button>
  </div>
`;

  document.body.appendChild(modal);

  setTimeout(() => {
    modal.classList.add('active');
  }, 10);

  document.getElementById('submit-results').addEventListener('click', () => {
    document.querySelector('.results-form').classList.add('loading');
    submitResults(leftPercentage, rightPercentage);
  });

  document.getElementById('close-modal').addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

const FORM_CONFIG = {
  fields: {
    name: {
      id: 'form-name',
      errorId: 'error-name',
      validation: value => !!value.trim()
    },
    email: {
      id: 'form-email',
      errorId: 'error-email',
      validation: value => {
        const trimmedValue = value.trim();
        if (trimmedValue === "") return true;
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(trimmedValue);
      }
    },
    phone: {
      id: 'form-phone',
      errorId: 'error-phone',
      validation: value => /^[0-9]{8,}$/.test(value.trim())
    },
    score: {
      id: 'form-score',
      errorId: 'error-score',
      validation: value => {
        const trimmed = value.trim();
        if (trimmed === "") return true;
        const score = parseInt(trimmed, 10);
        return !isNaN(score) && score >= 1 && score <= 100;
      }
    }
  },
  submitButtonId: 'submit-results'
};

function getDOMReferences() {
  const elements = {};

  for (const [field, config] of Object.entries(FORM_CONFIG.fields)) {
    elements[field] = {
      input: document.getElementById(config.id),
      error: document.getElementById(config.errorId)
    };
  }

  elements.submitButton = document.getElementById(FORM_CONFIG.submitButtonId);

  return elements;
}

function resetFormValidation(elements) {
  for (const { input, error } of Object.values(elements)) {
    if (input) input.classList.remove('invalid');
    if (error) error.style.display = 'none';
  }
}

function validateForm(elements) {
  let isValid = true;

  for (const [field, { input, error }] of Object.entries(elements)) {
    if (field === 'submitButton') continue;

    const config = FORM_CONFIG.fields[field];
    const value = input.value;

    if (!config.validation(value)) {
      input.classList.add('invalid');
      error.style.display = 'block';
      isValid = false;
    }
  }

  return isValid;
}

function setSubmitButtonState(button, isSubmitting) {
  button.disabled = isSubmitting;
  button.textContent = isSubmitting ? "Enviando..." : "Enviar";
}

function prepareFormData(elements, left, right) {
  const scoreValue = elements.score.input.value.trim();
  const score = scoreValue === "" ? null : parseInt(scoreValue, 10);

  return {
    name: elements.name.input.value.trim(),
    email: elements.email.input.value.trim(),
    phone: elements.phone.input.value.trim(),
    score: isNaN(score) ? null : score,
    leftPercentage: left,
    rightPercentage: right,
    timestamp: new Date()
  };
}

async function submitResults(left, right, description) {
  const elements = getDOMReferences();

  if (!elements.submitButton) return;

  setSubmitButtonState(elements.submitButton, true);
  resetFormValidation(elements);

  if (!validateForm(elements)) {
    setSubmitButtonState(elements.submitButton, false);
    return;
  }

  const formData = prepareFormData(elements, left, right);

  try {
    await saveUserResult(formData);
    alert("Resultado guardado correctamente.");
    closeModal();
  } catch (error) {
    alert("Error al guardar: " + error.message);
    setSubmitButtonState(elements.submitButton, false);
  }
}

function closeModal() {
  const modal = document.querySelector('.results-modal');
  if (modal) modal.remove();
}

renderQuestion();