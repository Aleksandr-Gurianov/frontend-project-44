import playnewgame from '../index.js';
import randomRange from '../randomnumber.js';

const textofEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  const number = randomRange(1, 35);
  let numOddEv = '';
  if (number % 2 === 0) { numOddEv = 'yes'; } else { numOddEv = 'no'; }
  return [number, numOddEv];
};

const evenplay = playnewgame(textofEven, gameEven);
export default evenplay;
