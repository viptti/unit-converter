/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let buttonEl = document.getElementById("convert")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
let inputEl = document.getElementById("insert")


buttonEl.addEventListener("click", function() {
    let meter = inputEl.value * 3.281
    let feet =  inputEl.value * 0.3048
    let result1 = `${inputEl.value} meters = ${meter.toFixed(3)} feet | ${inputEl.value} feet = ${feet.toFixed(3)} meters`
    lengthEl.textContent = result1

    let liter = inputEl.value * 0.264
    let gallon =  inputEl.value * 3.78541
    let result2 = `${inputEl.value} liters = ${liter.toFixed(3)} gallons | ${inputEl.value} gallon = ${gallon.toFixed(3)} liters`
    volumeEl.textContent = result2

    let kilogram = inputEl.value * 2.204
    let pound =  inputEl.value * 0.453592
    let result3 = `${inputEl.value} kilograms = ${kilogram.toFixed(3)} pounds | ${inputEl.value} pounds = ${pound.toFixed(3)} liters`
    massEl.textContent = result3
})

