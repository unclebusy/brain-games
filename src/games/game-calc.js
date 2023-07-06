import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const greetings = 'What is the result of the expression?';

const generateRandomMathSign = () => {
  const mathSigns = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * mathSigns.length);
  return mathSigns[randomIndex];
};

const generateRoundData = () => {
  const randomNumberOne = generateRandomNumber(0, 100);
  const randomNumberTwo = generateRandomNumber(0, 100);
  const randomMathSign = generateRandomMathSign();
  const question = `${randomNumberOne} ${randomMathSign} ${randomNumberTwo}`;
  let correctAnswer;

  if (randomMathSign === '+') {
    correctAnswer = randomNumberOne + randomNumberTwo;
  }
  if (randomMathSign === '-') {
    correctAnswer = randomNumberOne - randomNumberTwo;
  }
  if (randomMathSign === '*') {
    correctAnswer = randomNumberOne * randomNumberTwo;
  }

  correctAnswer = String(correctAnswer);

  return [question, correctAnswer];
};

const gameCalc = () => {
  startGame(greetings, generateRoundData);
};

export default gameCalc;
