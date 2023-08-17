"use strict";

const subBtn = document.querySelector(".sub-btn");
const resultSec = document.querySelector(".result");
const bmiResult = document.querySelector(".bmi-result");
const textResult = document.querySelector(".text-result");
const sectionCenter = document.querySelector(".section-center");
const okBtn = document.querySelector(".ok-btn");
function calcBMI() {
  const weightValue = Number(document.querySelector(".weight-value").value);
  const heightValue = Number(document.querySelector(".height-value").value);
  console.log(weightValue, heightValue);

  // bmi calc
  const bmi = parseFloat(weightValue / (heightValue * heightValue));
  console.log(bmi);
  resultSec.classList.remove("hide-text");
  sectionCenter.classList.add("hide-text");

  bmiResult.innerHTML = bmi;

  if (bmi < 18.5) {
    textResult.textContent = "Underweight";
  } else if (bmi < 24.9) {
    textResult.textContent = "Normal Weight";
  } else if (bmi < 29.9) {
    textResult.textContent = "Overweight";
  } else if (bmi > 30) {
    textResult.textContent = "Obbese";
  } else if (bmi !== NaN || bmi < 0 || bmi === "") {
    textResult.textContent = "Please Enter Valid Values For Weight and Height";
    bmiResult.innerHTML = "";
  }
}

subBtn.addEventListener("click", function () {
  calcBMI();
  document.querySelector("body").style.backgroundColor = "#D8D9DA";
});

// document.addEventListener("DOMContentLoaded", function () {
//   okBtn.addEventListener("click", function () {
//     window.location.reload();
//   });
// });
okBtn.addEventListener("click", function () {
  window.location.reload();
});
