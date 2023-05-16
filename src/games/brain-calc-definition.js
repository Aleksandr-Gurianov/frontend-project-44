import {playnewgame} from '../index.js';
import {randomRange} from '../randomnumber.js';

const textCalc = 'What is the result of the expression?';

const getexpressionResult = () => {
  const symbol = ['-', '+', '*'];
  let res = '';
  const l = symbol.length;
  const rand = Math.floor(Math.random() * l);
  const randSymbol = symbol[rand];
  let question = '';
  const randomNumOne = randomRange(1,35);
  const randomNumTwo = randomRange(1,5);
  // const randomNumOne = Math.round(Math.random() * 35);
  // const randomNumTwo = Math.round(Math.random() * 5);
  if (randSymbol === '-') {
    res = randomNumOne - randomNumTwo; question = `${randomNumOne} - ${randomNumTwo}`;
  } else if (randSymbol === '+') {
    res = randomNumOne + randomNumTwo; question = `${randomNumOne} + ${randomNumTwo}`;
  } else {
    res = randomNumOne * randomNumTwo; question = `${randomNumOne} * ${randomNumTwo}`;
  }
  return [question, `${res}`];
};

export const calcgame = playnewgame(textCalc,getexpressionResult);
