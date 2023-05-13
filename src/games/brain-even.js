#!/usr/bin/env node
export const textofEven = 'Answer "yes" if the number is even, otherwise answer "no".';
export const gameEven = () => {
  const number = (Math.round(Math.random() * 35));
  let numOddEv = '';
  if (number % 2 === 0){numOddEv ='yes';}
  else {numOddEv = 'no'; }
  return [number, numOddEv];
};