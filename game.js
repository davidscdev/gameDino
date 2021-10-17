const dino = document.querySelector(".dino");
const background = document.querySelector(".bg");
let position = 0;
let taPulando = false;

function verificaEspaco(event) {
    if (event.keyCode === 32) {
        if (!taPulando) {
            pulo();
        }
    }


}

function pulo() {
    console.log('Entrou na função do pulo.');

    taPulando = true;
    let intervaloSubida = setInterval(() => {
        if (position >= 150) {
            //Zera o intervalo pra subida quando o Dino atingir 150px.
            clearInterval(intervaloSubida);
            //Descendo
            let intervaloDescida = setInterval(() => {
                if (position <= 0) {
                    clearInterval(intervaloDescida);
                    taPulando = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            console.log(`subindo ${position}`);
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function criaCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let tempoCriaCactus = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let andaCactus = setInterval(() => {

        if (cactusPosition <= 60) {
            clearInterval(andaCactus);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition <= 60 && position < 60) {
            clearInterval(andaCactus);
            document.body.innerHTML = '<h1>FIM DE JOGO</h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(criaCactus, tempoCriaCactus);
}


criaCactus();
document.addEventListener('keyup', verificaEspaco);