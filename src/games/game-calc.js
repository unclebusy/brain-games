import { generateRandomNumber, generateRandomMathSign } from '../utils.js';
import makeGame from '../index.js';

const greetings = 'What is the result of the expression?';

const makeRandomMathExpression = () => {
  const randomNumberOne = generateRandomNumber(0, 100);
  const randomNumberTwo = generateRandomNumber(0, 100);
  const randomMathSign = generateRandomMathSign();
  const question = `${randomNumberOne} ${randomMathSign} ${randomNumberTwo}`;
  let correctAnswer;

  switch (randomMathSign) {
    case '+':
      correctAnswer = randomNumberOne + randomNumberTwo;
      break;
    case '-':
      correctAnswer = randomNumberOne - randomNumberTwo;
      break;
    case '*':
      correctAnswer = randomNumberOne * randomNumberTwo;
      break;
    default:
      break;
  }

  correctAnswer = String(correctAnswer);

  return [question, correctAnswer];
};

const gameCalc = () => {
  makeGame(greetings, makeRandomMathExpression);
};

export default gameCalc;
