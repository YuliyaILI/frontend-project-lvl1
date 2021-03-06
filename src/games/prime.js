import readlineSync from 'readline-sync';
// import { hello, getRandomInRange } from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const getQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const getAnswer = (num) => (readlineSync.question(`Question: ${num}\nYour answer: `));
export const getResult = (num) => (isPrime(num) ? 'yes' : 'no');

// const playPrimeGame = () => {
//   const name = hello();
//   console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
//   let flag = true;
//   for (let i = 0; i < 3; i += 1) {
//     const num = getRandomInRange(1, 100);
//     const answer = (readlineSync.question(`Question: ${num}\nYour answer: `));
//     const result = (isPrime(num)) ? 'yes' : 'no';
//     if (answer === result) {
//       console.log('Correct!');
//     } else {
// eslint-disable-next-line max-len
// console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
//       i = 3;
//       flag = false;
//     }
//   }
//   if (flag === true) {
//     console.log(`Congratulations, ${name}!`);
//   }
// };
// export default playPrimeGame;
