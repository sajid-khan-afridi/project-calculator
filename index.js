import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "operator",
        message: "Enter the operation",
        type: "list",
    },
    {
        name: "num1",
        message: "Enter First number",
        type: "list",
    },
    {
        name: "num2",
        message: "Enter Second number",
        type: "list",
    },
]);
console.log(answer);
