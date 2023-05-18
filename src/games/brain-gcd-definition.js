import playnewgame from '../index.js';
import randomRange from '../randomnumber.js';

const text = 'Find the greatest common divisor of given numbers.';

const nod = (first, second) => {
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
  const first = Math.abs(randomRange(1, 35));
  const second = Math.abs(randomRange(1, 35));
  const question = `${first} ${second}`;
  const play = nod(first, second);
  return [question, `${play}`];
};

const gcdgame = playnewgame(text, gameGcd);
export default gcdgame;
