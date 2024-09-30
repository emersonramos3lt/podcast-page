// CURSOR

const cursor = document.getElementById("cursor");

let mouseX = 0;
let mouseY = 0;
let ballX = 0;
let ballY = 0;
let speed = 0.1;

function animate() {
    let distX = mouseX - ballX;
    let distY = mouseY - ballY;

    ballX = ballX + (distX * speed);
    ballY = ballY + (distY * speed);

    cursor.style.left = ballX + 'px';
    cursor.style.top = ballY + 'px';

    requestAnimationFrame(animate);
}

animate();

document.addEventListener("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

document.addEventListener("click", function(e) {
    e.preventDefault;

    cursor.classList.remove("active");
    void cursor.offsetWidth;
    cursor.classList.add("active");
}, false);