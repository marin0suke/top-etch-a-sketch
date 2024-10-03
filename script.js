
function createGrid(size) {
    const container = document.querySelector(".container"); // grab the element we want to mutate.
    container.innerHTML = "";
    const allDivs = size * size;

    for (let i = 0; i < allDivs; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        console.log(div);
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = "#333"; // colour changes on mouseover
        })

        container.appendChild(div);
    }
}

createGrid(100);