const container = document.querySelector('.container');
const resetGridBtn = document.querySelector('#resetGrid');


function resetGrid() {
    let gridSize = 0;

    let child = container.lastElementChild;
    while(child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }

    
    gridSize = prompt("Enter a grid size");

    if (gridSize <= 100) {
    
        container.style.gridTemplateColumns = `repeat(${gridSize},10px)`
        container.style.gridTemplateRows = `repeat(${gridSize},10px)`

        for (let i = 0; i < gridSize; i++) {
            let div = document.createElement('div');
            div.classList.add('square');
            container.appendChild(div);
            for (let i = 0; i < gridSize; i++) {
                let div = document.createElement('div');
                div.classList.add('square');
                container.appendChild(div);
            }
        }
    } else {
        alert("Maximum grid size of 100")
    }
   
    const squares = document.querySelectorAll("div.square");

    squares.forEach(function(square) {
        square.addEventListener('mouseover', changeColor);
    })
}

function random(min,max) {
    return Math.floor((Math.random()*(max - min)) + min);
}

function changeColor(e) {
    if (e.target.style.backgroundColor ==='') {
        e.target.style.backgroundColor = `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`;
        e.target.style.opacity = "0.1";
    } else if (e.target.style.opacity >= 1) {
        return;
    } else {
        let newOpacity = +(e.target.style.opacity) + 0.1;
        e.target.style.opacity = `${newOpacity}`;
    } 
}

resetGridBtn.addEventListener('click', resetGrid)

