function getRandomColor() {
  let r = Math.floor(Math.random() * 256); // 255 values
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`; //
}

function createGrid(size) {
  const container = document.querySelector(".container"); // grab the element we want to mutate.
  container.innerHTML = "";
  const allDivs = size * size;

  for (let i = 0; i < allDivs; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");
    div.dataset.hoverCount = 0;

    div.addEventListener("mouseover", function () {
      let hoverCount = parseInt(div.dataset.hoverCount) || 0;

      hoverCount++; // increment immediately after first mouseover.
      div.dataset.hoverCount = hoverCount; //update the var after increment.

      if (hoverCount === 1) {
        div.style.backgroundColor = getRandomColor(); // colour changes on mouseover
      } else if (hoverCount < 10) {
        let brightness = 100 - hoverCount * 10; // 100 is brightest. hovercount increases, deduction from brightness increases until pixel is black.
        div.style.filter = `brightness(${brightness}%)`; // HSL scale can adjust for brightness with %. Hue/saturation/lightness.
      }
    });

    container.appendChild(div);
  }
}

createGrid(100);
