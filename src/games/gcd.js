/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';
import { hello, getRandomInRange } from '../index.js';

export default () => {
  const smallestNum = (num1, num2) => ((num1 <= num2) ? num1 : num2);
  const nod = (num1, num2) => {
    let result = 0;
    for (let j = 1; j <= smallestNum(num1, num2); j += 1) {
      if (num1 % j === 0 && num2 % j === 0) {
        result = j;
      }
    }
    return result;
  };
  const name = hello();
  console.log('Find the greatest common divisor of given numbers.');
  let flag = true;
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInRange(1, 50);
    const num2 = getRandomInRange(1, 50);
    const answer = Number(readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `));
    const res = nod(num1, num2);
    if (answer === res) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${res}.\nLet's try again, ${name}!`);
      i = 3;
      flag = false;
    }
  }
  if (flag === true) {
    console.log(`Congratulations, ${name}!`);
  }
};