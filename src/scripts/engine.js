const emojis = [
    "😘",
    "😘",
    "👌",
    "👌",
    "😒",
    "😒",
    "😍",
    "😍",
    "❤️",
    "❤️",
    "🤣",
    "🤣",
    "😂",
    "😂",
    "😊",
    "😊"
];
let openCards = [];

let shuffleEmojis = emojis.sort(() =>(Math.random() > 0.5 ? 2: -1));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.onclick = handleClick;
    box.innerHTML = shuffleEmojis[i];
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMath, 500)
    }

    console.log(openCards)
}

function animateConfetti() {
    let params = {
        particleCount: 500,
        spread: 90,
        startVelocity: 70,
        origin: {x: 0, y: 0.5},
        angle: 45
    }

    confetti(params);

    params.origin.x = 1;
    params.angle = 135;
    confetti(params)
}

function checkMath() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }
    else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen")
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        animateConfetti();
    }
}

