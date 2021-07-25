/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';
import hello from '../cli.js';

const calcGame = () => {
  const name = hello();
  // console.log(name);
  const oper = (op, nam1, nam2) => {
    let res;
    if (op === '+') {
      res = nam1 + nam2;
    }
    if (op === '-') {
      res = nam1 - nam2;
    }
    if (op === '*') {
      res = nam1 * nam2;
    }
    return res;
  };
  const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const operators = ['+', '-', '*'];
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    let flag = true;
    const numberOperator = getRandomInRange(0, 2);
    const operator = operators[numberOperator];
    const num1 = getRandomInRange(1, 50);
    const num2 = getRandomInRange(1, 10);
    const answer = Number(readlineSync.question(`Question: ${num1}${operator}${num2}\nYour answer: `));
    const result = oper(operator, num1, num2);
    if (answer === result) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
      i = 3;
      flag = false;
    }
    if (flag === true) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default calcGame;
