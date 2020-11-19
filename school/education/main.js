document.write('School');

ACCELERATION = 0.25;
NUM = 100;

els = [];
pos = [];

tick = 0;
newPositions = [];
oldPositions = [];

for (let i = 0; i < NUM; i++) {
  let el = document.createElement('span');
  el.visibility = 'visible';
  document.body.appendChild(el);
  els.push(el);
  pos.push([newX(), newY()]);
  newPositions.push([0, 0]);
}

function move() {
  
  if (tick % 60 === 0) {
    oldPositions = newPositions;
    newPositions = [];
    for (let i = 0; i < NUM; i++) {
      newPositions.push([newX(), newY()]);
    }
  }
  
  let t = (tick % 60) / 60;
  
  for (let i = 0; i < NUM; i++) {
    let el = els[i];
    el.innerText = `This is true education ${Math.round(1000000 * Math.random())}`;
    el.style.position = 'absolute';
    let x = (1 - t) * oldPositions[i][0] + t * newPositions[i][0];
    let y = (1 - t) * oldPositions[i][1] + t * newPositions[i][1];
    pos[i][0] = (1 - ACCELERATION) * pos[i][0] + ACCELERATION * x;
    pos[i][1] = (1 - ACCELERATION) * pos[i][1] + ACCELERATION * y;
    el.style.left = `${pos[i][0]}px`;
    el.style.top = `${pos[i][1]}px`;
  }
  
  tick++;
}
  
function newX() {
  return Math.round(window.innerWidth * Math.random());
}
function newY() {
  return Math.round(window.innerHeight * Math.random());
}

move();

setInterval(move, 1000/60);
