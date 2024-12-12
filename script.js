
 function generateNumbers() {
    const numbers = [];
    while (numbers.length < 5) {
        const num = Math.floor(Math.random() * 100) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}


function showNumbers() {
    const numbers = generateNumbers();
    const numbersElement = document.getElementById('numbers');
    numbersElement.textContent = numbers.join(' ');
    
   
    let timeLeft = 5;
    const timerElement = document.getElementById('timer');
    const timerInterval = setInterval(function() {
        timerElement.textContent = `Tempo rimasto: ${timeLeft} secondi`;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            hideNumbersAndShowInputs(numbers);
        }
        timeLeft--;
    }, 1000);
}

function hideNumbersAndShowInputs(numbers) {
    document.getElementById('numbers').classList.add('hidden');
    document.getElementById('timer').classList.add('hidden');
    document.getElementById('inputs').classList.remove('hidden');
    window.numbersToGuess = numbers;
}


function checkAnswers() {
    const userAnswers = [
        document.getElementById('input1').value,
        document.getElementById('input2').value,
        document.getElementById('input3').value,
        document.getElementById('input4').value,
        document.getElementById('input5').value
    ].map(Number);

    const correctAnswers = [];
    userAnswers.forEach((answer, index) => {
        if (window.numbersToGuess.includes(answer)) {
            correctAnswers.push(answer);
        }
    });

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Hai indovinato ${correctAnswers.length} numeri!<br>Numeri indovinati: ${correctAnswers.join(', ')}`;
}

showNumbers();