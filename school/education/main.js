document.write('School');

function move() {
  for (let i = 0; i < 10; i++) {
    let el = document.getElementById(`moving${i}`);
    el.innerText = `This is true education ${Math.round(1000000 * Math.random())}`;
    el.style.position = 'absolute';
    el.style.left = `${Math.round(600 * Math.random())}px`;
    el.style.top = `${Math.round(600 * Math.random())}px`;
  }
}

move();

setInterval(move, 10);
