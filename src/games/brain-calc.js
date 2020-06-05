import readlineSync from 'readline-sync';
import { randomNum10, randomOperator, calculator } from '../formulas.js';

// Игра brain-calc
export default () => {
  const userName = readlineSync.question('This is a CALCULATOR game! What is your name? ');
  console.log(`Nice to meet you ${userName}!`);
  console.log('Now, tell me the result of the expression!');
  let correctAnswerCount = 0;

  for (let i = 1; i <= 3; i += 1) {
    const firstNum = randomNum10();
    const secondNum = randomNum10();
    const operator = randomOperator();
    const correctAnswer = calculator(firstNum, secondNum, operator);

    console.log(`${firstNum} ${operator} ${secondNum} = ?`);
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
