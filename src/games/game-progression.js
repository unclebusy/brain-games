import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const greetings = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (first, step) => {
  const arr = [];

  for (let i = 0; i < progressionLength; i += 1) {
    arr.push(first + i * step);
  }

  return arr;
};

const generateRoundData = () => {
  const missPosinion = generateRandomNumber(0, 9);
  const stepProgression = generateRandomNumber(1, 10);
  const firstNumber = generateRandomNumber(0, 100);
  const questionArr = generateProgression(firstNumber, stepProgression);
  const correctAnswer = String(questionArr[missPosinion]);

  questionArr[missPosinion] = '..';
  const question = questionArr.join(' ');

  return [question, correctAnswer];
};

const gameProgression = () => {
  startGame(greetings, generateRoundData);
};

export default gameProgression;
