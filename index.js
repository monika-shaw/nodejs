 //13
  const chalk = require('chalk');
 
//   console.log(chalk.blue('Hello world'));
// console.log(chalk.blue.italic('Hello world'));
// console.log(chalk.blue.underline.inverse('Hello world'));
// console.log(chalk.red.underline("Monika"));
// console.log(chalk.red.underline(":Monika"));


const { default: validator } = require('validator');
const res= validator.isEmail("Tom@tom.com")
// console.log(res);
console.log(res ? chalk.green.inverse(res): chalk.red.inverse(res));


//14 nodemon