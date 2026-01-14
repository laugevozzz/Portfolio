const logo = document.getElementById("floating-logo");

let x = Math.random() * (window.innerWidth - logo.offsetWidth);
let y = Math.random() * (window.innerHeight - logo.offsetHeight);

let vx = 0.6 + Math.random() * 0.6;
let vy = 0.6 + Math.random() * 0.6;

function animate() {
  x += vx;
  y += vy;

  if (x <= 0 || x + logo.offsetWidth >= window.innerWidth) {
    vx *= -1;
  }

  if (y <= 0 || y + logo.offsetHeight >= window.innerHeight) {
    vy *= -1;
  }

  logo.style.transform = `translate(${x}px, ${y}px)`;

  requestAnimationFrame(animate);
}

animate();
