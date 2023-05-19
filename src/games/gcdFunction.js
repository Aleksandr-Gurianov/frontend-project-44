import playNewGame from '../index.js';
import randomRange from '../utils.js';

const text = 'Find the greatest common divisor of given numbers.';

const getNod = (first, second) => {
  let x = Math.abs(first);
  let y = Math.abs(second);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const gameGcd = () => {
  const first = randomRange();
  const second = randomRange();
  const question = `${first} ${second}`;
  const play = getNod(first, second);
  return [question, `${play}`];
};

const gcdgame = playNewGame(text, gameGcd);
export default gcdgame;
