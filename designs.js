
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let submitGrid = document.getElementById('submitButton');

function makeGrid() {

// Your code goes here!
    let canvasHeight = document.getElementById('inputHeight').nodeValue;
    console.log(canvasHeight)
    let canvasWidth = document.getElementById('inputWidth').nodeValue;
    console.log(canvasWidth)
    var gridTable = document.getElementById('pixelCanvas');

    for (let i = 0; i < canvasHeight; i++){

        let newRow = document.createElement('tr');
        gridTable.appendChild(newRow);

        for(let j = 0; j < canvasWidth; j++){

            let newCell = document.createElement('td');
            gridTable[i].appendChild(newCell);

        }

    }

}

submitGrid.addEventListener('click', makeGrid);