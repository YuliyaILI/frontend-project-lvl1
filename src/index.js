// import readlineSync from 'readline-sync';
import getRandomInRange from './utilities.js';
import sayHello from './cli.js';

// export const hello = () => {
// console.log('Welcome to the Brain Games!');
// const name = readlineSync.question('May I have your name? ');
// console.log(`Hello, ${name}!`);
// return name;
// };

// export const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// const isEven = (num) => (num % 2 === 0);
// const n = 'Answer "yes" if the number is even, otherwise answer "no".';
// const getAnswer = (num) => (readlineSync.question(`Question: ${num}\nYour answer: `));
// const getResult = (num) => (isEven(num) ? 'yes' : 'no');

export default (question, getAnswer, getResult) => {
  const name = sayHello();
  console.log(question);
  let flag = true;
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInRange(1, 50);
    const num2 = getRandomInRange(1, 50);
    const num3 = getRandomInRange(0, 8);
    const answer = getAnswer(num1, num2, num3);
    const result = getResult(num1, num2, num3);
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
// export default playEvenGame;

// playEvenGame(n);
