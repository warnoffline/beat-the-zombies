
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

    function plusScore() {
        score++;
        scoreEl.textContent = score;
        scoreEl.classList.remove('red')
        scoreEl.classList.add('green')
        const activeCell = document.querySelector('.kletka.zombie');
        if (activeCell) {
            activeCell.classList.add('zdanie')
            activeCell.classList.remove('zombie');
        }
    }
    function minusScore(){
        score--;
        scoreEl.textContent = score;
        scoreEl.classList.remove('green')
        scoreEl.classList.add('red')
        const activeCell = document.querySelector('.kletka.people');
        if (activeCell) {
            activeCell.classList.add('zdanie')
            activeCell.classList.remove('people');
        }
    }
    
    function RandomZombie() {
        const kletka = document.querySelectorAll('.kletka');
        kletka.forEach((cell) => {
            cell.classList.remove('zombie');
            cell.classList.remove('people');
            cell.classList.add('zdanie')
        });
        let index = Math.floor(Math.random() * kletka.length);
        let zombieOrPeople = Math.floor(Math.random()*2)
        if(zombieOrPeople === 0){
            kletka[index].classList.remove('zdanie');
            kletka[index].classList.add('zombie');
        }
        else{
            kletka[index].classList.remove('zdanie');
            kletka[index].classList.add('people');
        }
        
        kletka.forEach((el) => {
            el.addEventListener('click', () => {
            if (el.classList.contains('zombie')) {
                plusScore();
            }
            if (el.classList.contains('people')){
                minusScore();
            }
            });
        });
    
        setTimeout(() => {
            kletka[index].classList.remove('zombie');
            kletka[index].classList.remove('people')
            kletka[index].classList.add('zdanie');
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
    const interval = setInterval(RandomZombie, 1000);
}
