import makeGame from '../index.js';
import { makeRandomNumber } from '../utils.js';

const greetings = 'Find the greatest common divisor of given numbers.';

const searchCommonDevider = () => {
  const randomNumberOne = makeRandomNumber(0, 100);
  const randomNumberTwo = makeRandomNumber(0, 100);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const arr = [1];

  for (let i = 2; i <= randomNumberOne; i += 1) {
    if (randomNumberOne % i === 0 && randomNumberTwo % i === 0 && i > arr[0]) {
      arr[0] = i;
    }
  }

  const rightAnswer = arr.join();

  return [question, rightAnswer];
};

const gameGcd = () => {
  makeGame(greetings, searchCommonDevider);
};

export default gameGcd;
