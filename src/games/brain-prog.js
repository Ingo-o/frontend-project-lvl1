import randomNum from '../randomNumFormula.js';
import gameEngine from '../index.js';

// Построение массива с арифметической прогрессией из 10 чисел
export const progression10 = (start, step) => {
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    result.push(start + (i * step));
  }
  return result;
};

const task = 'What number is missing in the progression?';

const generateGameData = () => {
  const gameData = [];

  // Цикл формирования трех пар "вопрос-ответ"
  for (let i = 0; i < 3; i += 1) {
    const progStart = randomNum(1, 10);
    const progStep = randomNum(1, 10);
    const progression = progression10(progStart, progStep);
    const randomElement = Math.floor(Math.random() * progression.length);

    const correctAnswer = progression[randomElement];
    progression[randomElement] = '..';
    const question = `${progression.join(' ')}`;

    gameData.push([question, correctAnswer]);
  }

  return gameData;
};

export default () => gameEngine(task, generateGameData());
