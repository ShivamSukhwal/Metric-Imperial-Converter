let number = document.getElementById("number-el").textContent
let lengthElement = document.getElementById("length-el")
let volumeElement = document.getElementById("volume-el")
let massElement = document.getElementById("mass-el")



let convert = () => {
   let meters2Feet = (number * 3.28).toFixed(3) 
  
   let feet2Meters = (number / 3.28).toFixed(3);
   lengthElement.innerText = number + " meters = " + meters2Feet + " --- " + number + " feet = " + feet2Meters


    let liter2Gallon = (number / 3.785).toFixed(3);
    let gallon2Liter = (number * 3.78).toFixed(3)
    volumeElement.innerText = number + " liters = " + liter2Gallon + " --- " + number + " Gallon = " + gallon2Liter
 

    let kilo2pound = (number * 2.2).toFixed(3)
    let pound2kilo = (number / 2.2).toFixed(3)
    massElement.innerText = number + " kilograms = " + kilo2pound + " --- " + number + " pound = " + pound2kilo
 }