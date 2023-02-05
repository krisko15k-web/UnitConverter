let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")
let inputNum = document.getElementById("input")
let btnConv = document.getElementById("conv")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204
const feetToMeter = 0.304
const gallonToLiter = 3.785
const poundToKilo = 0.453

btnConv.addEventListener("click", function () {
    let inputValue = inputNum.value

    length.textContent = `${inputValue} meters = ${(inputValue * meterToFeet).toFixed(3)} feet |
     ${inputValue} feet = ${(inputValue * feetToMeter).toFixed(3)} meters`
    volume.textContent = `${inputValue} liters = ${(inputValue * literToGallon).toFixed(3)} gallons |
     ${inputValue} gallons = ${(inputValue * gallonToLiter).toFixed(3)} liters`
    mass.textContent = `${inputValue} kilos = ${(inputValue * kiloToPound).toFixed(3)} pounds |
     ${inputValue} pounds = ${(inputValue * poundToKilo).toFixed(3)} kilos`
})