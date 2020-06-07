import { gcd, randomNum100 } from '../formulas.js';
import gameEngine from '../index.js';

const gameData = [];
const task = 'Write the greatest common divisor (gcd) of given numbers.';

const generateGameData = () => {
  for (let i = 0; i < 3; i += 1) {
    const oneQuestionData = [];

    const firstNum = randomNum100();
    const secondNum = randomNum100();

    const question = `${firstNum} and ${secondNum}`;
    const correctAnswer = gcd(firstNum, secondNum);

    oneQuestionData.push(question);
    oneQuestionData.push(correctAnswer);
    gameData.push(oneQuestionData);
  }
};

generateGameData();

export default () => gameEngine(task, gameData);
