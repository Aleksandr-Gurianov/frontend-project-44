import playNewGame from '../index.js';
import randomRange from '../utils.js';

const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primegame = () => {
  let result = 'yes';
  const y = randomRange();
  for (let i = 2; i < y; i += 1) {
    if (y % i === 0) { result = 'no'; }
  }
  return [y, result];
};

const playprime = playNewGame(text, primegame);
export default playprime;
