import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const greetings = 'What is the result of the expression?';

const generateCorrectAnswer = (numberOne, mathSign, numberTwo) => {
  let answer;

  if (mathSign === '+') {
    answer = numberOne + numberTwo;
  }
  if (mathSign === '-') {
    answer = numberOne - numberTwo;
  }
  if (mathSign === '*') {
    answer = numberOne * numberTwo;
  }

  return String(answer);
};

const generateRoundData = () => {
  const mathSigns = ['+', '-', '*'];
  const randomNumberOne = generateRandomNumber(0, 100);
  const randomNumberTwo = generateRandomNumber(0, 100);
  const randomIndex = generateRandomNumber(0, 2);
  const randomMathSign = mathSigns[randomIndex];
  const question = `${randomNumberOne} ${randomMathSign} ${randomNumberTwo}`;
  const correctAnswer = generateCorrectAnswer(randomNumberOne, randomMathSign, randomNumberTwo);

  return [question, correctAnswer];
};

const gameCalc = () => {
  startGame(greetings, generateRoundData);
};

export default gameCalc;
