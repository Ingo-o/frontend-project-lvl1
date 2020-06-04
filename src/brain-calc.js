import readlineSync from 'readline-sync';

// Функция генерирующая случайное число от 1 до 10
const randomNum = () => Math.floor(Math.random() * (10)) + 1;

// Функция генерирующая случайный оператор
const randomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

// Игра
const game = () => {
  const userName = readlineSync.question('Welcome to the Brain games! What is your name? ');
  console.log(`Nice to meet you ${userName}!`);
  console.log('What is the result of the expression?');
  let correctAnswerCount = 0;

  for (let i = 1; i <= 3; i += 1) {
    const firstNum = randomNum();
    const secondNum = randomNum();
    const operator = randomOperator();

    // Функция считающая результат выражения
    const expressionResult = () => {
      if (operator === '+') {
        return firstNum + secondNum;
      }
      if (operator === '-') {
        return firstNum - secondNum;
      }
      return firstNum * secondNum;
    };

    const correctAnswer = expressionResult();

    console.log(`Question: ${firstNum} ${operator} ${secondNum} = ?`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(`"${answer}" is a wrong answer :( ... Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default game;
