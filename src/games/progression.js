/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';
import { hello, getRandomInRange } from '../index.js';

const progression = () => {
  let text = getRandomInRange(1, 20);
  const diff = getRandomInRange(1, 10);
  let result = '';
  for (let i = 0; i < 10; i += 1) {
    result = `${result}${text} `;
    text += diff;
  }
  return result;
};
// const progr = () => {
  // const str = repeat();
  // console.log(str);
  // const digitals = str.split(' ');
  // console.log(digitals);
  // const newDigitals = [];
  // const randomIndex = getRandomInRange(0, 9);
  // for (let i = 0; i < digitals.length; i += 1) {
// if (i === randomIndex) {
// newDigitals.push('..');
// } else {
//  newDigitals.push(digitals[i]);
// }
  // }
  // const newStr = newDigitals.join(' ');
  // console.log(newStr);
// return newStr;
// };
const progressionGame = () => {
  const name = hello();
  console.log('What number is missing in the progression?');
  let flag = true;
  for (let i = 0; i < 3; i += 1) {
    const str = progression();
    const digitals = str.split(' ');
    const newDigitals = [];
    const randomIndex = getRandomInRange(0, 9);
    const result = Number(digitals[randomIndex]);
    for (let j = 0; j < digitals.length; j += 1) {
      if (j === randomIndex) {
        newDigitals.push('..');
      } else {
        newDigitals.push(digitals[j]);
      }
    }
    const newStr = newDigitals.join(' ');
    const answer = readlineSync.question(`Question: ${newStr}\nYour answer: `);
    const answerInNum = Number(answer);
    if (answerInNum === result) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
      i = 3;
      flag = false;
    }
  }
  if (flag === true) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default progressionGame;
