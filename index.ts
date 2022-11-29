#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

console.log(
  chalk.blue(`
  | ________ |
  ||12345678||
  |""""""""""|
  |[M|#|C][-]|
  |[7|8|9][+]|
  |[4|5|6][x]|
  |[1|2|3][%]|
  |[.|O|:][=]|
  "----------" 
`)
);

function sleep() {
  return new Promise((res) => {
    setTimeout(res, 1000);
  });
}

async function welcome() {
  const rainbow = chalkAnimation.rainbow("Lets do some calculation");
  await sleep();
  rainbow.stop();
}
await welcome();

async function getData() {
  let questions = [
    {
      name: "operation",
      message: "Enter the operation",
      type: "list",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
    {
      name: "num1",
      message: "Enter First number",
      type: "number",
      validate: (answer: number) => {
        if (isNaN(answer)) {
          return "Please Enter a valid number";
        }
        return true;
      },
    },
    {
      name: "num2",
      message: "Enter Second number",
      type: "number",
      validate: (answer: number) => {
        if (isNaN(answer)) {
          return "Please Enter a valid number";
        }
        return true;
      },
    },
  ];
  let answers = await inquirer.prompt(questions);
  // console.log(answer);
  let operator = answers.operation;
  let firstValue = answers.num1;
  let secondValue = answers.num2;

  switch (true) {
    case operator === "Addition":
      console.log(
        `${firstValue} + ${secondValue} = ${firstValue + secondValue}`
      );
      break;

    case operator === "Subtraction":
      console.log(
        `${firstValue} - ${secondValue} = ${firstValue - secondValue}`
      );
      break;

    case operator === "Multiplication":
      console.log(
        `${firstValue} * ${secondValue} = ${firstValue * secondValue}`
      );
      break;

    case operator === "Division":
      console.log(
        `${firstValue} / ${secondValue} = ${firstValue / secondValue}`
      );
      break;
  }
}

(async function askAgain() {
  do {
    await getData();
    var repeat = await inquirer.prompt([
      {
        name: "again",
        type: "input",
        message: "Do you want to calculate the again then press 'y' ",
      },
    ]);
  } while (repeat.again === "y");
})();
