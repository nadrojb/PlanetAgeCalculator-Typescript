"use strict";
var ageInput = document.querySelector("#age");
var calculateButton = document.querySelector("#calc");
function getRadioButtonValue() {
    var radioValue = document.querySelectorAll(".nes-radio");
    for (var i = 0; i < radioValue.length; i++) {
        if (radioValue[i].checked)
            console.log(radioValue[i].value);
    }
}
calculateButton.addEventListener("click", function (e) {
    var userAge = ageInput.value;
    getRadioButtonValue();
});
