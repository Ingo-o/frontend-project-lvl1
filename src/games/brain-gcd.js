import generateRandomNumber from '../generateRandomNumber.js';
import { numberOfQuestions, gameEngine } from '../index.js';

// Нахождение наибольшего общего делителя через алгоритм Евклида
const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

// Задание
const task = 'Write the greatest common divisor (GCD) of given numbers.';

// Формирования пар "вопрос-ответ"
const generateGameData = () => {
  const gameData = [];

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const firstNum = generateRandomNumber(1, 100);
    const secondNum = generateRandomNumber(1, 100);

    const question = `${firstNum} and ${secondNum}`;
    const correctAnswer = findGCD(firstNum, secondNum);

    gameData.push([question, String(correctAnswer)]);
  }

  return gameData;
};

export default () => gameEngine(task, generateGameData());
