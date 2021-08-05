import readlineSync from 'readline-sync';
// import getRandomInRange from '../utilities.js';
// import sayHello from '../cli.js';

const isEven = (num) => (num % 2 === 0);
export const getQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
export const getAnswer = (num) => (readlineSync.question(`Question: ${num}\nYour answer: `));
export const getResult = (num) => (isEven(num) ? 'yes' : 'no');

// const playEvenGame = (question) => {
// const name = sayHello(question);
// console.log(n);
// let flag = true;
// for (let i = 0; i < 3; i += 1) {
//   const num = getRandomInRange(1, 100);
//  const answer = getAnswer(num);
//   const result = getResult(num);
//  if (answer === result) {
//    console.log('Correct!');
//  } else {
// eslint-disable-next-line max-len
//    console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
//     i = 3;
//    flag = false;
//   }
// }
// if (flag === true) {
//   console.log(`Congratulations, ${name}!`);
//  }
// };
// export default playEvenGame;
// playEvenGame(n);
