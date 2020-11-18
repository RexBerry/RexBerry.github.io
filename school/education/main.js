document.write('debug');

function move() {
  let el = document.getElementById('moving');
  el.innerText = `This is true education ${Math.round(1000000 * Math.random())}`;
  el.style.position = 'absolute';
  el.style.left = `${Math.round(600 * Math.random())}px`;
  el.style.top = `${Math.round(600 * Math.random())}px`;
}

move();

setInterval(move, 10);
