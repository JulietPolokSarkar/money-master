//get amounts
function getAmount(inputValue) {
    const expenseAmount = document.getElementById(inputValue);
    const expenseAmountText = expenseAmount.value;
    const expense = parseFloat(expenseAmountText);
    return expense;
}

//calculate total expense
function calcTotalExpense() {
    const income = getAmount('income-input');
    const foodExpense = getAmount('food-input');
    const rentExpense = getAmount('rent-input');
    const clothsExpense = getAmount('cloths-input');
    if (isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothsExpense) || isNaN(income)) {
        const errorMassage = document.getElementById('string-fail');
        errorMassage.style.display = "block";
        return '';
    }
    else if (foodExpense < 0 || rentExpense < 0 || clothsExpense < 0 || income < 0) {
        const errorMassage = document.getElementById('negative-fail');
        errorMassage.style.display = "block";
        return '';
    }
    else {
        const totalExpense = foodExpense + rentExpense + clothsExpense;
        return totalExpense;
    }

}

//calculate total balance
function calcTotalBalance() {
    const income = getAmount('income-input');
    const totalExpense = calcTotalExpense();
    if (income < totalExpense) {
        const errorMassage = document.getElementById('expense-fail');
        errorMassage.style.display = "block";
        return '';
    }
    else {
        const totalBalance = income - totalExpense
        return totalBalance;
    }
}


//handle calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
    // get income
    // const incomeAmount = document.getElementById('income-input');
    // const incomeAmountText = incomeAmount.value;
    // const income = parseFloat(incomeAmountText);
    const income = getAmount('income-input');

    //clear the deposite input field
    // incomeAmount.value = '';

    // get food
    // const foodAmount = document.getElementById('food-input');
    // const foodAmountText = foodAmount.value;
    // const foodExpense = parseFloat(foodAmountText);
    const foodExpense = getAmount('food-input');

    //clear the deposite input field
    // foodAmount.value = '';

    // get rent
    // const rentAmount = document.getElementById('rent-input');
    // const rentAmountText = rentAmount.value;
    // const rentExpense = parseFloat(rentAmountText);
    const rentExpense = getAmount('rent-input');

    //clear the deposite input field
    // rentAmount.value = '';

    // get cloths
    // const clothsAmount = document.getElementById('cloths-input');
    // const clothsAmountText = clothsAmount.value;
    // const clothsExpense = parseFloat(clothsAmountText);
    const clothsExpense = getAmount('cloths-input');

    //clear the deposite input field
    // clothsAmount.value = '';

    //calculate total expense
    const totalExpense = calcTotalExpense();
    const expenseTotal = document.getElementById('total-expense');
    expenseTotal.innerText = totalExpense;

    //calculate balance
    const totalBalance = calcTotalBalance();
    const balanceTotal = document.getElementById('total-balance');
    balanceTotal.innerText = totalBalance;

});

//handle save button
document.getElementById('save-button').addEventListener('click', function () {
    // get income
    // const incomeAmount = document.getElementById('income-input');
    // const incomeAmountText = incomeAmount.value;
    // const income = parseFloat(incomeAmountText);
    const income = getAmount('income-input');

    //clear the deposite input field
    // incomeAmount.value = '';

    // get percentage
    // const percentage = document.getElementById('percent-input');
    // const percentageText = percentage.value;
    // const percentageValue = parseFloat(percentageText);
    const percentageValue = getAmount('percent-input');

    //clear the deposite input field
    // percentage.value = '';

    //calculate saving amount
    const totalSaving = (income * percentageValue) / 100;
    const savingAmount = document.getElementById('total-saving');
    savingAmount.innerText = totalSaving;

    //calculate remaining amount

    //calculate total expense
    const totalExpense = calcTotalExpense();

    //calculate balance
    const totalBalance = calcTotalBalance();
    const remainingBalance = totalBalance - totalSaving;
    if (remainingBalance < 0) {
        const errorMassage = document.getElementById('saving-fail');
        errorMassage.style.display = "block";
        const remainingAmount = document.getElementById('remaining-balance');
        remainingAmount.innerText = "";
    }
    else {
        const remainingAmount = document.getElementById('remaining-balance');
        remainingAmount.innerText = remainingBalance;
    }

})