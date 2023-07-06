import readlineSync from 'readline-sync';

const numberRoundsWon = 3;

const startGame = (greetings, getQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(greetings);

  for (let i = 0; i < numberRoundsWon; i += 1) {
    const [question, correctAnswer] = getQuestion();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === playerAnswer.toLocaleLowerCase()) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
