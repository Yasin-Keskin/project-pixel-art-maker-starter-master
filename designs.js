
// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

let submitGrid = document.getElementById('submitButton');
let color = document.getElementById('colorPicker');

submitGrid.addEventListener('click', function (e) {

    e.preventDefault();
    makeGrid();

});

function makeGrid() {
    // Your code goes here!
    let canvasHeight = document.getElementById('inputHeight').value;
    console.log(canvasHeight);
    let canvasWidth = document.getElementById('inputWidth').value;
    console.log(canvasWidth);
    var gridTable = document.getElementById('pixelCanvas');
    gridTable.innerHTML = "";

    for (let i = 0; i < canvasHeight; i++) {

        // let newRow = gridTable.appendChild(document.createElement('tr'));
        // gridTable.appendChild(newRow);

        let newRow = gridTable.insertRow(i);

        for (let j = 0; j < canvasWidth; j++) {

            // let newCell = newRow.appendChild(document.createElement('td'));
            // gridTable[i].appendChild(newCell);

            let newCell = newRow.insertCell(j);
            newCell.addEventListener('click', function(){
                // e.preventDefault();
                newCell.style.backgroundColor = color.value;
            });

        }

    }

}

