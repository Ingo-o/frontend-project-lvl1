import generateRandomNum from '../randomNumFormula.js';
import gameEngine from '../index.js';

// Построение массива с арифметической прогрессией из 10 чисел
const generateProgression10 = (start, step) => {
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    result.push(start + (i * step));
  }
  return result;
};

// Задание
const task = 'What number is missing in the progression?';

// Формирования трех пар "вопрос-ответ"
const generateGameData = () => {
  const gameData = [];

  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const progStart = generateRandomNum(1, 10);
    const progStep = generateRandomNum(1, 10);
    const progression = generateProgression10(progStart, progStep);
    const randomElement = Math.floor(Math.random() * progression.length);

    const correctAnswer = progression[randomElement];
    progression[randomElement] = '..';
    const question = `${progression.join(' ')}`;

    gameData.push([question, String(correctAnswer)]);
  }

  return gameData;
};

export default () => gameEngine(task, generateGameData());
