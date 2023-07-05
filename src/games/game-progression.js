import makeGame from '../index.js';
import generateRandomNumber from '../utils.js';

const greetings = 'What number is missing in the progression?';

const makeProgression = () => {
  const arrLength = 10;
  const missNumberPosinion = generateRandomNumber(0, 9);
  const stepProgression = generateRandomNumber(1, 10);
  const firtNumberProgression = generateRandomNumber(0, 100);
  let question = [firtNumberProgression];
  let correctAnswer = firtNumberProgression;

  for (let i = 1; i < arrLength; i += 1) {
    question.push(question[question.length - 1] + stepProgression);
  }

  question[missNumberPosinion] = '..';

  for (let i = 0; i < missNumberPosinion; i += 1) {
    correctAnswer += stepProgression;
  }

  question = question.join(' ');
  correctAnswer = String(correctAnswer);

  return [question, correctAnswer];
};

const gameProgression = () => {
  makeGame(greetings, makeProgression);
};

export default gameProgression;
