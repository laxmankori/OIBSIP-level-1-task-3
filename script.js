let degree = document.getElementById("degree");
let convertOption = document.getElementById("convertOption");
let displayResult = document.getElementById("result");

let convert = () => {
  if (convertOption.value == "fahrenheit") {
    let result = (degree.value * 9) / 5 + 32;
    displayResult.innerText = `${result}°F`;
  } else if (convertOption.value == "kelvin") {
    let result = parseInt(degree.value) + 273.15;
    displayResult.innerText = `${result}K`;
  }
};
