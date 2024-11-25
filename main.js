const canvas = document.getElementById("batsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bats = [];
const batEmoji = "😝"; // Bat emoji
const batCount = 30;

class Bat {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = (Math.random() - 0.5) * 5;
        this.speedY = (Math.random() - 0.5) * 5;
        this.size = Math.random() * 30 + 20;
    }

    draw() {
        ctx.font = `${this.size}px Arial`;
        ctx.fillText(batEmoji, this.x, this.y);
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }
}

function initBats() {
    for (let i = 0; i < batCount; i++) {
        bats.push(new Bat());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bats.forEach((bat) => {
        bat.update();
        bat.draw();
    });
    requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

initBats();
animate();
