#! /usr/bin/env node
import inquirer from "inquirer";
const randomNum = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10 : ",
    },
]);
if (answers.userGuessedNumber === randomNum) {
    console.log("Congratulation! You Guessed Right Number");
}
else {
    console.log("You Gussed Wrong Number");
}
