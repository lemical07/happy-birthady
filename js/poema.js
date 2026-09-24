const startScreen = document.querySelector('#poemStart');
const startButton = document.querySelector('#poemStartButton');
const experience = document.querySelector('#poemExperience');
const video = document.querySelector('.poem__background');

function iniciarPoema() {
    startScreen.style.display = 'none';
    experience.style.display = 'block';

    video.play().catch(() => {
        console.log('El video no pudo iniciar.');
    });
}

startButton.addEventListener('click', iniciarPoema);