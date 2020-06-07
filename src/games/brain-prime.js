import { randomNum1000, isPrime } from '../formulas.js';
import gameEngine from '../index.js';

const gameData = [];
const task = 'Answer "yes" if the number is prime. Otherwise answer "no".';

const generateGameData = () => {
  for (let i = 0; i < 3; i += 1) {
    const oneQuestionData = [];

    const number = randomNum1000();

    const question = `Is ${number} a prime number?`;
    const correctAnswer = isPrime(number);

    oneQuestionData.push(question);
    oneQuestionData.push(correctAnswer);
    gameData.push(oneQuestionData);
  }
};

generateGameData();

export default () => gameEngine(task, gameData);
