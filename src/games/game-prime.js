import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const greetings = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNumber = () => {
  const randomNumber = generateRandomNumber(0, 100);

  const isPrimeNymber = () => {
    if (randomNumber === 1 || randomNumber === 2) {
      return 'yes';
    }
    for (let i = 2; i < randomNumber; i += 1) {
      if (randomNumber % i === 0) {
        return 'no';
      }
    }

    return 'yes';
  };

  const correctAnswer = isPrimeNymber();

  return [randomNumber, correctAnswer];
};

const gamePrime = () => {
  startGame(greetings, primeNumber);
};

export default gamePrime;
