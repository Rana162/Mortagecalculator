function calculateRepayments() {
    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseFloat(document.getElementById('term').value) * 12; // Convert years to months
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12; // Monthly interest rate
    const type = document.querySelector('input[name="type"]:checked').value;

    let monthlyRepayment, totalRepay;

    if (type === "repayment") {
        // Repayment calculation
        monthlyRepayment = (amount * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
        totalRepay = monthlyRepayment * term;
    } else {
        // Interest-only calculation
        monthlyRepayment = amount * rate;
        totalRepay = monthlyRepayment * term;
    }

    document.getElementById('monthly-repayments').innerText = `£${monthlyRepayment.toFixed(2)}`;
    document.getElementById('total-repay').innerText = `£${totalRepay.toFixed(2)}`;
}
