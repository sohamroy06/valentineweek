const button = document.getElementById('surpriseButton');
const heartContainer = document.getElementById('heartContainer');

button.addEventListener('click', () => {
    alert("You are the love of my life, and I cherish every moment with you. ❤️");
    generateHearts();
});

function generateHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '-50px';
        heart.style.animation = `float ${Math.random() * 3 + 2}s infinite ease-in-out, 
                                  move ${Math.random() * 3 + 2}s linear`;

        heart.style.fontSize = Math.random() * 1.5 + 1 + 'rem';
        heart.style.opacity = Math.random();
        heartContainer.appendChild(heart);

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}


