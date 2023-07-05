import { generateRandomNumber } from '../utils.js';
import makeGame from '../index.js';

const greetings = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenNumber = () => {
  const questionNumber = generateRandomNumber(0, 100);
  const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';
  return [questionNumber, correctAnswer];
};

const gameEven = () => {
  makeGame(greetings, evenNumber);
};

export default gameEven;
