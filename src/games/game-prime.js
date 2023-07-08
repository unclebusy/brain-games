import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const greetings = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1 || number === 2) {
    return 'yes';
  }
  const sqrtNumber = Math.floor(Math.sqrt(number));

  for (let i = 2; i < sqrtNumber; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const generateRoundData = () => {
  const randomNumber = generateRandomNumber(0, 100);
  const correctAnswer = isPrime(randomNumber);

  return [randomNumber, correctAnswer];
};

const gamePrime = () => {
  startGame(greetings, generateRoundData);
};

export default gamePrime;
