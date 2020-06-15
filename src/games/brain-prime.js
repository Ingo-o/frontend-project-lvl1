import randomNum from '../randomNumFormula.js';
import gameEngine from '../index.js';

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

const task = 'Answer "yes" if the number is prime. Otherwise answer "no".';

const generateGameData = () => {
  const gameData = [];

  // Цикл формирования трех пар "вопрос-ответ"
  for (let i = 0; i < 3; i += 1) {
    const number = randomNum(1, 1000);

    const question = `Is ${number} a prime number?`;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    gameData.push([question, correctAnswer]);
  }

  return gameData;
};

export default () => gameEngine(task, generateGameData());
