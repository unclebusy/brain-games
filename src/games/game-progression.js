import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const greetings = 'What number is missing in the progression?';
const arrLength = 10;

const generateProgression = (first, step) => {
  const arr = [];

  for (let i = 0; i < arrLength; i += 1) {
    arr.push(first + i * step);
  }

  return arr;
};

const generateRoundData = () => {
  const missPosinion = generateRandomNumber(0, 9);
  const stepProgression = generateRandomNumber(1, 10);
  const firstNumber = generateRandomNumber(0, 100);
  let question = generateProgression(firstNumber, stepProgression);
  const correctAnswer = String(question[missPosinion]);

  question[missPosinion] = '..';
  question = question.join(' ');

  return [question, correctAnswer];
};

const gameProgression = () => {
  startGame(greetings, generateRoundData);
};

export default gameProgression;
