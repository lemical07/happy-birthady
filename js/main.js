const intro = document.querySelector('.home__intro');
const news = document.querySelector('.home__news');
const surprise = document.querySelector('.home__surprise');
const reveal = document.querySelector('.home__reveal');

const video = document.querySelector('.home__news-video');
const box = document.querySelector('.home__box');
const celebration = document.querySelector('.home__celebration');
const celebrationVideoContainer = document.querySelector('.home__celebration-video');
const celebrationVideo = document.querySelector('.home__celebration-media');
let videoFading = false;


const musica = new Audio('./audio/intro1.mp3');
const introText = document.querySelector('.home__intro-text');

intro.addEventListener('click', () => {
    musica.play();
    musica.addEventListener('ended', () => {
        introText.classList.add('is-hidden');
        intro.style.display = 'none';
        news.style.display = 'flex';
        video.play();
        monitorVideoFade();
    }, { once: true });
});

function monitorVideoFade() {
    if (videoFading || video.paused || video.ended) {
        return;
    }
    const remaining = video.duration - video.currentTime;
    if (remaining <= 3) {
        videoFading = true;
        const startVolume = video.volume;
        function fadeOut() {
            const remaining = Math.max(
                video.duration - video.currentTime,
                0
            );
            const progress = Math.min(
                (3 - remaining) / 3,
                1
            );
            video.volume = startVolume * (1 - progress);
            video.style.opacity = 1 - progress;
            if (progress < 1 && !video.ended) {
                requestAnimationFrame(fadeOut);
            } else {
                video.pause();
                news.style.display = 'none';
                surprise.style.display = 'flex';
            }
        }
        requestAnimationFrame(fadeOut);
        return;
    }
    requestAnimationFrame(monitorVideoFade);
}
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
        celebration.style.display = 'none';
        reveal.style.display = 'flex';

        requestAnimationFrame(() => {
            reveal.classList.add('is-visible');
        });
    }, 1500);
});