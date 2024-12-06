const payrollTableBody = document.querySelector('#payrollTable tbody');

document.getElementById('addEmployeeForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const employeeName = document.getElementById('employeeName').value;
    const daysWorked = parseInt(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const deduction = parseFloat(document.getElementById('deduction').value);

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deduction;

    const newRow = payrollTableBody.insertRow();
    const rowIndex = payrollTableBody.rows.length;

    newRow.innerHTML = `
        <td>${rowIndex}</td>
        <td>${employeeName}</td>
        <td>${daysWorked}</td>
        <td>${dailyRate.toFixed(2)}</td>
        <td>${grossPay.toFixed(2)}</td>
        <td>${deduction.toFixed(2)}</td>
        <td>${netPay.toFixed(2)}</td>
    `;

    document.getElementById('addEmployeeForm').reset();
});

document.getElementById("delEmployee").addEventListener("click", () => {
    const lineNumber = parseInt(document.getElementById('deleteLineNumber').value);

    if (lineNumber < 1 || lineNumber > payrollTableBody.rows.length) {
        alert('Invalid Line Number. Please try again.');
        return;
    }

    payrollTableBody.deleteRow(lineNumber - 1);

    for (let i = 0; i < payrollTableBody.rows.length; i++) {
        payrollTableBody.rows[i].cells[0].innerText = i + 1;
    }

    document.getElementById('deleteLineNumber').value = '';
});

function toggleMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('active');
}