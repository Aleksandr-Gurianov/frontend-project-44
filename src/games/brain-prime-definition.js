import { playnewgame } from '../index.js';
import { randomRange } from '../randomnumber.js';

const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primegame = () => {
  let result = 'yes';
  const y = randomRange(2, 35);
  for (let i = 2; i < y; i += 1) {
    if (y % i === 0) { result = 'no'; }
  }
  return [y, result];
};

const playprime = playnewgame(text, primegame);
export default playprime;
