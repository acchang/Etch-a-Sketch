let freshGrid = document.querySelector('#refresh');
let reset = document.querySelector('#reset');
let numberOfSquares = 16;

const grid = document.querySelector(".gridContainer")

function createGrid() {
  for (let i = 0; i < numberOfSquares * numberOfSquares ; i++) {
    const gridpixel = document.createElement("div");
    gridpixel.classList.add("unlitSquare")
    gridpixel.addEventListener('mouseover', function(e){
    if (shadeSwitch == true) {
        this.style["opacity"] = +this.style["opacity"] + .1;
    }
    if (colorSwitch == true) {
        getRandomColor();
        e.target.style.setProperty(
        "background-color",
        getRandomColor());    }
    else {
        e.target.style.setProperty(
        "background-color",
        "black");
    }});
    grid.appendChild(gridpixel);
  }
};

const shadeButton = document.querySelector(".shade");
shadeButton.addEventListener("click", shadeMode);
let shadeSwitch = false;

function shadeMode() {
    if (shadeSwitch == false) {
            shadeSwitch = true;
        }
        else {
        shadeSwitch = false;
        }
    }

const colorButton = document.querySelector(".color");
colorButton.addEventListener("click", skittlesMode);
let colorSwitch = false;

function skittlesMode() {
    if (colorSwitch == false) {
            colorSwitch = true;
        }
        else {
        colorSwitch = false;
        }
    }

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const gridInput = document.getElementById("quantity");
gridInput.addEventListener("change", updateGrid);

function updateGrid(){
numberOfSquares = gridInput.value;
grid.innerHTML = "";
grid.style.gridTemplate = `repeat(${numberOfSquares}, 1fr) / repeat(${numberOfSquares}, 1fr)`;
createGrid();
}

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function() {
    grid.innerHTML = "";
    createGrid();
});

createGrid();
