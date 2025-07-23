// ========== Typewriter Intro ==============
let para = "Put your typing skills to the test — race against the clock!";
let textElement = document.getElementById("typed-text");
let index = 0;

const typingtext = setInterval(() => {
    textElement.innerText = para.slice(0, index);
    index++;
    if (index > para.length) clearInterval(typingtext);
}, 70);

const stoptypewriter = () => clearInterval(typingtext);

// ========== Element Selection ==============
const homePage = document.getElementById("home-page");
const typingScreen = document.querySelector(".typing-screen");
const buttonContainer = document.getElementById("timer-select");

const displayArea = document.getElementById("display-paragraph");
const inputField = document.getElementById("hidden-input");
const timerDisplay = document.querySelector(".timer");
const timerButtons = document.querySelectorAll(".timer-btn");
const errorCountDisplay = document.getElementById("error-count");

// ========== Paragraph Setup ==============
function fetchParagraph() {
  let paragraphList;
  if (totalTimeSet <= 30) {
    paragraphList = shortParagraphs;
  }
   else if (totalTimeSet >= 31 && totalTimeSet <=60) {
    paragraphList = midParagraphs;
    }
 else {
    paragraphList = longParagraphs;
  }

  const index = Math.floor(Math.random() * paragraphList.length);
  const selectedText = paragraphList[index];

  renderParagraph(selectedText);
}

// ========== Timer Logic ==============
let timer = null;
let timeLeft = 30;
let totalTimeSet = 30;
let timerStarted = false;
let errors = 0;

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function startTimer() {
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = formatTime(timeLeft);
        } else {
            clearInterval(timer);
            endTest();
        }
    }, 1000);
}

function completedTyping() {
  const targetSpans = displayArea.querySelectorAll("span");
  const typedText = inputField.value;

  for (let i = 0; i < targetSpans.length; i++) {
    if (typedText[i] !== targetSpans[i].innerText) {
      return false;
    }
  }

  if (typedText.length === targetSpans.length) {
    clearInterval(timer);

    const wordCount = typedText.trim().split(/\s+/).filter(Boolean).length;
    const timeUsed = totalTimeSet - timeLeft || 1;
    const wpm = Math.round((wordCount / timeUsed) * 60);

    document.getElementById("popup-content-text").innerHTML = "Completed!!";
    document.getElementById("wpm-result").textContent = `WPM: ${wpm}`;
    document.getElementById("char-count").textContent = `Total Characters: ${typedText.length}`;
    document.getElementById("mistakes").textContent = `Mistakes: ${errors || 0}`;
    document.getElementById("result-popup").classList.remove("hide");

    document.getElementById("close-popup").addEventListener("click", () => {
      document.getElementById("result-popup").classList.add("hide");
    });

    return true;
  }

  return false;
}

function endTest() {
    clearInterval(timer);
    inputField.blur();

    const typed = inputField.value.trim();
    const wordCount = typed.split(/\s+/).filter(Boolean).length;
    const wpm = Math.round((wordCount / totalTimeSet) * 60);

    document.getElementById("wpm-result").textContent = `WPM: ${wpm}`;
    document.getElementById("char-count").textContent = `Total Characters: ${typed.length}`;
    document.getElementById("mistakes").textContent = `Mistakes: ${errors}`;
    document.getElementById("result-popup").classList.remove("hide");

    document.getElementById("close-popup").addEventListener("click", () => {
      document.getElementById("result-popup").classList.add("hide");
    });
}

// ========== Typing Logic ==============
inputField.addEventListener("input", () => {
    const chars = displayArea.querySelectorAll("span");
    const typedText = inputField.value;
    

    if (!timerStarted) {
        startTimer();
        timerStarted = true;
    }

    errors = 0;

    chars.forEach((charSpan, index) => {
        const typedChar = typedText[index];

        if (typedChar == null) {
            charSpan.classList.remove("correct", "incorrect");
        } else if (typedChar === charSpan.innerText) {
            charSpan.classList.add("correct");
            charSpan.classList.remove("incorrect");
        } else {
            charSpan.classList.add("incorrect");
            charSpan.classList.remove("correct");
            errors++;
        }
    });

    errorCountDisplay.innerText = errors;

    const isComplete = [...chars].every(span => span.classList.contains("correct"));
    if (isComplete && typedText.length === chars.length) {
        completedTyping();
    }
    
});

// ========== Focus Hidden Input on Click ==============
document.addEventListener("click", () => inputField.focus());

// ========== Timer Button Selection ==============
timerButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        stoptypewriter();

        const value = btn.dataset.time;

        if (value === "custom") {
            const userTime = prompt("Enter custom time in seconds:");
            const customTime = parseInt(userTime);
            if (!isNaN(customTime) && customTime > 0) {
                timeLeft = totalTimeSet = customTime;
            } else {
                alert("Invalid time. Using 30s.");
                timeLeft = totalTimeSet = 30;
            }
        } else {
            timeLeft = totalTimeSet = parseInt(value);
        }

        timerDisplay.textContent = formatTime(timeLeft);
        inputField.value = "";
        timerStarted = false;
        errors = 0;
        errorCountDisplay.innerText = "0";

        fetchParagraph();

        homePage.classList.add("hidden");
        typingScreen.classList.remove("hide");
        typingScreen.classList.add("show");

        inputField.focus();
    });
});

// ========== Reset Button ==============
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    timerStarted = false;
    timeLeft = totalTimeSet;

    inputField.value = "";
    errorCountDisplay.innerText = "0";

    const chars = displayArea.querySelectorAll("span");
    chars.forEach(span => span.classList.remove("correct", "incorrect"));

    fetchParagraph();

    timerDisplay.textContent = formatTime(timeLeft);
    inputField.focus();
});



