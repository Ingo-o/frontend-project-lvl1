import readlineSync from 'readline-sync';

// Игровой движок
export default (task, gameData) => {
  // Приветствие
  console.log('Welcome to the Brain-Games buddy!');
  const userName = readlineSync.question('What is your name? ');
  console.log(`Nice to meet you ${userName}!`);

  // Объясняем задание
  console.log(task);

  // Запускаем цикл из трех вопросов
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
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
