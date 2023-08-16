// Yıldız sayısı
const starCount = 400;

// Rastgele yıldız konumları
for (let i = 0; i < starCount; i++) {
    createStar();
}

function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    const galaxy = document.querySelector(".galaxy");
    galaxy.appendChild(star);

    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;

    star.style.left = `${randomX}%`;
    star.style.top = `${randomY}%`;
}
