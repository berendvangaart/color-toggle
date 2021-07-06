const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("color-list");

hamburger.addEventListener("click", () => {
    menu.classList.toggle('hidden');
})

menu.addEventListener('click', e => {
    document.body.style.background = e.target.classList[1];
    document.getElementById('color-name').innerText = e.target.id;
    menu.classList.toggle('hidden');
})