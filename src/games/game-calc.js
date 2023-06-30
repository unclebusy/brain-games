import { makeRandomNumber, generateRandomMathSign } from '../utils.js';
import makeGame from '../index.js';

const greetings = 'What is the result of the expression?';

const makeRandomMathExpression = () => {
  const randomNumberOne = makeRandomNumber(0, 100);
  const randomNumberTwo = makeRandomNumber(0, 100);
  const randomMathSign = generateRandomMathSign();
  const question = `${randomNumberOne} ${randomMathSign} ${randomNumberTwo}`;
  let rightAnswer;

  switch (randomMathSign) {
    case '+':
      rightAnswer = randomNumberOne + randomNumberTwo;
      break;
    case '-':
      rightAnswer = randomNumberOne - randomNumberTwo;
      break;
    case '*':
      rightAnswer = randomNumberOne * randomNumberTwo;
      break;
    default:
      break;
  }

  rightAnswer = String(rightAnswer);

  return [question, rightAnswer];
};

const gameCalc = () => {
  makeGame(greetings, makeRandomMathExpression);
};

export default gameCalc;
