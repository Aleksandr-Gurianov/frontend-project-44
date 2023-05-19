import playNewGame from '../index.js';
import randomRange from '../utils.js';

const textofEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const understandEvenorOdd = (number) => {
  let numOddEv = '';
  if (number % 2 === 0) { numOddEv = 'yes'; } else { numOddEv = 'no'; }
  return [number, numOddEv];
};

const gameEven = () => {
  const number = randomRange();
  const result = understandEvenorOdd(number);
  return result;
};

const evenplay = playNewGame(textofEven, gameEven);
export default evenplay;
