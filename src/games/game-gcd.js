import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const greetings = 'Find the greatest common divisor of given numbers.';

const searchCommonDevider = (numberOne, numberTwo) => {
  const arr = [1];

  for (let i = 2; i <= numberOne; i += 1) {
    if (numberOne % i === 0 && numberTwo % i === 0 && i > arr[0]) {
      arr[0] = i;
    }
  }

  const correctAnswer = arr.join();
    return;
  }

  const correctAnswer = arr.join();

const isCommonDevider = () => {
  const randomNumberOne = generateRandomNumber(0, 100);
  const randomNumberTwo = generateRandomNumber(0, 100);
  const question = `${randomNumberOne} ${randomNumberTwo}`;


  return [question, correctAnswer];
};

const gameGcd = () => {
  startGame(greetings, isCommonDevider);
};

export default gameGcd;
