import generateRandomNumber from '../randomNumberFormula.js';
import { numberOfQuestions, gameEngine } from '../index.js';

// Функция определяет, является ли число простым
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

// Задание
const task = 'Answer "yes" if the number is prime. Otherwise answer "no".';

// Формирования пар "вопрос-ответ"
const generateGameData = () => {
  const gameData = [];

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const number = generateRandomNumber(1, 1000);

    const question = `Is ${number} a prime number?`;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    gameData.push([question, correctAnswer]);
  }

  return gameData;
};

export default () => gameEngine(task, generateGameData());
