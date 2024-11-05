const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds')

let score = 0;


function aumentarPontuacao() {
    score++;

    document.getElementById("score").textContent = "Score: " + score;

}

const jump = () => {

    mario.classList.add('jump');

    setTimeout(() =>  {

        mario.classList.remove('jump');

    }, 500);
    
}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft



    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './src/images/game-over.png';
        mario.style.width = '75px';
        mario.style.margin = '50px';

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        clearInterval(loop)

        document.querySelector(".restart").style.display = "block";

    }

    aumentarPontuacao();

}, 10);

document.addEventListener('keydown', jump);