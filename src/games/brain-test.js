import { isEven, randomNum100 } from '../formulas.js';
import gameEngine from '../index.js';

const gameData = [];
const task = 'Answer "yes" if the number is even. Otherwise answer "no".';

const generateGameData = () => {
  for (let i = 0; i < 3; i += 1) {
    const oneQuestionData = [];
    const question = randomNum100();
    const correctAnswer = isEven(question);
    oneQuestionData.push(question);
    oneQuestionData.push(correctAnswer);
    gameData.push(oneQuestionData);
  }
};

generateGameData();

export default () => gameEngine(task, gameData);
