import playNewGame from '../index.js';
import randomRange from '../utils.js';

const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calculationPrime = (number) =>{
  let result = 'yes';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) { result = 'no'; }
  }
  return [number, result];
};

const primeGame = () => {
  const number = randomRange();
  const result = calculationPrime(number);
  return result;
};

const playprime = playNewGame(text, primeGame);
export default playprime;
