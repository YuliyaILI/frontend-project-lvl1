import readlineSync from 'readline-sync';
// import { hello, getRandomInRange } from '../index.js';

const smallestNum = (num1, num2) => ((num1 <= num2) ? num1 : num2);
const getGcd = (num1, num2) => {
  let result = 0;
  for (let j = 1; j <= smallestNum(num1, num2); j += 1) {
    if (num1 % j === 0 && num2 % j === 0) {
      result = j;
    }
  }
  return result;
};

export const getQuestion = 'Find the greatest common divisor of given numbers.';
export const getAnswer = (num1, num2) => Number(readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `));
export const getResult = (num1, num2) => getGcd(num1, num2);

// const gcdGame = () => {
//   const name = hello();
//   console.log('Find the greatest common divisor of given numbers.');
//   let flag = true;
//   for (let i = 0; i < 3; i += 1) {
//     const num1 = getRandomInRange(1, 50);
//     const num2 = getRandomInRange(1, 50);
//     const answer = Number(readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `));
//     const res = getGcd(num1, num2);
//     if (answer === res) {
//       console.log('Correct!');
//     } else {
// eslint-disable-next-line max-len
//       console.log(`${answer} is wrong answer ;(. Correct answer was ${res}.\nLet's try again, ${name}!`);
//       i = 3;
//       flag = false;
//     }
//   }
//   if (flag === true) {
//     console.log(`Congratulations, ${name}!`);
//   }
// };
// export default gcdGame;
