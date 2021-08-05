import readlineSync from 'readline-sync';

const getValueOfExpression = (operator, nam1, nam2) => {
  let result;
  if (operator === '+') {
    result = nam1 + nam2;
  }
  if (operator === '-') {
    result = nam1 - nam2;
  }
  if (operator === '*') {
    result = nam1 * nam2;
  }
  return result;
};

const operators = ['+', '-', '*'];

export const getQuestion = 'What is the result of the expression?';
export const getAnswer = (a, b, c) => Number(readlineSync.question(`Question: ${a} ${operators[Math.floor(c / 3)]} ${b}\nYour answer: `));
export const getResult = (a, b, c) => getValueOfExpression(operators[Math.floor(c / 3)], a, b);

// const playCalcGame = () => {
//  const name = hello();
//
//
//  console.log('What is the result of the expression?');
// let flag = true;
// for (let i = 0; i < 3; i += 1) {
// const numberOperator = getRandomInRange(0, 2);
//     const operator = operators[numberOperator];
//     const num1 = getRandomInRange(1, 50);
//     const num2 = getRandomInRange(1, 10);
// eslint-disable-next-line max-len
// const answer = Number(readlineSync.question(`Question: ${num1} ${operator} ${num2}\nYour answer: `));
//     const result = oper(operator, num1, num2);
//     if (answer === result) {
//       console.log('Correct!');
//     } else {
// eslint-disable-next-line max-len
//       console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
//       i = 3;
//       flag = false;
//     }
//   }
//   if (flag === true) {
//     console.log(`Congratulations, ${name}!`);
//   }
// };
// export default playCalcGame;
