#! /usr/bin/env node
import inquirer from "inquirer"
const currentbalance = 10000;
console.log("your current balance is "  +  currentbalance);
let myBalance = 10000; 
let mypin = 9988;
let pinanswer = await inquirer.prompt([
{  name: "pin",
   message: "enter your pin",
   type: "number",
 },

 ]);
 if (pinanswer.pin === mypin){
    console.log("correct pin code!");

    let operationanswer = await inquirer.prompt([
{   name:"operation",
    message:"please select option",
    type:"list",
    choices:["withdraw","check balance"]}
    ]);
    if (operationanswer.operation === "withdraw") {
      let amountanswer = await inquirer.prompt([
         {
            name: "amount",
            message: "enter your amount",
            type:"number"
         }
      ]
      );
      myBalance -= amountanswer.amount;
      console.log("your remaining balance is " + myBalance)
    } else if (operationanswer.operation === "check balance"){
    console.log("your current balance is "  +  myBalance)
 }}
 else {
    console.log("incorrect pin");
 };
 
