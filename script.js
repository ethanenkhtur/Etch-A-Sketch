const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  let gridItem = document.createElement("div");
  gridItem.setAttribute("id", i + 1);
  gridItem.style.display = "inline-block";

  gridItem.style.height = "10px";
  gridItem.style.color = "red";

  container.appendChild(gridItem);
}
