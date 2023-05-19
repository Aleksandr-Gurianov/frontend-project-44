import playNewGame from '../index.js';
import getProgression from '../utilsCalcProgress.js';

const textCalc = 'What is the result of the expression?';

const getRandomSymbol = (numberOne, numberTwo) => {
  let res = '';
  let question = '';
  const symbol = ['-', '+', '*'];
  const l = symbol.length;
  const rand = Math.floor(Math.random() * l);
  const randSymbol = symbol[rand];
  if (randSymbol === '-') {
    res = numberOne - numberTwo; question = `${numberOne} - ${numberTwo}`;
  } else if (randSymbol === '+') {
    res = numberOne + numberTwo; question = `${numberOne} + ${numberTwo}`;
  } else {
    res = numberOne * numberTwo; question = `${numberOne} * ${numberTwo}`;
  }
  return [question, `${res}`];
};

const getexpressionResult = () => {
  const randomNumOne = getProgression(5, 35);
  const randomNumTwo = getProgression(1, 5);
  const result = (getRandomSymbol(randomNumOne, randomNumTwo));
  return result;
};

const calcgame = playNewGame(textCalc, getexpressionResult);
export default calcgame;
