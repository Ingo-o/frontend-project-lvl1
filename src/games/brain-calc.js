import generateRandomNum from '../randomNumFormula.js';
import gameEngine from '../index.js';

// Генерация случайного оператора (+, -, *)
const generateRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

// Простейшие арифметические операции
const expressionCalculate = (a, b, oper) => {
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
    const firstNum = generateRandomNum(1, 10);
    const secondNum = generateRandomNum(1, 10);
    const operator = generateRandomOperator();

    const question = `${firstNum} ${operator} ${secondNum} = ?`;
    const correctAnswer = expressionCalculate(firstNum, secondNum, operator);

    gameData.push([question, String(correctAnswer)]);
  }

  return gameData;
};

export default () => gameEngine(task, generateGameData());
