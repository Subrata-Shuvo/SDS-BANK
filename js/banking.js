// function doubleIt(num){
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);

function getInputValue() {
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);
    // clear input field
    depositeInput.value = '';

    return depositeAmount;


}










document.getElementById('deposite-button').addEventListener('click', function() {
    // const depositeInput = document.getElementById('deposite-input');
    // const depositeAmountText = depositeInput.value;
    // const depositeAmount = parseFloat(depositeAmountText);
    const depositeAmount = getInputValue();


    // get current deposit

    const depositeTotal = document.getElementById('deposite-total');


    const depositeTotalText = depositeTotal.innerText;
    const previousDepositTotal = parseFloat(depositeTotalText);
    depositeTotal.innerText = previousDepositTotal + depositeAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositeAmount;
});

// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;


    // updating balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousbalanceTotal - withdrawAmount;


    // clear withdraw input field
    withdrawInput.value = '';
})