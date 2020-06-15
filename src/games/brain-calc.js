import randomNum from '../randomNumFormula.js';
import gameEngine from '../index.js';

// Генерация случайного оператора (+, -, *)
export const randomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

// Простейшие арифметические операции
export const calculator = (a, b, oper) => {
  switch (oper) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return NaN;
  }
};

const task = 'Write the result of the expressions:';

const generateGameData = () => {
  const gameData = [];

  // Цикл формирования трех пар "вопрос-ответ"
  for (let i = 0; i < 3; i += 1) {
    const firstNum = randomNum(1, 10);
    const secondNum = randomNum(1, 10);
    const operator = randomOperator();

    const question = `${firstNum} ${operator} ${secondNum} = ?`;
    const correctAnswer = calculator(firstNum, secondNum, operator);

    gameData.push([question, correctAnswer]);
  }

  return gameData;
};

export default () => gameEngine(task, generateGameData());
