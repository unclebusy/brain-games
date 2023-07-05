import generateRandomNumber from '../utils.js';
import makeGame from '../index.js';

const greetings = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNumber = () => {
  const questionNumberumber = generateRandomNumber(0, 100);
  const correctAnsweranswer = questionNumberumber % questionNumberumber === 1 ? 'yes' : 'no';

  return [questionNumberumber, correctAnsweranswer];
};

const gamePrime = () => {
  makeGame(greetings, primeNumber);
};

export default gamePrime;
