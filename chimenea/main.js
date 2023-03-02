let chimenea = false;

const marco = document.querySelector("main.marco");
const llamas = document.querySelectorAll("div.llama");

const audios = document.querySelectorAll("audio");
audios[0].src = "./public/456058_28867-lq.mp3"
audios[1].src = "./public/521125_9250976-lq.mp3"
audios[2].src = "./public/654544_13798824-lq.mp3"
marco.addEventListener('click', function () {

    if (!chimenea) {
        audios[1].play()
        setTimeout(() => {
            audios[0].play()
            llamas.forEach((llama) => {
                setTimeout(() => {
                    llama.classList.remove("apagada")
                    llama.classList.add("encendida")
                }, Math.random() * 500);
            });
        }, 2200)
        chimenea = true;
    } else {
        audios[2].play()
        setTimeout(() => {
            audios[0].pause()
            llamas.forEach((llama) => {
                setTimeout(() => {
                    llama.classList.remove("encendida")
                    llama.classList.add("apagada")
                }, Math.random() * 500);
            });
        }, 2000)
        chimenea = false;
    }
})