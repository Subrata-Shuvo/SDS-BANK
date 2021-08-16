// function doubleIt(num){
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);    

function getInputValue(inputId) {
    debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';

    return amountValue;

}


function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);


    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amountValue, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    const previousBalanceTotal = getCurrentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amountValue;
    } else {
        balanceTotal.innerText = previousBalanceTotal - amountValue;
    }
    // balanceTotal.innerText = previousBalanceTotal + amountValue;
}


document.getElementById('deposite-button').addEventListener('click', function() {
    // const inputField = document.getElementById('deposite-input');
    // const inputAmountText = inputField.value;
    // const amountValue = parseFloat(inputAmountText);



    // get and update current deposit total
    // const totalElement = document.getElementById('deposite-total');
    // const totalElementText = totalElement.innerText;
    // const previousDepositTotal = parseFloat(totalElementText);
    // totalElement.innerText = previousDepositTotal + amountValue;





    // update balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // balanceTotal.innerText = previousBalanceTotal + amountValue;
    const amountValue = getInputValue('deposite-input');

    if (amountValue > 0) {
        updateTotalField('deposite-total', amountValue);
        updateBalance(amountValue, true);
    }

});

// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function() {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);


    // get and updatee withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;




    // updating balance after withdraw
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousbalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousbalanceTotal - withdrawAmount;

    const withdrawAmount = getInputValue('withdraw-input');

    const currentBalance = getCurrentBalance();

    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount, false)
    }
    if (withdrawAmount > currentBalance) {
        console.log('You cannnot withdraw more than you have in your account ')
    }

})