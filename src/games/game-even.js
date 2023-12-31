import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const greetings = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRoundData = () => {
  const questionNumber = generateRandomNumber(0, 100);
  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

  return [questionNumber, correctAnswer];
};

const gameEven = () => {
  startGame(greetings, generateRoundData);
};

export default gameEven;
