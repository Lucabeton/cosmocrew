// Countdown timer script
function startCountdown(duration) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;

        document.getElementById('timer').textContent =
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// Start countdown from 1 hour
startCountdown(3600);



