let score = 0;
const scoreElement = document.getElementById('score');
const ball = document.getElementById('ball');


function moveBall() {
    const maxWidth = window.innerWidth - ball.offsetWidth;
    const maxHeight = window.innerHeight - ball.offsetHeight;
    
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;
    
    ball.style.left = `${randomX}px`;
    ball.style.top = `${randomY}px`;
}


ball.addEventListener('click', () => {
    score++;
    scoreElement.textContent = `Punten: ${score}`;
    
    
    ball.style.transform = "scale(0.8)"; 
    
    
    setTimeout(() => {
        ball.style.transform = "scale(1)";  
    }, 150);
    
    moveBall();  
});


moveBall();


setInterval(moveBall, 1500);
