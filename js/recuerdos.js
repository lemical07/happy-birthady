const recuerdos = [
    './img/r1.png',
    './img/r2.png',
    './img/r3.png',
    './img/r4.png',
    './img/r5.png',
    './img/r6.png',
    './img/r7.png',
    './img/r8.png',
    './img/r9.png',
    './img/r10.png'
];

const startScreen = document.querySelector('#startScreen');
const startButton = document.querySelector('#startButton');
const experience = document.querySelector('#memoriesExperience');
const video = document.querySelector('.memories__background');
const carousel = document.querySelector('#memoriesCarousel');
const circle = document.querySelector('#memoriesCircle');
const counter = document.querySelector('#counter');
const instruction = document.querySelector('#instruction');

let currentIndex = 0;
let isDragging = false;
let startX = 0;
let currentX = 0;

function crearRecuerdo() {
    const photo = document.createElement('div');

    photo.className = 'memories__photo';

    photo.innerHTML = `
        <div class="memories__photo-reflection memories__photo-reflection--top">
            <img src="${recuerdos[currentIndex]}" alt="">
        </div>

        <div class="memories__photo-main">
            <img src="${recuerdos[currentIndex]}" alt="Recuerdo ${currentIndex + 1}">
        </div>

        <div class="memories__photo-reflection memories__photo-reflection--bottom">
            <img src="${recuerdos[currentIndex]}" alt="">
        </div>
    `;

    circle.appendChild(photo);
}

function actualizarRecuerdo() {
    const photo = document.querySelector('.memories__photo');
    const images = photo.querySelectorAll('img');

    images.forEach((image, index) => {
        image.src = recuerdos[currentIndex];

        if (index === 1) {
            image.alt = `Recuerdo ${currentIndex + 1}`;
        }
    });

    counter.textContent = `${currentIndex + 1} / ${recuerdos.length}`;
}

function cambiarRecuerdo(direccion) {
    currentIndex += direccion;

    if (currentIndex >= recuerdos.length) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = recuerdos.length - 1;
    }

    actualizarRecuerdo();
}

function iniciarExperiencia() {
    startScreen.style.display = 'none';
    experience.style.display = 'flex';

    video.play().catch(() => {
        console.log('El video no pudo iniciar.');
    });
}

function comenzarArrastre(event) {
    isDragging = true;
    startX = event.clientX;
    currentX = event.clientX;

    carousel.setPointerCapture(event.pointerId);

    instruction.classList.add('is-hidden');
}

function moverArrastre(event) {
    if (!isDragging) return;

    currentX = event.clientX;

    const distance = currentX - startX;
    const photo = document.querySelector('.memories__photo');

    photo.style.transition = 'none';

    photo.style.transform = `
        translate(calc(-50% + ${distance}px), -50%)
        rotate(${distance * 0.03}deg)
    `;
}

function terminarArrastre(event) {
    if (!isDragging) return;

    isDragging = false;

    carousel.releasePointerCapture(event.pointerId);

    const distance = currentX - startX;
    const photo = document.querySelector('.memories__photo');

    photo.style.transition = 'transform 0.3s ease';

    if (Math.abs(distance) > 80) {
        const direccion = distance < 0 ? 1 : -1;

        cambiarRecuerdo(direccion);

        photo.style.transform = `
            translate(calc(-50% + ${direccion * 100}%), -50%)
            rotate(${direccion * -5}deg)
        `;

        setTimeout(() => {
            photo.style.transition = 'none';
            photo.style.transform = 'translate(-50%, -50%)';

            setTimeout(() => {
                photo.style.transition = 'transform 0.3s ease';
            }, 20);
        }, 300);

        return;
    }

    photo.style.transform = 'translate(-50%, -50%) rotate(0deg)';
}

crearRecuerdo();

startButton.addEventListener('click', iniciarExperiencia);

carousel.addEventListener('pointerdown', comenzarArrastre);
carousel.addEventListener('pointermove', moverArrastre);
carousel.addEventListener('pointerup', terminarArrastre);
carousel.addEventListener('pointercancel', terminarArrastre);