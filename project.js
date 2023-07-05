// function deposit()
// {
//     return 1;                   // general way of defining a function;
// }
// new way-> of defining a function;
const prompt= require("prompt-sync")(); //required for taking input;
const deposit = () => {
    while(true)
    {
    const depositAmount=prompt("Enter the amount :"); // we need to convert this to number; // returns a string always;
    const numberDepositAmount = parseFloat(depositAmount); //this function is returning the number
    if(isNaN(numberDepositAmount) || numberDepositAmount<=0)
    {
        console.log("Invalid amount entered!!");
    }else
    {
        return numberDepositAmount;
    }
  } 
}
const getNumberLines = () => {
    while(true)
    {
        const lines=prompt("Enter hte number of lines :");
        const numberOfLines= parseFloat(lines);
        if(isNaN(numberOfLines)|| numberOfLines>3 || numberOfLines<=0)
        console.log("Invalid Input of lines !");
        else
        return numberOfLines;
    }
}

const getBet = (balance,lines) =>{
    while(true)
    {
        const numberBet=prompt("Enter the amount of bet u want to put :");
        const betAmount= parseFloat(numberBet);
        if(isNaN(betAmount)|| betAmount>balance/lines || betAmount<=0)
        console.log("Wrong Input of bet!");
        else
        return betAmount;
    }
}

let depositAmount=deposit();
let numlines=getNumberLines();
let betAmount=getBet(depositAmount,numlines);
console.log(betAmount);

  




