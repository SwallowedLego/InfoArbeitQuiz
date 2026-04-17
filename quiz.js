/**
 * Adaptive Quiz Engine
 *
 * Uses a weighted selection algorithm:
 * - Each question starts with a weight of 1.
 * - Correct answers reduce the weight (question less likely to appear).
 * - Wrong answers increase the weight (question more likely to reappear).
 * - State is persisted in localStorage.
 */

const WEIGHT_CORRECT    = 0.5;  // Multiply weight by this on correct answer
const WEIGHT_WRONG      = 2.0;  // Multiply weight by this on wrong answer
const WEIGHT_MIN        = 0.1;  // Minimum weight (question can never disappear entirely)
const WEIGHT_MAX        = 10.0; // Maximum weight cap
const CODE_INDENT_SPACES = 4;   // Number of leading spaces that mark a code line

const STORAGE_KEY = "infoQuizState";

// ── State ──────────────────────────────────────────────────────────────────────

let state = {
  weights: {},        // { questionId: number }
  history: [],        // [{ id, correct, timestamp }]
  totalCorrect: 0,
  totalWrong: 0,
  streakCurrent: 0,
  streakBest: 0,
  topicFilter: null,  // null = all topics
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      state = { ...state, ...saved };
    }
  } catch (_) { /* ignore */ }

  // Ensure every question has a weight entry
  QUESTIONS.forEach(q => {
    if (!(q.id in state.weights)) {
      state.weights[q.id] = 1.0;
    }
  });
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (_) { /* ignore */ }
}

function resetState() {
  state = {
    weights: {},
    history: [],
    totalCorrect: 0,
    totalWrong: 0,
    streakCurrent: 0,
    streakBest: 0,
    topicFilter: null,
  };
  QUESTIONS.forEach(q => { state.weights[q.id] = 1.0; });
  saveState();
}

// ── Question Selection ─────────────────────────────────────────────────────────

function getAvailableQuestions() {
  if (state.topicFilter) {
    return QUESTIONS.filter(q => q.topic === state.topicFilter);
  }
  return QUESTIONS;
}

/**
 * Weighted random selection – questions with higher weights are more likely
 * to be chosen. Avoids repeating the same question twice in a row.
 */
function pickNextQuestion(lastQuestionId = null) {
  const pool = getAvailableQuestions();
  if (pool.length === 0) return null;

  // Exclude last question to prevent immediate repetition (unless only 1 question)
  const candidates = pool.length > 1 ? pool.filter(q => q.id !== lastQuestionId) : pool;

  const totalWeight = candidates.reduce((sum, q) => sum + (state.weights[q.id] ?? 1.0), 0);
  let rand = Math.random() * totalWeight;

  for (const q of candidates) {
    rand -= state.weights[q.id] ?? 1.0;
    if (rand <= 0) return q;
  }
  return candidates[candidates.length - 1];
}

// ── Scoring ────────────────────────────────────────────────────────────────────

function recordAnswer(questionId, isCorrect) {
  const currentWeight = state.weights[questionId] ?? 1.0;

  if (isCorrect) {
    state.weights[questionId] = Math.max(WEIGHT_MIN, currentWeight * WEIGHT_CORRECT);
    state.totalCorrect++;
    state.streakCurrent++;
    if (state.streakCurrent > state.streakBest) {
      state.streakBest = state.streakCurrent;
    }
  } else {
    state.weights[questionId] = Math.min(WEIGHT_MAX, currentWeight * WEIGHT_WRONG);
    state.totalWrong++;
    state.streakCurrent = 0;
  }

  state.history.push({
    id: questionId,
    correct: isCorrect,
    timestamp: Date.now(),
  });

  saveState();
}

// ── Statistics ─────────────────────────────────────────────────────────────────

function getTopicStats() {
  const stats = {};
  TOPICS.forEach(topic => {
    const topicQs = QUESTIONS.filter(q => q.topic === topic);
    const answered = state.history.filter(h => topicQs.some(q => q.id === h.id));
    const correct  = answered.filter(h => h.correct).length;
    const total    = answered.length;
    const avgWeight = topicQs.reduce((s, q) => s + (state.weights[q.id] ?? 1.0), 0) / topicQs.length;

    stats[topic] = {
      total: topicQs.length,
      answered,
      correct,
      wrong: total - correct,
      accuracy: total > 0 ? Math.round((correct / total) * 100) : null,
      avgWeight: avgWeight.toFixed(2),
      mastery: getMasteryLevel(avgWeight),
    };
  });
  return stats;
}

function getMasteryLevel(avgWeight) {
  if (avgWeight <= 0.3) return { label: "Sehr gut", color: "#2ecc71", icon: "🌟" };
  if (avgWeight <= 0.7) return { label: "Gut", color: "#27ae60", icon: "✅" };
  if (avgWeight <= 1.2) return { label: "Lernend", color: "#f39c12", icon: "📚" };
  if (avgWeight <= 2.5) return { label: "Üben", color: "#e67e22", icon: "⚠️" };
  return { label: "Wiederholen", color: "#e74c3c", icon: "🔄" };
}

// ── UI ─────────────────────────────────────────────────────────────────────────

let currentQuestion = null;
let answerLocked = false;
let quizMode = "menu"; // "menu" | "quiz" | "stats"

function init() {
  loadState();
  renderTopicSelector();
  showScreen("menu");
}

function showScreen(screen) {
  quizMode = screen;
  document.getElementById("screen-menu").classList.toggle("hidden", screen !== "menu");
  document.getElementById("screen-quiz").classList.toggle("hidden", screen !== "quiz");
  document.getElementById("screen-stats").classList.toggle("hidden", screen !== "stats");

  if (screen === "stats") renderStats();
  if (screen === "menu") renderMenuStats();
}

function renderTopicSelector() {
  const container = document.getElementById("topic-selector");
  container.innerHTML = "";

  // "All topics" button
  const allBtn = document.createElement("button");
  allBtn.className = "topic-btn" + (state.topicFilter === null ? " active" : "");
  allBtn.textContent = "Alle Themen";
  allBtn.style.borderColor = "#667eea";
  allBtn.onclick = () => setTopicFilter(null);
  container.appendChild(allBtn);

  TOPICS.forEach(topic => {
    const btn = document.createElement("button");
    btn.className = "topic-btn" + (state.topicFilter === topic ? " active" : "");
    btn.textContent = topic;
    btn.style.borderColor = TOPIC_COLORS[topic] || "#667eea";
    if (state.topicFilter === topic) {
      btn.style.backgroundColor = TOPIC_COLORS[topic] || "#667eea";
    }
    btn.onclick = () => setTopicFilter(topic);
    container.appendChild(btn);
  });
}

function setTopicFilter(topic) {
  state.topicFilter = topic;
  saveState();
  renderTopicSelector();
  renderMenuStats();
}

function renderMenuStats() {
  const total = state.totalCorrect + state.totalWrong;
  const accuracy = total > 0 ? Math.round((state.totalCorrect / total) * 100) : 0;
  const available = getAvailableQuestions().length;

  document.getElementById("menu-total").textContent = total;
  document.getElementById("menu-correct").textContent = state.totalCorrect;
  document.getElementById("menu-accuracy").textContent = total > 0 ? accuracy + "%" : "—";
  document.getElementById("menu-streak").textContent = state.streakBest;
  document.getElementById("menu-questions").textContent = available;
}

function startQuiz() {
  answerLocked = false;
  currentQuestion = null;
  showScreen("quiz");
  nextQuestion();
}

function nextQuestion() {
  answerLocked = false;
  document.getElementById("next-btn").classList.add("hidden");
  document.getElementById("explanation").classList.add("hidden");

  const lastId = currentQuestion ? currentQuestion.id : null;
  currentQuestion = pickNextQuestion(lastId);

  if (!currentQuestion) {
    showScreen("menu");
    return;
  }

  renderQuestion(currentQuestion);
}

function updateQuizStatsDisplay() {
  const total = state.totalCorrect + state.totalWrong;
  const accuracy = total > 0 ? Math.round((state.totalCorrect / total) * 100) : 0;
  document.getElementById("quiz-correct").textContent = state.totalCorrect;
  document.getElementById("quiz-wrong").textContent = state.totalWrong;
  document.getElementById("quiz-accuracy").textContent = total > 0 ? accuracy + "%" : "—";
  document.getElementById("quiz-streak").textContent = state.streakCurrent;
}

function renderQuestion(q) {
  // Topic badge
  const badge = document.getElementById("question-topic");
  badge.textContent = q.topic;
  badge.style.backgroundColor = TOPIC_COLORS[q.topic] || "#667eea";

  // Weight indicator
  const w = state.weights[q.id] ?? 1.0;
  const mastery = getMasteryLevel(w);
  const masteryEl = document.getElementById("question-mastery");
  masteryEl.textContent = mastery.icon + " " + mastery.label;
  masteryEl.style.color = mastery.color;

  // Question text (supports code blocks via newline)
  const questionEl = document.getElementById("question-text");
  const parts = q.question.split("\n");
  questionEl.innerHTML = "";

  parts.forEach(part => {
    if (part.trim() === "") return;
    // Lines starting with spaces or containing Python keywords in context are shown as code
    if (part.startsWith(" ".repeat(CODE_INDENT_SPACES)) || part.startsWith("\t")) {
      const code = document.createElement("code");
      code.className = "code-line";
      code.textContent = part;
      questionEl.appendChild(code);
      questionEl.appendChild(document.createElement("br"));
    } else {
      const span = document.createElement("span");
      span.textContent = part;
      questionEl.appendChild(span);
      questionEl.appendChild(document.createElement("br"));
    }
  });

  // Options
  const optionsEl = document.getElementById("options");
  optionsEl.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + i)}</span><span class="option-text">${opt}</span>`;
    btn.onclick = () => selectAnswer(i);
    optionsEl.appendChild(btn);
  });

  // Progress
  updateQuizStatsDisplay();
}

function selectAnswer(selectedIndex) {
  if (answerLocked) return;
  answerLocked = true;

  const q = currentQuestion;
  const isCorrect = selectedIndex === q.answer;

  recordAnswer(q.id, isCorrect);

  // Style the buttons
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) {
      btn.classList.add("correct");
    } else if (i === selectedIndex && !isCorrect) {
      btn.classList.add("wrong");
    }
  });

  // Feedback banner
  const feedback = document.getElementById("feedback");
  feedback.textContent = isCorrect ? "✅ Richtig!" : "❌ Falsch!";
  feedback.className = "feedback " + (isCorrect ? "feedback-correct" : "feedback-wrong");
  feedback.classList.remove("hidden");

  // Explanation
  const explanationEl = document.getElementById("explanation");
  explanationEl.textContent = q.explanation;
  explanationEl.classList.remove("hidden");

  // Show next button
  document.getElementById("next-btn").classList.remove("hidden");

  // Update quiz stats display
  updateQuizStatsDisplay();
}

function renderStats() {
  const stats = getTopicStats();
  const container = document.getElementById("stats-topics");
  container.innerHTML = "";

  const total = state.totalCorrect + state.totalWrong;
  const accuracy = total > 0 ? Math.round((state.totalCorrect / total) * 100) : 0;

  document.getElementById("stats-total").textContent = total;
  document.getElementById("stats-correct").textContent = state.totalCorrect;
  document.getElementById("stats-wrong").textContent = state.totalWrong;
  document.getElementById("stats-accuracy").textContent = total > 0 ? accuracy + "%" : "—";
  document.getElementById("stats-streak-best").textContent = state.streakBest;

  TOPICS.forEach(topic => {
    const s = stats[topic];
    const color = TOPIC_COLORS[topic] || "#667eea";
    const mastery = s.mastery;
    const answered = s.answered.length;

    const bar = s.accuracy !== null
      ? `<div class="progress-bar"><div class="progress-fill" style="width:${s.accuracy}%; background:${color}"></div></div>`
      : `<div class="progress-bar"><div class="progress-fill" style="width:0%"></div></div>`;

    const card = document.createElement("div");
    card.className = "stats-card";
    card.innerHTML = `
      <div class="stats-card-header" style="border-left: 4px solid ${color}">
        <span class="stats-topic-name">${topic}</span>
        <span class="mastery-badge" style="color:${mastery.color}">${mastery.icon} ${mastery.label}</span>
      </div>
      <div class="stats-card-body">
        <div class="stats-row">
          <span>Fragen im Thema:</span><strong>${s.total}</strong>
        </div>
        <div class="stats-row">
          <span>Beantwortet:</span><strong>${answered}</strong>
        </div>
        <div class="stats-row">
          <span>Richtig:</span><strong style="color:#2ecc71">${s.correct}</strong>
        </div>
        <div class="stats-row">
          <span>Falsch:</span><strong style="color:#e74c3c">${s.wrong}</strong>
        </div>
        <div class="stats-row">
          <span>Genauigkeit:</span><strong>${s.accuracy !== null ? s.accuracy + "%" : "—"}</strong>
        </div>
        ${bar}
      </div>
    `;
    container.appendChild(card);
  });
}

function confirmReset() {
  if (confirm("Möchtest du wirklich alle Fortschritte zurücksetzen? Diese Aktion kann nicht rückgängig gemacht werden.")) {
    resetState();
    renderTopicSelector();
    renderMenuStats();
    showScreen("menu");
  }
}

// Start the app when DOM is ready
document.addEventListener("DOMContentLoaded", init);
