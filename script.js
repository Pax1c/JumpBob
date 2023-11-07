const bob = document.getElementById("bob");
const seaweed = document.getElementById("seaweed");

document.addEventListener("keydown", function (event) {
    jump();
});

function jump() {
    if (bob.classList != "jump") {
        bob.classList.add("jump");
    }
    setTimeout(() => {
        bob.classList.remove("jump");
    }, 300)
}

let isAlive = setInterval(() => {
    let bobTop = parseInt(window.getComputedStyle(bob).getPropertyValue("top"));
    let seaweedLeft = parseInt(window.getComputedStyle(seaweed).getPropertyValue("left"));

    if (seaweedLeft < 55 && seaweedLeft > 0 && bobTop >= 140) {
        alert("ЛОХ!!!");
    }
})