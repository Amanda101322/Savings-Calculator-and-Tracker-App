document.getElementById('calculate-btn').addEventListener('click', function() {
    // 1. Fetch values from inputs
    const goalName = document.getElementById('goal-name').value.trim();
    const targetAmount = parseFloat(document.getElementById('target-amount').value);
    const currentSavings = parseFloat(document.getElementById('current-savings').value);
    const weeklyDeposit = parseFloat(document.getElementById('weekly-deposit').value);
    const resultBox = document.getElementById('result');

    // 2. Clear previous error/animations
    resultBox.classList.add('hidden');
    resultBox.classList.remove('bounce-in');

    // 3. Simple input checks
    if (!goalName || isNaN(targetAmount) || isNaN(currentSavings) || isNaN(weeklyDeposit)) {
        resultBox.innerHTML = "❌ Oops! Please fill out all boxes with valid numbers.";
        resultBox.style.backgroundColor = "#ff7675";
        resultBox.style.borderColor = "#d63031";
        resultBox.style.color = "#fff";
        resultBox.classList.remove('hidden');
        resultBox.classList.add('bounce-in');
        return;
    }

    if (currentSavings >= targetAmount) {
        resultBox.innerHTML = `🎉 You already have enough saved to buy your <strong>${goalName}</strong>! Amazing job!`;
        resultBox.style.backgroundColor = "#2ed573";
        resultBox.style.borderColor = "#26af5f";
        resultBox.style.color = "#fff";
        resultBox.classList.remove('hidden');
        resultBox.classList.add('bounce-in');
        return;
    }

    if (weeklyDeposit <= 0) {
        resultBox.innerHTML = "🤔 Your weekly deposit needs to be greater than $0 to reach your goal!";
        resultBox.style.backgroundColor = "#ff7675";
        resultBox.style.borderColor = "#d63031";
        resultBox.style.color = "#fff";
        resultBox.classList.remove('hidden');
        resultBox.classList.add('bounce-in');
        return;
    }

    // 4. Calculate total weeks needed
    const remainingAmount = targetAmount - currentSavings;
    const weeksNeeded = Math.ceil(remainingAmount / weeklyDeposit);

    // 5. Display successful result with bubbly animation style
    resultBox.style.backgroundColor = "#eccc68";
    resultBox.style.borderColor = "#ffa502";
    resultBox.style.color = "#2f3542";
    
    resultBox.innerHTML = `
        To get your <strong>${goalName}</strong>, you need to save <strong>$${remainingAmount.toFixed(2)}</strong> more.<br>
        At $${weeklyDeposit.toFixed(2)} per week, you will hit your goal in <strong>${weeksNeeded} weeks</strong>!
    `;
    
    // Show and trigger animation
    resultBox.classList.remove('hidden');
    resultBox.classList.add('bounce-in');
});