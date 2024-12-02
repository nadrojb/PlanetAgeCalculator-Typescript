"use strict";
var ageInput = document.querySelector("#age");
var calculateButton = document.querySelector("#calc");
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
    var result = calculateAge(getRadioButtonValue, ageInput);
    console.log(result);
});
