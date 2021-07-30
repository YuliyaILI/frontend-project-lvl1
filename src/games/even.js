/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';
import { hello, getRandomInRange } from '../index.js';

const isEven = (num) => (num % 2 === 0);

const playEvenGame = () => {
  const name = hello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let flag = true;
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInRange(1, 100);
    const answer = (readlineSync.question(`Question: ${num}\nYour answer: `));
    const result = (isEven(num) ? 'yes' : 'no');
    if (answer === result) {
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
export default playEvenGame;
