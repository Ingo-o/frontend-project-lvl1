import readlineSync from 'readline-sync';

// Игровой движок
export default (task, gameData) => {
  const userName = readlineSync.question('Welcome to the Brain-Games buddy! What is your name? ');
  console.log(`Nice to meet you ${userName}!`);
  console.log(task); // Задание

  // Запускаем цикл из трех вопросов
  for (let i = 0; i < 3; i += 1) {
    const question = gameData[i][0];
    const correctAnswer = gameData[i][1];

    console.log(question);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is a wrong answer (╯︵╰,) ... Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}! (＾▽＾)`);
};
