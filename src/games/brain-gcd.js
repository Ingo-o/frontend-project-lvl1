import randomNum from '../randomNumFormula.js';
import gameEngine from '../index.js';

// Нахождение наибольшего общего делителя через алгоритм Евклида
export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const task = 'Write the greatest common divisor (gcd) of given numbers.';

const generateGameData = () => {
  const gameData = [];

  // Цикл формирования трех пар "вопрос-ответ"
  for (let i = 0; i < 3; i += 1) {
    const firstNum = randomNum(1, 100);
    const secondNum = randomNum(1, 100);

    const question = `${firstNum} and ${secondNum}`;
    const correctAnswer = gcd(firstNum, secondNum);

    gameData.push([question, correctAnswer]);
  }

  return gameData;
};

export default () => gameEngine(task, generateGameData());
