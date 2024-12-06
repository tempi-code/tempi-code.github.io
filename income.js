document.getElementById("calcIncome").addEventListener("click", () => {
    const income = parseFloat(document.getElementById("income").value);
    let incomeTax = 0;
  
    if (income < 250000) {
      incomeTax = 0;
    } else if (income < 400000) {
      incomeTax = 0.20 * (income - 250000);
    } else if (income < 800000) {
      incomeTax = 30000 + 0.25 * (income - 400000);
    } else if (income < 2000000) {
      incomeTax = 130000 + 0.30 * (income - 800000);
    } else if (income < 8000000) {
      incomeTax = 490000 + 0.32 * (income - 2000000);
    } else {
      incomeTax = 2410000 + 0.35 * (income - 8000000);
    }
  
    document.getElementById("result").innerHTML = '₱ ' + incomeTax.toFixed(2);
  });

function toggleMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('active');
}