// Генерация случайного числа от 1 до 10
export const randomNum10 = () => Math.ceil(Math.random() * (10));

// Генерация случайного числа от 1 до 100
export const randomNum100 = () => Math.ceil(Math.random() * (100));

// Генерация случайного оператора (+, -, *)
export const randomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

// Простейшие арифметические операции
export const calculator = (a, b, oper) => {
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

// Определение четности числа (yes/no)
export const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

// Нахождение наибольшего общего делителя через алгоритм Евклида
export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
