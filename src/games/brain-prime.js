import readlineSync from 'readline-sync';
import { randomNum1000, isPrime } from '../formulas.js';

// Игра brain-prime
export default () => {
  const userName = readlineSync.question('This is a PRIME NUMBER game! What is your name? ');
  console.log(`Nice to meet you ${userName}!`);
  console.log('Answer "yes" if the number is prime. Otherwise answer "no".');
  let correctAnswerCount = 0;

  for (let i = 1; i <= 3; i += 1) {
    const number = randomNum1000();
    const correctAnswer = isPrime(number);

    console.log(`Is ${number} a prime number?`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(`"${answer}" is a wrong answer (╯︵╰,) ... Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
