document.write('School');

tick = 0;
newPositions = [];
for (let i = 0; i < 10; i++) {newPositions.push([0, 0]);}

function move() {
  
  if (tick % 60 === 0) {
    oldPositions = newPositions;
    newPositions = [];
    for (let i = 0; i < 10; i++) {
      newPositions.push([Math.round(600 * Math.random()), Math.round(600 * Math.random())]);
    }
  }
  
  let t = (tick % 60) / 60;
  
  for (let i = 0; i < 10; i++) {
    let el = document.getElementById(`moving${i}`);
    el.innerText = `This is true education ${Math.round(1000000 * Math.random())}`;
    el.style.position = 'absolute';
    el.style.left = `${(1 - t) * oldPositions[i][0] + t * newPositions[i][0]}px`;
    el.style.top = `${(1 - t) * oldPositions[i][1] + t * newPositions[i][1]}px`;
  }
  
  tick++;
}

move();

setInterval(move, 1000/60);
