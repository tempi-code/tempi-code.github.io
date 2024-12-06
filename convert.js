document.getElementById("convertButton").addEventListener("click", () => {
    let inputText = document.getElementById("originalNumber");
    let selectFunction = document.getElementById("selection");
  
    let number = parseFloat(inputText.value);
    let convert;
  
    if (selectFunction.value === "1") {
      convert = (number * 9/5) + 32;
      document.getElementById("result").textContent = convert.toFixed(2) + " Fahrenheit";
    } else if (selectFunction.value === "2") {
      convert = (number - 32) * 5/9;
      document.getElementById("result").textContent = convert.toFixed(2) + " Celsius";
    } else if (selectFunction.value === "3") {
      convert = number * 0.3;
      document.getElementById("result").textContent = convert.toFixed(2) + " Meters";
    } else if (selectFunction.value === "4") {
      convert = number / 0.3048;
      document.getElementById("result").textContent = convert.toFixed(2) + " Feet";
    }
  });

function toggleMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
