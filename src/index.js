import readlineSync from 'readline-sync';

// Количество игровых раундов
export const numberOfQuestions = 3;

// Игровой движок
export const gameEngine = (task, gameData) => {
  // Приветствие
  console.log('Welcome to the Brain-Games buddy!');
  const userName = readlineSync.question('What is your name? ');
  console.log(`Nice to meet you ${userName}!`);

  // Объясняем задание
  console.log(task);

  // Запускаем цикл из вопросов
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const [question, correctAnswer] = gameData[i];

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
