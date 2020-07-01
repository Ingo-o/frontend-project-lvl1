import generateRandomNumber from '../generateRandomNumber.js';
import { numberOfQuestions, gameEngine } from '../index.js';

// Построение массива с арифметической прогрессией
const generateProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + (i * step));
  }
  return result;
};

// Задание
const task = 'What number is missing in the progression?';

// Формирования пар "вопрос-ответ"
const generateGameData = () => {
  const gameData = [];

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const progStart = generateRandomNumber(1, 10);
    const progStep = generateRandomNumber(1, 10);
    const progression = generateProgression(progStart, progStep, 10);
    const randomElementIndex = generateRandomNumber(0, progression.length - 1);

    const correctAnswer = progression[randomElementIndex];
    progression[randomElementIndex] = '..';
    const question = progression.join(' ');

    gameData.push([question, String(correctAnswer)]);
  }

  return gameData;
};

export default () => gameEngine(task, generateGameData());
