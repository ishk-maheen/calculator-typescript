#!/usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

const answers = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "Enter the first number"
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Enter the second number"
    },
    {
        name: "operators",
        type: "list",
        message: "Enter the operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponentiation"]
    }
]);
if (answers.operators === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operators === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operators === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operators === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else if (answers.operators === "Modulus") {
    console.log(answers.firstNumber % answers.secondNumber);
}
else if (answers.operators === "Exponentiation") {
    console.log(answers.firstNumber ** answers.secondNumber);
}
else {
    console.log(chalk.red.bold("Please select operators"));
}
