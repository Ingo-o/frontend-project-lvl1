import readlineSync from 'readline-sync';
import { randomNum10, progression10 } from '../formulas.js';

// Игра brain-prog
export default () => {
  const userName = readlineSync.question('This is a ARITHMETIC PROGRESSION game! What is your name? ');
  console.log(`Nice to meet you ${userName}!`);
  console.log('Tell me, what number is missing in the progression?');
  let correctAnswerCount = 0;

  for (let i = 1; i <= 3; i += 1) {
    const progStart = randomNum10();
    const progStep = randomNum10();
    const progression = progression10(progStart, progStep);
    const randomElement = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[randomElement];
    progression[randomElement] = '..';

    console.log(`${progression.join(' ')}`);
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
