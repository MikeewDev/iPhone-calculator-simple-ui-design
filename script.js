let currentInput = '';
let previousInput = '';
let operation = null;
let shouldResetScreen = false;

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.textContent) {
            case 'AC':
                clear();
                updateDisplay();
                break;
            case '±':
                if (currentInput) currentInput = currentInput.startsWith('-') ? currentInput.substr(1) : '-' + currentInput;
                updateDisplay();
                break;
            case '%':
                if (currentInput) currentInput = String(parseFloat(currentInput) / 100);
                updateDisplay();
                break;
            case '÷':
            case '×':
            case '-':
            case '+':
                setOperation(button.textContent);
                break;
            case '=':
                calculate();
                updateDisplay();
                break;
            case '.':
                if (!currentInput.includes('.')) currentInput += '.';
                updateDisplay();
                break;
            default:
                if (shouldResetScreen) resetScreen();
                currentInput += button.textContent;
                updateDisplay();
                break;
        }
    });
});

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let calculation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '÷':
            calculation = prev / current;
            break;
        case '×':
            calculation = prev * current;
            break;
        case '-':
            calculation = prev - current;
            break;
        case '+':
            calculation = prev + current;
            break;
        default:
            return;
    }
    currentInput = calculation.toString();
    operation = undefined;
    previousInput = '';
    shouldResetScreen = true;
}

function clear() {
    currentInput = '';
    previousInput = '';
    operation = null;
}

function resetScreen() {
    currentInput = '';
    shouldResetScreen = false;
}

function updateDisplay() {
  let formattedNumber = Number(currentInput).toLocaleString('pt-BR');
  display.textContent = formattedNumber !== '0' ? formattedNumber : '0';
}

updateDisplay();
