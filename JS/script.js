function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    let convertedAmount;

    if (fromCurrency === 'euro' && toCurrency === 'dollar') {
        convertedAmount = amount * 1.10;
    } else if (fromCurrency === 'dollar' && toCurrency === 'euro') {
        convertedAmount = amount * 0.91;
    } else {
        // Same currency, no conversion needed
        convertedAmount = amount;
    }

    document.getElementById('result').innerText = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;
}
