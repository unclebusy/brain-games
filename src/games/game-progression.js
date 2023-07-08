import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const greetings = 'What number is missing in the progression?';
const arrLength = 10;

const generationQuestion = (first, step) => {
  const arr = [];

  for (let i = 0; i < arrLength; i += 1) {
    arr.push(first + i * step);
  }

  return arr;
};

const generationAnswer = (number, step, miss) => {
  let answer = number;

  for (let i = 0; i < miss; i += 1) {
    answer += step;
  }

  return String(answer);
};

const generateRoundData = () => {
  const missPosinion = generateRandomNumber(0, 9);
  const stepProgression = generateRandomNumber(1, 10);
  const firstNumber = generateRandomNumber(0, 100);
  let question = generationQuestion(firstNumber, stepProgression);
  const correctAnswer = generationAnswer(firstNumber, stepProgression, missPosinion);

  question[missPosinion] = '..';
  question = question.join(' ');

  return [question, correctAnswer];
};

const gameProgression = () => {
  startGame(greetings, generateRoundData);
};

export default gameProgression;
