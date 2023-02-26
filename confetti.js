var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

var confetti = [];

for (var i = 0; i < 100; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 10 + 5,
    vx: Math.random() * 10 - 5,
    vy: Math.random() * 10 - 5,
    color: "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < confetti.length; i++) {
    var c = confetti[i];
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.x += c.vx;
    c.y += c.vy;
    if (c.x < -c.r || c.x > canvas.width + c.r || c.y < -c.r || c.y > canvas.height + c.r) {
      confetti.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(drawConfetti);
}

drawConfetti();
