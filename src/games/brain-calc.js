#!/usr/bin/env node

import readlineSync from 'readline-sync';

const макеCalculation = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const generateRandomMathSign = () => {
      const mathSigns = ['+', '-', '*'];
      const randomIndex = Math.floor(Math.random() * mathSigns.length);
      return mathSigns[randomIndex];
    };

    const randomMathSign = generateRandomMathSign();
    const randomNumberOne = Math.floor(Math.random() * 100);
    const randomNumberTwo = Math.floor(Math.random() * 100);

    let result;

    switch (randomMathSign) {
      case '+':
        result = randomNumberOne + randomNumberTwo;
        break;
      case '-':
        result = randomNumberOne - randomNumberTwo;
        break;
      case '*':
        result = randomNumberOne * randomNumberTwo;
        break;
      default:
        console.log('Неизвестный символ');
        break;
    }

    console.log(`Question:  ${randomNumberOne} ${randomMathSign} ${randomNumberTwo}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === result) {
      console.log('Correct!');
    }
    if (Number(answer) !== result) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

макеCalculation();
