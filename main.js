#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Define the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1,
    "BHD": 248,
    "CAD": 1.3,
    "EUR": 4.2,
    "JPY": 1.4,
    "SAR": 84,
    "PKR": 277.70,
};
// prompt the user to select to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "BHD", "CAD", "EUR", "JPY", "SAR", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "BHD", "CAD", "EUR", "JPY", "SAR", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
// Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of currency conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(`converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
