import readlineSync from 'readline-sync';

// Функция определяющая четность числа
const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

// Функция генерирующая случайное число от 1 до 100
const randomNum = () => Math.floor(Math.random() * (100)) + 1;

// Игра
const game = () => {
  const userName = readlineSync.question('Welcome to the Brain games! What is your name? ');
  console.log(`Nice to meet you ${userName}!`);
  console.log('Answer "yes" if the number is even. otherwise answer "no".');
  let correctAnswerCount = 0;

  for (let i = 1; i <= 3; i += 1) {
    const number = randomNum();
    const correctAnswer = isEven(number);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(`"${answer}" is wrong answer :( ... Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default game;
