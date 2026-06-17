const btn = document.getElementById('button');
const answerWindow = document.querySelector('.answer');
const promptSpace = document.getElementById('promptSpace');

btn.addEventListener('click', showAnswer);

async function showAnswer() {

    const prompt = document.getElementById('promptSpace').value;

    promptSpace.value = "";

    answerWindow.classList.add('active');
    answerWindow.style.border='3px solid';

    // Hacer POST a API con prompt de usuario del UI y recibir respuesta
    const res = await fetch('/chat', 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({prompt})
        }
    )

    // Leer y parsear a JSON
    const data = await res.json();

    // Mostrar respuesta del modelo en UI con HTML
    answerWindow.innerHTML = data.reply;

}
