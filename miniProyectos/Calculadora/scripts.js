document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const modoBtn = document.getElementById('modo-tema');
    const historyEl = document.getElementById('history');

    let currentInput = "";
    let resetNext = false;
    let history = [];

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            const action = button.dataset.action;

            if (action === 'clear') {
                currentInput = "";
                display.textContent = "0";
                historyEl.innerHTML = ""
                return;
            }

            if (action === "back") {
                currentInput = currentInput.slice(0, -1);
                display.textContent = currentInput || "0";
                return;
            }

            if (action === "=") {
                try {
                    const result = eval(currentInput).toString();
                    history.unshift(`${currentInput} = ${result}`);
                    if (history.length > 5) history.pop();
                    renderHistory();
                    currentInput = result;
                    display.textContent = result;
                    resetNext = true;
                } catch {
                    display.textContent = "error";
                }
                return;
            }
            if (resetNext) {
                currentInput = "";
                resetNext = false;
            }
            currentInput += action ? action : value;
            display.textContent = currentInput;
        });
    });

    function renderHistory() {
        historyEl.innerHTML = history
            .map(item => `<div>${item}</div>`)
            .join("");
    }
    modoBtn.addEventListener('click', () => {
        document.body.classList.toggle("light");
    });
});