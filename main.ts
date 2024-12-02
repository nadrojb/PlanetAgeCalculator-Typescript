"use strict";

let ageInput = document.querySelector("#age") as HTMLInputElement;
let calculateButton = document.querySelector("#calc") as HTMLButtonElement;
let outputSection = document.querySelector("#output") as HTMLElement;

function getRadioButtonValue(): number {
  let radioValue = document.querySelectorAll(
    ".nes-radio"
  ) as NodeListOf<HTMLInputElement>;

  for (let i = 0; i < radioValue.length; i++) {
    if (radioValue[i].checked) return Number(radioValue[i].value);
  }
}

function calculateAge(getRadioButtonValue, ageInput: HTMLInputElement): number {
  let userAge = Number(ageInput.value);
  let value = getRadioButtonValue();
  let result = userAge / value;
  return result;
}

calculateButton.addEventListener("click", (e: MouseEvent) => {
  outputSection.style.display = "block";
  let yearsText = document.querySelector("#years") as HTMLSpanElement;
  let result = Math.round(calculateAge(getRadioButtonValue, ageInput));
   yearsText.textContent = result.toString();
});
