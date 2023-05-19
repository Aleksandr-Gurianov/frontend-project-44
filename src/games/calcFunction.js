import playNewGame from '../index.js';
import getProgression from '../utilsCalcProgress.js';

const textCalc = 'What is the result of the expression?';

const getexpressionResult = () => {
  const symbol = ['-', '+', '*'];
  let res = '';
  const l = symbol.length;
  const rand = Math.floor(Math.random() * l);
  const randSymbol = symbol[rand];
  let question = '';
  const randomNumOne = getProgression(1, 35);
  const randomNumTwo = getProgression(1, 5);
  if (randSymbol === '-') {
    res = randomNumOne - randomNumTwo; question = `${randomNumOne} - ${randomNumTwo}`;
  } else if (randSymbol === '+') {
    res = randomNumOne + randomNumTwo; question = `${randomNumOne} + ${randomNumTwo}`;
  } else {
    res = randomNumOne * randomNumTwo; question = `${randomNumOne} * ${randomNumTwo}`;
  }
  return [question, `${res}`];
};

const calcgame = playNewGame(textCalc, getexpressionResult);
export default calcgame;
