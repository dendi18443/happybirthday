document.addEventListener('DOMContentLoaded', function () {
    const heartCount = 20; // Jumlah hati yang jatuh
    const container = document.querySelector('.falling-hearts');

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
    }
});