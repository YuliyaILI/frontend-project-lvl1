/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';

export const hello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const congratulations = () => {
  const name = name;
  console.log(`Congratulations, ${name}!`);
};
