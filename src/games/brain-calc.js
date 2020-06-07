import { randomNum10, randomOperator, calculator } from '../formulas.js';
import gameEngine from '../index.js';

const gameData = [];
const task = 'Write the result of the expressions:';

const generateGameData = () => {
  for (let i = 0; i < 3; i += 1) {
    const oneQuestionData = [];

    const firstNum = randomNum10();
    const secondNum = randomNum10();
    const operator = randomOperator();

    const question = `${firstNum} ${operator} ${secondNum} = ?`;
    const correctAnswer = calculator(firstNum, secondNum, operator);

    oneQuestionData.push(question);
    oneQuestionData.push(correctAnswer);
    gameData.push(oneQuestionData);
  }
};

generateGameData();

export default () => gameEngine(task, gameData);
