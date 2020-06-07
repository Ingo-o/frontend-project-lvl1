import readlineSync from 'readline-sync';

// Игровой движок
export default (task, gameData) => {
  const userName = readlineSync.question('Welcome to the Brain-Games buddy! What is your name? ');
  console.log(`Nice to meet you ${userName}!`);
  console.log(task); // Задание
  let correctAnswerCount = 0;

  for (let i = 0; i < 3; i += 1) {
    console.log(gameData[i][0]); // Вопрос
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(gameData[i][1])) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(`"${answer}" is a wrong answer (╯︵╰,) ... Correct answer was "${gameData[i][1]}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${userName}! (＾▽＾)`);
  }
};
