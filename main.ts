"use strict";

let ageInput = document.querySelector("#age") as HTMLInputElement;
let calculateButton = document.querySelector("#calc") as HTMLButtonElement;

function getRadioButtonValue(): number {
  let radioValue = document.querySelectorAll(
    ".nes-radio"
  ) as NodeListOf<HTMLInputElement>;

  for (let i = 0; i < radioValue.length; i++) {
    if (radioValue[i].checked) 
      return Number(radioValue[i].value);
  }
}

function calculateAge(getRadioButtonValue, ageInput: HTMLInputElement): number {
  let userAge = Number(ageInput.value);
  let value = getRadioButtonValue();
  let result = userAge / value;
  return result;
}

calculateButton.addEventListener("click", (e: MouseEvent) => {
  let result = calculateAge(getRadioButtonValue, ageInput);
  console.log(result);
});
