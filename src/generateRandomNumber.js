// Генерация случайного числа в заданном диопазоне
export default (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;