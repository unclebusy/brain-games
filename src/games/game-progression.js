import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const greetings = 'What number is missing in the progression?';

const isQuestion = (number, length, step, miss) => {
  const arr = [number];

  for (let i = 1; i < length; i += 1) {
    arr.push(arr[arr.length - 1] + step);
  }
  arr[miss] = '..';

  return arr.join(' ');
};

const isAnswer = (number, step, miss) => {
  let answer = number;

  for (let i = 0; i < miss; i += 1) {
    answer += step;
  }

  return String(answer);
};

const generationProgression = () => {
  const arrLength = 10;
  const missPosinion = generateRandomNumber(0, 9);
  const stepProgression = generateRandomNumber(1, 10);
  const firtNumberProgression = generateRandomNumber(0, 100);
  const question = isQuestion(firtNumberProgression, arrLength, stepProgression, missPosinion);
  const correctAnswer = isAnswer(firtNumberProgression, stepProgression, missPosinion);

  return [question, correctAnswer];
};

const gameProgression = () => {
  startGame(greetings, generationProgression);
};

export default gameProgression;
