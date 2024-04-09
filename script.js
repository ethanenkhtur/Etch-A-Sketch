const container = document.querySelector(".container");
const gridSizeButton = document.querySelector(".gridSizeButton");
let gridSize = 16;

function createGrid(size) {
  // resetting grid
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // Cell size
    const cellSize = 100 / size;
    cell.style.width = `calc(${cellSize}% - 1px)`; // Adjust for borders
    cell.style.height = `calc(${cellSize}% - 1px)`;

    // cell color change when hovered
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = "yellow";
    });

    cell.addEventListener("mouseleave", () => {
      cell.style.backgroundColor = "";
    });

    container.appendChild(cell);
  }
}

createGrid(gridSize);

gridSizeButton.addEventListener("click", () => {
  gridSize = parseInt(window.prompt("Enter a grid size: "));

  if (gridSize >= 1 && gridSize <= 100) {
    createGrid(gridSize);
  } else {
    alert("Please, enter a number between 1 and 100");
    gridSize = parseInt(window.prompt("Enter a grid size: "));
    createGrid(gridSize);
  }
});
