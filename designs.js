// determine initial variables
const canvas = document.querySelector("#pixelCanvas");
const gridSize = document.querySelector("#sizePicker");

// call the makeGrid function upon clicking the Submit button
gridSize.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});

function makeGrid() {

  // start with a blank canvas each time user presses Submit
  canvas.innerHTML = "";

  const cellsHigh = document.querySelector("#inputHeight");
  const cellsWide = document.querySelector("#inputWidth");
  const cellsColor = document.querySelector("#colorPicker");

// uses a for loop to create grid
  for (var x = 0; x < cellsHigh.value; ++x) {
    const rows = canvas.insertRow(x);
    for (var y = 0; y < cellsWide.value; ++y) {
      const cells = rows.insertCell(y);
      
      // colors the cell according to the user's input
      cells.addEventListener("click", function() {
        cells.style.backgroundColor = cellsColor.value;
      });
    }
  }
}
