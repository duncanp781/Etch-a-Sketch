const grid = document.querySelector('#grid');
let rows = document.querySelectorAll('.row');
let boxes = document.querySelectorAll('.box');

let style = 'black';
const styleText = document.querySelector('#currStyle');
styleText.textContent = `Current Style: ${style}`;

let currentSize = 16;
makeGrid(currentSize);

const gridButton = document.querySelector('#gridButton');
gridButton.addEventListener('click', () =>{
  let newSize = prompt('How big would you like the new grid to be?');
  makeGrid(newSize);
});

const clearButton = document.querySelector('#clearGrid');
clearButton.addEventListener('click', () => makeGrid());

const styleButtons = document.querySelectorAll('#styles button');
styleButtons.forEach(btn =>{
  btn.addEventListener('click', setStyle);
})


function setStyle(e){
  let btn = e.target;
  style = btn.getAttribute('id');
  styleText.textContent = `Current Style: ${style}`;
}

function onHover(e){
  let box = e.target;
  let color;
  switch (style){
    case 'black':
      box.style.opacity = '1';
      color = 'black';
    break;
    case 'rainbow':
      box.style.opacity = '1';
      let rc1 = randNum(255);
      let rc2 = randNum(255);
      let rc3 = randNum(255);
      color = `rgb(${rc1}, ${rc2}, ${rc3})`;
    break;
    case 'shading':
      if(box.style.backgroundColor != 'black'){
        box.style.opacity = '0';
      }
      let currentOpacity = parseFloat(box.style.opacity);
      box.style.opacity = String(Math.min(currentOpacity + 0.1, 1));
      color = 'black';
    break;
    case 'eraser':
      box.style.opacity = '0';
      box.backgroundColor = 'white';
    break;
  }
  box.style.backgroundColor = color;
}

function endHover(e){
  let box = e.target;
  box.classList.remove('hovered');
}

function makeGrid(sideLength = currentSize){
  console.log(sideLength);
  currentSize = sideLength;
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
        box.style.opacity = '0';
        box.classList.add(`box`);
        box.addEventListener('mouseover', onHover);
        row.appendChild(box);
      }
    grid.appendChild(row);
  }
  const gridText = document.querySelector('#gridSize');
  gridText.textContent = `Current Size: ${currentSize} x ${currentSize}`
}

function randNum(max){
  return Math.round(Math.random()*max);
}