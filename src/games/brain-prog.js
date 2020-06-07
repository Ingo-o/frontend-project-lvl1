import { randomNum10, progression10 } from '../formulas.js';
import gameEngine from '../index.js';

const gameData = [];
const task = 'What number is missing in the progression?';

const generateGameData = () => {
  for (let i = 0; i < 3; i += 1) {
    const oneQuestionData = [];

    const progStart = randomNum10();
    const progStep = randomNum10();
    const progression = progression10(progStart, progStep);
    const randomElement = Math.floor(Math.random() * progression.length);

    const correctAnswer = progression[randomElement];
    progression[randomElement] = '..';
    const question = `${progression.join(' ')}`;

    oneQuestionData.push(question);
    oneQuestionData.push(correctAnswer);
    gameData.push(oneQuestionData);
  }
};

generateGameData();

export default () => gameEngine(task, gameData);
