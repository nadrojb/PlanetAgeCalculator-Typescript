"use strict";

let ageInput = document.querySelector("#age") as HTMLInputElement;
let calculateButton = document.querySelector("#calc") as HTMLButtonElement;

function getRadioButtonValue() {
  let radioValue = document.querySelectorAll(
    ".nes-radio"
  ) as NodeListOf<HTMLInputElement>;

  for (let i = 0; i < radioValue.length; i++) {
    if (radioValue[i].checked) console.log(radioValue[i].value);
  }
}

function calculateAge () {
    
}

calculateButton.addEventListener("click", (e: MouseEvent) => {
    let userAge = ageInput.value;
    getRadioButtonValue();
});

