import readlineSync from 'readline-sync';

export const userName = readlineSync.question('Hello! What is your name? ');
console.log('Nice to meet you ' + userName + '!');