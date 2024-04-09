const container = document.querySelector(".container");
const gridSizeButton = document.querySelector(".gridSizeButton");
let gridSize = 16;

function createGrid(size) {
  container.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.style.width = "calc(100% / " + (size + 1) + ")";
    cell.style.height = "calc(100% / " + (size + 1) + ")";
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
    alert("Enter a size number between 1 and 100");
  }
});
