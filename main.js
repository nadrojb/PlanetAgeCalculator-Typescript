"use strict";
var ageInput = document.querySelector("#age");
var calculateButton = document.querySelector("#calc");
var outputSection = document.querySelector("#output");
function getRadioButtonValue() {
    var radioValue = document.querySelectorAll(".nes-radio");
    for (var i = 0; i < radioValue.length; i++) {
        if (radioValue[i].checked)
            return Number(radioValue[i].value);
    }
}
function calculateAge(getRadioButtonValue, ageInput) {
    var userAge = Number(ageInput.value);
    var value = getRadioButtonValue();
    var result = userAge / value;
    return result;
}
calculateButton.addEventListener("click", function (e) {
    outputSection.style.display = "block";
    var yearsText = document.querySelector("#years");
    var result = Math.round(calculateAge(getRadioButtonValue, ageInput));
    yearsText.textContent = result.toString();
});
