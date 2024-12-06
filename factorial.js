document.getElementById("numberInput").addEventListener("keyup", () => {
    const number = parseInt(document.getElementById("numberInput").value);
    let i = 1, result = 1;
  
    if (number === 0) {
      return 0;
    }
  
    while (i <= number) {
      result *= i;
      i++;
    }
  
    document.getElementById("result").innerHTML = result;
  });
  
  document.getElementById("inputnumber").addEventListener("keyup", () => {
    const number = parseFloat(document.getElementById("inputnumber").value);
    let i = 0, result = 0;
  
    // sum
    do {
      result += i;
      i++;
    } while (i <= number);
  
    document.getElementById("sumresult").innerHTML = result;
  
    // average
    for (i; i <= number; i++) {
      result += i;
    }
  
    document.getElementById("average").innerHTML = result / number;
  });

function toggleMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('active');
}