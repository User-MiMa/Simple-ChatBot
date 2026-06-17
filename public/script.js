const btn = document.getElementById('button');
const answerWindow = document.querySelector('.answer');

btn.addEventListener('click', showAnswer);

async function showAnswer() {

    const prompt = document.getElementById('promptSpace').value;

    answerWindow.style.width='50vw';
    answerWindow.style.height='50vw';
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

    // Mostrar respuesta del modelo en UI
    answerWindow.textContent = data.reply;

}
