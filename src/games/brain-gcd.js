import readlineSync from 'readline-sync';
import { gcd, randomNum100 } from '../formulas.js';

// Игра brain-gcd (gcd - greatest common divisor)
export default () => {
  const userName = readlineSync.question('This is a GCD game! What is your name? ');
  console.log(`Nice to meet you ${userName}!`);
  console.log('Write me the Greatest Common Divisor of given numbers!');
  let correctAnswerCount = 0;

  for (let i = 1; i <= 3; i += 1) {
    const firstNum = randomNum100();
    const secondNum = randomNum100();
    const correctAnswer = gcd(firstNum, secondNum);

    console.log(`${firstNum} and ${secondNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === correctAnswer) {
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
