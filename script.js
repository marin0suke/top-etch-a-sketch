
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
        console.log(div);
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = getRandomColor(); // colour changes on mouseover
        })

        container.appendChild(div);
    }
}

createGrid(100);