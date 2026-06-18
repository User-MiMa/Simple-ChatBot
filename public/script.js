const btn = document.getElementById('button');
const answerWindow = document.querySelector('.answer');
const promptSpace = document.getElementById('promptSpace');

// Almacenar historial de conversación
let conversationHTML = "";

btn.addEventListener('click', showAnswer);

async function showAnswer() {

    const prompt = document.getElementById('promptSpace').value;

    document.getElementById('title').classList.add('active');
    document.querySelector('.chatContainer').classList.add('has-answer');
    answerWindow.classList.add('active');
    answerWindow.style.border='3px solid #C9C9C1';

    // Renderizar historial + mensaje del usuario
    answerWindow.innerHTML = conversationHTML + `<p id='mensaje'>${prompt}</p>`;
    promptSpace.value = "";
    answerWindow.scrollTop = answerWindow.scrollHeight;

    // Hacer POST a API con prompt de usuario del UI y recibir respuesta
    const res = await fetch('/chat', 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({prompt})
        }
    );

    // Recibir stream y renderizar HTML en tiempo real
    for await (const chunk of res.body) {
        const text = new TextDecoder().decode(chunk);
    
        answerWindow.innerHTML = conversationHTML + `<p id='mensaje'>${prompt}</p>` + text;
        answerWindow.scrollTop = answerWindow.scrollHeight;
    }

    // Guardar todo el HTML actual como historial para siguiente pregunta
    conversationHTML = answerWindow.innerHTML;
}