#!/usr/bin/env node
export const textCalc = 'What is the result of the expression?';
export const ExpressionResult = () => {
// random symbol function start
  const symbol = ['-', '+', '*'];
  let res = '';
  const l = symbol.length;
  const rand = Math.floor(Math.random() * l);
  const randSymbol = symbol[rand];
  // random symbol function finish
  let question = '';
  const randomNumOne = Math.round(Math.random() * 35);
  const randomNumTwo = Math.round(Math.random() * 5);
  if (randSymbol === '-') {
    res = randomNumOne - randomNumTwo; question = `${randomNumOne} - ${randomNumTwo}`;
  } else if (randSymbol === '+') {
    res = randomNumOne + randomNumTwo; question = `${randomNumOne} + ${randomNumTwo}`;
  } else {
    res = randomNumOne * randomNumTwo; question = `${randomNumOne} * ${randomNumTwo}`;
  }
  return [question, `${res}`];
};
