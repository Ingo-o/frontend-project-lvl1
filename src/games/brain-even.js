import randomNum from '../randomNumFormula.js';
import gameEngine from '../index.js';

// Определение четности числа (yes/no)
export const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const task = 'Answer "yes" if the number is even. Otherwise answer "no".';

const generateGameData = () => {
  const gameData = [];

  // Цикл формирования трех пар "вопрос-ответ"
  for (let i = 0; i < 3; i += 1) {
    const number = randomNum(1, 100);

    const question = `Is ${number} an even number?`;
    const correctAnswer = isEven(number);

    gameData.push([question, correctAnswer]);
  }

  return gameData;
};

export default () => gameEngine(task, generateGameData());
