const intro = document.querySelector('.home__intro');
const surprise = document.querySelector('.home__surprise');
const reveal = document.querySelector('.home__reveal');

const box = document.querySelector('.home__box');

const celebration = document.querySelector('.home__celebration');
const celebrationVideoContainer = document.querySelector('.home__celebration-video');
const celebrationVideo = document.querySelector('.home__celebration-media');
const photos = document.querySelectorAll('.home__photo');

const musica = new Audio('./audio/intro1.mp3');
const introText = document.querySelector('.home__intro-text');

intro.addEventListener('click', () => {
    musica.play();

    musica.addEventListener('ended', () => {
        introText.classList.add('is-hidden');
        intro.style.display = 'none';
        surprise.style.display = 'flex';
    }, { once: true });
});

box.addEventListener('click', () => {
    surprise.style.display = 'none';
    celebration.style.display = 'flex';

    celebrationVideoContainer.classList.remove('is-expanded');
    celebrationVideoContainer.classList.remove('is-hidden');

    celebrationVideo.currentTime = 0;
    celebrationVideo.style.opacity = '1';

    requestAnimationFrame(() => {
        celebrationVideoContainer.classList.add('is-expanded');
        celebrationVideo.play();
    });
});

celebrationVideo.addEventListener('ended', () => {
    celebrationVideoContainer.classList.add('is-hidden');

    setTimeout(() => {
        celebrationVideoContainer.style.display = 'none';

        photos.forEach((photo, index) => {
            setTimeout(() => {
                photo.style.display = 'block';
            }, index * 3000);
        });
    }, 1500);
});