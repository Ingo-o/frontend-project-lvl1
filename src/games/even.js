import generateRandomNumber from '../generateRandomNumber.js';
import { numberOfQuestions, gameEngine } from '../index.js';

// Определение четности числа
const isEven = (num) => num % 2 === 0;

// Задание
const task = 'Answer "yes" if the number is even. Otherwise answer "no".';

// Формирования пар "вопрос-ответ"
const generateGameData = () => {
  const gameData = [];

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const number = generateRandomNumber(1, 100);

    const question = `Is ${number} an even number?`;
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    gameData.push([question, correctAnswer]);
  }

  return gameData;
};

export default () => gameEngine(task, generateGameData());
