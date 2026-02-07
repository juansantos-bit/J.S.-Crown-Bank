let balance = Number(localStorage.getItem('savedBalance')) || 5000;
document.getElementById('balance-text').innerText = balance;

// Função de Saque
function withdraw() {
    let inputField = document.getElementById('amount-input');
    let amount = Number(inputField.value);

    if (amount > 0 && balance >= amount) {
        balance -= amount; // Isso é o mesmo que: balance = balance - amount
        updateUI("Success! Withdrew $" + amount, "green");
    } else {
        updateUI("Error: Check your funds!", "red");
    }
    inputField.value = "";
}

// Função de Depósito (Sua nova tarefa)
function deposit() {
    let inputField = document.getElementById('amount-input');
    let amount = Number(inputField.value);

    if (amount > 0) {
        balance += amount; // Soma o valor ao saldo
        updateUI("Success! Deposited $" + amount, "green");
    } else {
        updateUI("Enter a valid amount!", "red");
    }
    inputField.value = "";
}

// Função extra para economizar código (DRY - Don't Repeat Yourself)
function updateUI(message, color) {
    localStorage.setItem('savedBalance', balance);
    document.getElementById('balance-text').innerText = balance;
    let msgElement = document.getElementById('message');
    msgElement.innerText = message;
    msgElement.style.color = color;
}

function resetBalance() {
    // 1. Limpa o banco de dados local do navegador
    localStorage.clear();

    //2. Reseta o saldo para o valor inicial de empresario inciante
    balance = 5000;

    //3. Use aquela função updateUI que criamos para atualizar a tela e salvar o novo saldo
    updateUI("Account reset successful!", "blue");
}