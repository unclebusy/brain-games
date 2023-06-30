import makeGame from '../index.js';
import { makeRandomNumber } from '../utils.js';

const greetings = 'What number is missing in the progression?';

const makeProgression = () => {
  const arrLength = 10;
  const missNumberPosinion = makeRandomNumber(0, 9);
  const stepProgression = makeRandomNumber(1, 10);
  const firtNumberProgression = makeRandomNumber(0, 100);
  const question = [firtNumberProgression];
  let correctAnswer = firtNumberProgression;

  for (let i = 1; i < arrLength; i += 1) {
    question.push(question[question.length - 1] + stepProgression);
  }

  question[missNumberPosinion] = '..';

  for (let i = 0; i < missNumberPosinion; i += 1) {
    correctAnswer += stepProgression;
  }

  correctAnswer = String(correctAnswer);

  return [question, correctAnswer];
};

const gameProgression = () => {
  makeGame(greetings, makeProgression);
};

export default gameProgression;