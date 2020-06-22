import generateRandomNum from '../randomNumFormula.js';
import gameEngine from '../index.js';

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

// Задание
const task = 'Write the result of the expressions:';

// Формирования трех пар "вопрос-ответ"
const generateGameData = () => {
  const gameData = [];

  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const firstNum = generateRandomNum(1, 10);
    const secondNum = generateRandomNum(1, 10);
    const operators = ['+', '-', '*'];
    const operator = operators[generateRandomNum(0, 2)];

    const question = `${firstNum} ${operator} ${secondNum} = ?`;
    const correctAnswer = expressionCalculate(firstNum, secondNum, operator);

    gameData.push([question, String(correctAnswer)]);
  }

  return gameData;
};

export default () => gameEngine(task, generateGameData());
