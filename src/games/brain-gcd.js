import generateRandomNum from '../randomNumFormula.js';
import gameEngine from '../index.js';

// Нахождение наибольшего общего делителя через алгоритм Евклида
const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

// Задание
const task = 'Write the greatest common divisor (GCD) of given numbers.';

// Формирования трех пар "вопрос-ответ"
const generateGameData = () => {
  const gameData = [];

  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const firstNum = generateRandomNum(1, 100);
    const secondNum = generateRandomNum(1, 100);

    const question = `${firstNum} and ${secondNum}`;
    const correctAnswer = findGCD(firstNum, secondNum);

    gameData.push([question, String(correctAnswer)]);
  }

  return gameData;
};

export default () => gameEngine(task, generateGameData());
