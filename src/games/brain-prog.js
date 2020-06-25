import generateRandomNumber from '../randomNumberFormula.js';
import gameEngine from '../index.js';

// Построение массива с арифметической прогрессией из 10 чисел
const generateProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
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
    const progStart = generateRandomNumber(1, 10);
    const progStep = generateRandomNumber(1, 10);
    const progression = generateProgression(progStart, progStep, 10);
    const randomElement = Math.floor(Math.random() * progression.length);

    const correctAnswer = progression[randomElement];
    progression[randomElement] = '..';
    const question = progression.join(' ');

    gameData.push([question, String(correctAnswer)]);
  }

  return gameData;
};

export default () => gameEngine(task, generateGameData());
