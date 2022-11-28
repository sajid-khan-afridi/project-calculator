import inquirer from "inquirer";
// const rainbow = chalkAnimation.rainbow("Let's start Calculation"); // Animation starts
// setTimeout(() => {
//   rainbow.stop(); // Animation stops
// }, 1000);
// setTimeout(() => {
//   rainbow.start(); // Animation resumes
//   console.log(`
//   _____________________
//   |  _________________  |
//   | | JO           0. | |
//   | |_________________| |
//   |  ___ ___ ___   ___  |
//   | | 7 | 8 | 9 | | + | |
//   | |___|___|___| |___| |
//   | | 4 | 5 | 6 | | - | |
//   | |___|___|___| |___| |
//   | | 1 | 2 | 3 | | x | |
//   | |___|___|___| |___| |
//   | | . | 0 | = | | / | |
//   | |___|___|___| |___| |
//   |_____________________|
//   `);
// }, 2000);
async function askQuestions() {
    let questions = [
        {
            name: "operation",
            type: "list",
            message: " Which operation you want to perform?",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
        {
            name: "num1",
            type: "number",
            message: "Enter the first number",
        },
        {
            name: "num2",
            type: "number",
            message: "Enter the second number",
        },
    ];
    let answers = await inquirer.prompt(questions);
    let operator = answers.operation;
    let firstValue = answers.num1;
    let secondValue = answers.num2;
    switch (true) {
        case operator === "Addition":
            console.log(`${firstValue} + ${secondValue} = ${firstValue + secondValue}`);
            break;
        case operator === "Subtraction":
            console.log(`${firstValue} - ${secondValue} = ${firstValue - secondValue}`);
            break;
        case operator === "Multiplication":
            console.log(`${firstValue} * ${secondValue} = ${firstValue * secondValue}`);
            break;
        case operator === "Division":
            console.log(`${firstValue} / ${secondValue} = ${firstValue / secondValue}`);
            break;
    }
}
// console.log(
//   "Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."
// );
async function askAgain() {
    do {
        await askQuestions();
        var again = await inquirer.prompt({
            name: "repeat",
            type: "input",
            message: "Do you want to continue again? then press y for yes or n for no",
        });
    } while (again.repeat === "y");
}
askAgain();
