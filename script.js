const grid = document.querySelector('#grid');
let rows = document.querySelectorAll('.row');
let boxes = document.querySelectorAll('.box');
makeGrid(16);
const gridButton = document.querySelector('#gridButton');
gridButton.addEventListener('click', () =>{
  let newSize = prompt('How big would you like the new grid to be?');
  makeGrid(newSize);
});



function onHover(e){
  let box = e.target;
  box.classList.add('hovered');
}

function endHover(e){
  let box = e.target;
  box.classList.remove('hovered');
}

function makeGrid(sideLength){
  let rows = document.querySelectorAll('.row');
  let boxes = document.querySelectorAll('.box');
  rows.forEach(box => box.remove());
  boxes.forEach((box) => box.remove());
  for(let i = 0; i < sideLength; i++){
    const row = document.createElement('div');
    row.classList.add(`${i}`);
    row.classList.add(`row`);
      for(let j = 0; j < sideLength; j++){
        const box = document.createElement('div');
        box.classList.add(`${i}`);
        box.classList.add(`${j}`);
        box.classList.add(`box`);
        box.addEventListener('mouseover', onHover);
        row.appendChild(box);
      }
    grid.appendChild(row);
  }
}

