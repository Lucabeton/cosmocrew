let score = 0;
const scoreElement = document.getElementById('score');
const ball = document.getElementById('ball');

// Functie om de bal op een willekeurige positie te verplaatsen
function moveBall() {
    const maxWidth = window.innerWidth - ball.offsetWidth;
    const maxHeight = window.innerHeight - ball.offsetHeight;
    
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;
    
    ball.style.left = `${randomX}px`;
    ball.style.top = `${randomY}px`;
}

// Eventlistener voor het klikken op de bal
ball.addEventListener('click', () => {
    score++;
    scoreElement.textContent = `Punten: ${score}`;
    
    // Maak de bal tijdelijk kleiner
    ball.style.transform = "scale(0.8)";  // Verklei de bal naar 80% van zijn grootte
    
    // Na 150ms (de tijd dat het klein is) stel de bal weer in op zijn normale grootte
    setTimeout(() => {
        ball.style.transform = "scale(1)";  // Terug naar originele grootte
    }, 150);
    
    moveBall();  // Verplaats de bal naar een nieuwe willekeurige plek
});

// Start het spel door de bal een willekeurige plek te geven
moveBall();

// Optioneel: Verplaats de bal elke 1,5 seconde voor extra uitdaging
setInterval(moveBall, 1500);
