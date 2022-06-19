let grid = document.querySelector('.grid');
let h2 = document.querySelector('h2');

let eraser = document.querySelector('#eraser');
let eraserVal = 0;
eraser.addEventListener('click',
    () => {
        if(eraserVal) eraserVal = 0;
        else eraserVal = 1;
        eraser.classList.toggle('eraser');
    }
)

let color = document.querySelector('#color').value;
document.querySelector('#color').addEventListener('change',
    () => color = document.querySelector('#color').value
);

let number = document.querySelector('#number');
let numberSpan = document.querySelector('#numberSpan');
number.addEventListener('change', 
    () => numberSpan.textContent = number.value + " grids."
);

let resetGrid = () => {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    h2.textContent = '';
    eraserVal = 0;
    eraser.classList.remove('eraser');
}

let createSketch = () =>{

    resetGrid();
    grid.style.cssText = (
        `grid-template-columns:repeat(${number.value},1fr)` +
        `;grid-template-rows:repeat(${number.value},1fr);`
    );
    h2.textContent = `${number.value} x ${number.value}`;
    let totalDivs = number.value * number.value;
    let div;
    for (let i = 0; i < totalDivs; i++) {
        div = document.createElement('div');
        div.classList.add('box');
        div.style.backgroundColor = color;
        grid.appendChild(div);

        div.addEventListener('mouseover',
            (event) =>{
                if (eraserVal == 0) {
                    event.target.style.backgroundColor = color;
                } else {
                    event.target.style.backgroundColor = '#f0f0f0';
                }
            }
        );

        div.addEventListener('click',
            (event) =>{
                event.target.style.backgroundColor = color;
            }
        );

        div.addEventListener('dblclick',
            (event) =>{
                event.target.style.backgroundColor = '#f0f0f0';
            }
        );
        div = '';
    }
}

let apply = document.querySelector('#apply');
apply.addEventListener('click', createSketch);

let reset = document.querySelector('#reset');
reset.addEventListener('click', resetGrid);

createSketch();
