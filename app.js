const range = document.getElementById('rangeValue')
const slider = document.querySelector('.slider')
Color = "#7291ff"
slider.addEventListener("input", function () {
    slider.style.background = `linear-gradient(to right, ${Color} ${this.value}%, #e0e0e0 ${this.value}%)`
    range.textContent = this.value
    if (this.value > 30 && this.value < 50 ) {Color = "#2d4fc9"}
    if (this.value > 50 && this.value < 70 ) {Color = "#133097"}
    if (this.value > 70)  {Color = "#00155e"}
})