const inquirer = require("inquirer");

async function calculator() {
    console.clear();

    console.log("==================================");
    console.log("     Welcome to CLI Calculator");
    console.log("        Created by Vedant");
    console.log("==================================\n");

    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter first number:",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second number:",
        },
        {
            type: "list",
            name: "operator",
            message: "Choose your operation:",
            choices: ["+", "-", "*", "/"],
        },
    ]);

    let result;

    switch (answers.operator) {
        case "+":
            result = answers.num1 + answers.num2;
            break;

        case "-":
            result = answers.num1 - answers.num2;
            break;

        case "*":
            result = answers.num1 * answers.num2;
            break;

        case "/":
            if (answers.num2 === 0) {
                result = "Cannot divide by zero";
            } else {
                result = answers.num1 / answers.num2;
            }
            break;
    }

    console.log(
        `\nYour Answer is ${answers.num1} ${answers.operator} ${answers.num2} = ${result}\n`
    );

    const again = await inquirer.prompt([
        {
            type: "confirm",
            name: "restart",
            message: "Do you want to use calculator again?",
            default: true,
        },
    ]);

    if (again.restart) {
        calculator();
    } else {
        console.log("\nThank you for using CLI Calculator!");
        process.exit();
    }
}

calculator();