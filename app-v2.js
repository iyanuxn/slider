const range = document.getElementById('rangeValue')
const slider = document.querySelector('.slider')
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
document.addEventListener("DOMContentLoaded", function hexrandom() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    slider.addEventListener("input", function () {
        slider.style.background = `linear-gradient(to right, ${hexColor} ${this.value}%, #e0e0e0 ${this.value}%)`
        range.textContent = this.value
        if (this.value == 30 ) {hexrandom()}
        if (this.value == 50 ) {hexrandom()}
    })
    console.log(hexColor)
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
