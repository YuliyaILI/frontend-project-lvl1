/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';

// const even = ()
export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNumber1 = Math.floor(Math.random() * 11);
  console.log(randomNumber1);
  const answer = readlineSync.question('Your answer: ');
  if (randomNumber1 % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
  }
  if (randomNumber1 % 2 === 0 && answer !== 'yes') {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
    return false;
  }
  if (randomNumber1 % 2 !== 0 && answer !== 'no') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    return false;
  }
  if (randomNumber1 % 2 !== 0 && answer === 'no') {
    console.log('Correct!');
  }
  const randomNumber2 = Math.floor(Math.random() * 11);
  console.log(randomNumber2);
  const answer2 = readlineSync.question('Your answer: ');
  if (randomNumber2 % 2 === 0 && answer2 === 'yes') {
    console.log('Correct!');
  }
  if (randomNumber2 % 2 === 0 && answer2 !== 'yes') {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
    return false;
  }
  if (randomNumber2 % 2 !== 0 && answer2 !== 'no') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    return false;
  }
  if (randomNumber2 % 2 !== 0 && answer2 === 'no') {
    console.log('Correct!');
  }

  const randomNumber3 = Math.floor(Math.random() * 11);
  console.log(randomNumber3);
  const answer3 = readlineSync.question('Your answer: ');
  if (randomNumber3 % 2 === 0 && answer3 === 'yes') {
    console.log('Correct!');
  }
  if (randomNumber3 % 2 === 0 && answer3 !== 'yes') {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
    return false;
  }
  if (randomNumber3 % 2 !== 0 && answer3 !== 'no') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    return false;
  }
  if (randomNumber3 % 2 !== 0 && answer3 === 'no') {
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
