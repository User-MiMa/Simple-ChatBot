const btn = document.getElementById('button');
const answerWindow = document.querySelector('.answer');
const prompt = document.getElementById('promptSpace');

btn.addEventListener('click', showAnswer);

function showAnswer() {
    answerWindow.style.width='50vw';
    answerWindow.style.height='50vw';
    answerWindow.style.border='3px solid';

    answerWindow.textContent=prompt.value;
}
