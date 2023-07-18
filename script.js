
const game = document.getElementById('game')
game.addEventListener('click', ()=>{
    StartGame()
    game.style.display = 'none'
})
let score = 0

function StartGame(){
    score = 0;
    const scoreEl = document.getElementById('scoreDisplay')
    scoreEl.textContent = score;
    let rTime = 60;
    function TimerDisplay() {
        const timerDisplay = document.getElementById('timerDisplay');
        timerDisplay.textContent = rTime;
    }
    function increaseScore() {
        score++;
        const scoreEl = document.getElementById('scoreDisplay')
        scoreEl.textContent = score;
        const activeCell = document.querySelector('.kletka.active');
        if (activeCell) {
            activeCell.classList.remove('active');
        }
    }
    
    function RandomCell() {
        const kletka = document.querySelectorAll('.kletka');
        kletka.forEach((cell) => {
            cell.classList.remove('active');
        });
        let index = Math.floor(Math.random() * kletka.length);
        kletka[index].classList.add('active');
    
        kletka.forEach((el) => {
            el.addEventListener('click', () => {
            if (el.classList.contains('active')) {
                increaseScore();
            }
            });
        });
    
        setTimeout(() => {
            kletka[index].classList.remove('active');
        }, 1000);
    
    
    }
    const timerInterval = setInterval(() => {
        rTime--;
        TimerDisplay();
        if (rTime <= 0) {
            clearInterval(timerInterval);
            clearInterval(interval);
            game.style.display = 'inline'
        }
    }, 1000);
    const interval = setInterval(RandomCell, 1000);
}
