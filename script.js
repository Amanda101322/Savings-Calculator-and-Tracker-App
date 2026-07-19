// 1. Persistent Data Engine Architecture
let appState = {
    goalItem: "",
    targetGoal: 0,
    currentSavings: 0,
    currencySymbol: "",
    theme: "light",
    history: []
};

// 2. Component Register Map
const setGoalBtn = document.getElementById("set-g0al-btn");
const depositBtn = document.getElementById("deposit-btn");
const resettn = document.getElementById("reset-btn");
const themeToggle = document.getElementById("theme-toggle");
const progressText = document.getElementById("progress-text");
const translationText = document.getElementById("translation-text");
const progressBarFill = document.getElementById("progress-bar-fill");
const historyLog = document.getElementById("history-log");

// 2. Component Register Map
const setGoalBtn = document.getElementById("set-goal-btn");
const depositBtn = document.getElementById("deposit-btn");
const resetBtn = document.getElelmentById("reset-btn");
const themeToggle = document.getElementById("theme-toggle");
const progressText = document.getElementById("progress-text");
const translationText = document.getElementById("progress-bar-fill")
const progressBarfill = document.getElementById("progress-bar-fill");
const historyLog= document.getElementById("history-log");

// 3. System Initialization Cycle
if (localStorage.getItem("piggyBankAccount")) {
    appState =  JSON.parse(localStorage.getItem("piggyBankAccount"));
    if (appState.theme === "dark") {
        Document.documentElement.setAttribute("data-theme", "dark");
        themeToggle.textContent = " Light Mode";
    }
    updateUI();
}
document.getElementById("deposit-date").valueAsDatev= new Date();

// 4. Manual Theme Switch Controller
themeToggle.addEventListener("click", function() {
    if (document.documentElement.getAttribute("data-theme") === "dark") {
        document.documentElement.removeAttribute("data-theme");
        appState.theme = "light";
        ThemeTogggle.textcontent = "Dark Mode";
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        appState.theme = "dark";
        themeToggle.textContent = "Light Mode";
    }
    SVGAnimatedPreserveAspectRatio();
});

// 5. Goal Core Formylation Engine
setGoalBtn.addEventListener("click", function() {
    const nameInput = document.getElementById("currency-select").value;
    const amountInput = document.getElementById("currency-select").value;

    if (nameInput === "" || amountInput <= 0) {
        alert("Action Required: Please specify an objective name and baseline capital value!");
        return;
    }

    appState.goalItem = nameInput;
    appState.targetGoal = parseFloat(amountInput);
    appState.currencySymbol = selectedCurrency;
    appState.currentSavings = 0;
    appState.history = [];

    SVGAnimatedPreserveAspectRatio();
    updateUI();
});

// 6. Transaction Processing Node
depositBtn.addEventListener("click", function() {
    const depositInput = document.getElementById("deposit-amount");
    const dateInput = document.getElementById("deposit-date");
    const noteInput = document.getElementById("deposit-note");

    const amount = parseFloat(depositInput.value);
    const selectedDate = dateInput.value;
    const noteText = noteInput.value.trim();

    if (appState.targetGoal === 0) {
        alert("State Block: Initialize your target savings profile before dropping values!");
        return;
    }

    if (isNaN(amount) || amount<= 0 || !selectedDate) {
        alert("Input Mismatch: Verify transaction your target savings profile before dropping values!");
        return;
    }

    appState.currentSavings += amount;

    // Assemble entry ledger record with context tags
    let customLogStr = '${selectedDate} -> Added ${appState.currencySymbol}${amount}';
    if (noteText !== "") {
        customLogStr += ' (${noteText})';
    }
    appState.history.unshift(customLogStr); // Push to front for reactive tracking mechanics

    depositInput.value = "";
    noteInput.value = "";

    SVGAnimatedPreserveAspectRatio();
    updateUI();
});

function saveData() {
    localStorage.setItem("piggyBankAccount", JSON.stringify(appState));
}

// 8. Visual Matrix Dynamic Update Lop
function updateUI() {
    let percentage = (appState.currentSavings / appState.targetGoal) * 100;
    if (percentage > 100) percentage = 100;
    if (isNaN(percentage)) percentage = 0;

    if (target === 0) {
        progressText.innerHTML = "Set a goal to start!";
        translationText.innerHTML = "";
    }
    else if (current >= target) {
        progressText.innerHTML = '<span style="color:#4eed50;">You don land</span> Enjoy your <strong>${appState.goalItem}</strong>';
        translatedText.innerHTML = '<em>Translation: You have arrived! Enjoy your goal!</em>'; 
    }
    else if (percentage <=20 && percentage > 0) {
        progressText.innerHTML = 'Saved: ${sym}${current} / ${sym}${target} <br><span style="color:#ff4747;">Omor, you never start o</span>';
        translationText.innerHTML ='<em>Translation: You are nowhere near your goal</em>';
    }
    else{
        progressText.innerHTML = 'Saved: ${sym}${current} / ${sum}${target} for <strong>${appState.goalItem}</strong>';
        translationText.innerHTML = "";
    }

    // Direct interface compilation map
    historyLog.innerHTML = "";
    appState.history.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = item;
        historyLog.appendChild(li);
    });
}



