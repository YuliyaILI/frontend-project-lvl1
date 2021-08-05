import readlineSync from 'readline-sync';
// import getRandomInRange from '../utilities.js';

const getProgression = (a, b, c) => {
  let text = a;
  const diff = b;
  let result = '';
  for (let i = 0; i < 9; i += 1) {
    result = `${result}${text} `;
    text += diff;
  }
  const str = result;
  const digitals = str.split(' ');
  const newDigitals = [];
  const randomIndex = c;
  const result1 = Number(digitals[randomIndex]);
  for (let j = 0; j < digitals.length; j += 1) {
    if (j === randomIndex) {
      newDigitals.push('..');
    } else {
      newDigitals.push(digitals[j]);
    }
  }
  const newStr = newDigitals.join(' ');
  return [newStr, result1];
};

export const getQuestion = 'What number is missing in the progression?';
export const getAnswer = (a, b, c) => Number(readlineSync.question(`Question: ${getProgression(a, b, c)[0]}\nYour answer: `));
export const getResult = (a, b, c) => getProgression(a, b, c)[1];
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

// const progressionGame = () => {
//   const name = hello();
//   console.log('What number is missing in the progression?');
//   let flag = true;
//   for (let i = 0; i < 3; i += 1) {
// const str = progression();
// const digitals = str.split(' ');
// const newDigitals = [];
// const randomIndex = getRandomInRange(0, 9);
// const result = Number(digitals[randomIndex]);
// for (let j = 0; j < digitals.length; j += 1) {
//   if (j === randomIndex) {
//     newDigitals.push('..');
//   } else {
//     newDigitals.push(digitals[j]);
//   }
// }
//     // const newStr = newDigitals.join(' ');
//     const answer = Number(readlineSync.question(`Question: ${newStr}\nYour answer: `));
//     // const answerInNum = Number(answer);
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
// export default progressionGame;
