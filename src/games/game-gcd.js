import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const greetings = 'Find the greatest common divisor of given numbers.';

const searchCommonDevider = (numberOne, numberTwo) => {
  let a = numberOne;
  let b = numberTwo;

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return String(a);
};

const generateRoundData = () => {
  const randomNumberOne = generateRandomNumber(0, 100);
  const randomNumberTwo = generateRandomNumber(0, 100);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const correctAnswer = searchCommonDevider(randomNumberOne, randomNumberTwo);

  return [question, correctAnswer];
};

const gameGcd = () => {
  startGame(greetings, generateRoundData);
};

export default gameGcd;
