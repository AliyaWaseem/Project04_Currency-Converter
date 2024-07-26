#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Title Description
console.log(chalk.green.bold.italic(`\n \t CURRENCY CONVERSION APPLICATION`));
console.log("*".repeat(50));
let currencyConversion = {
    "SAR": {
        "PKR": 74.14,
        "KD": 0.082,
        "BD": 0.10,
        "QAR": 0.97,
        "AED": 0.27,
    },
    "PKR": {
        "SAR": 0.13,
        "KD": 0.013,
        "BD": 0.015,
        "QAR": 0.15,
        "AED": 0.03,
    },
    "KD": {
        "SAR": 12.25,
        "PKR": 908.34,
        "BD": 1.23,
        "QAR": 11.89,
        "AED": 11.97,
    },
    "BD": {
        "SAR": 9.97,
        "PKR": 739.38,
        "KD": 0.82,
        "QAR": 9.68,
        "AED": 9.77,
    },
    "QAR": {
        "SAR": 1.03,
        "PKR": 76.37,
        "KD": 0.084,
        "BD": 0.10,
        "AED": 1.01,
    },
    "AED": {
        "SAR": 1.02,
        "PKR": 75.72,
        "KD": 0.084,
        "BD": 0.10,
        "QAR": 0.99
    },
};
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "Select your Currency:",
        choices: ["SAR", "PKR", "KD", "BD", "QAR", "AED"]
    },
    {
        type: "list",
        name: "to",
        message: "Select your Conversion rate:",
        choices: ["SAR", "PKR", "KD", "BD", "QAR", "AED"]
    },
    {
        type: "number",
        name: "amount",
        message: "Enter the amount you want to convert:"
    }
]);
//Destructuring:
const { from, to, amount } = answers;
if (from && to && amount) {
    let result = currencyConversion[from][to] * amount;
    console.log(chalk.bold.yellowBright(`Your conversion from ${from} to ${to} is ${result}`));
}
else {
    console.log(chalk.bold.redBright("Please select valid Currency"));
}
