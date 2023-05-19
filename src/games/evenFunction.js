import playNewGame from '../index.js';
import randomRange from '../utils.js';

const textofEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  const number = randomRange();
  let numOddEv = '';
  if (number % 2 === 0) { numOddEv = 'yes'; } else { numOddEv = 'no'; }
  return [number, numOddEv];
};

const evenplay = playNewGame(textofEven, gameEven);
export default evenplay;
