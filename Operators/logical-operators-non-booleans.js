// JS has logical AND,OR and NOT
console.log(true && true);

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;
let applicationRefused = !eligibleForLoan
console.log('Eligible for loan :', eligibleForLoan);
console.log(applicationRefused)



