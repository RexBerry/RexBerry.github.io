function move() {
  let el = document.getElementById('moving');
  el.style.position = "absolute";
  el.style.left = `${Math.round(600 * Math.random())}px`;
  el.style.top = `${Math.round(600 * Math.random())}px`;
}

setInterval(move, 10);
