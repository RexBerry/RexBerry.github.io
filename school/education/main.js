function move() {
  let el = document.getElementById('moving');
  el.style = `offset: ${Math.round(600 * Math.random())} ${Math.round(600 * Math.random())};`;
}

setInterval(move, 10);
