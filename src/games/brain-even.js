import generateRandomNum from '../randomNumFormula.js';
import gameEngine from '../index.js';

// Определение четности числа
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const task = 'Answer "yes" if the number is even. Otherwise answer "no".';

const generateGameData = () => {
  const gameData = [];

  // Цикл формирования трех пар "вопрос-ответ"
  for (let i = 0; i < 3; i += 1) {
    const number = generateRandomNum(1, 100);

    const question = `Is ${number} an even number?`;
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    gameData.push([question, correctAnswer]);
  }

  return gameData;
};

export default () => gameEngine(task, generateGameData());
