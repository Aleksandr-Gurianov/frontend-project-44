#!/usr/bin/env node
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
export const gameGcd = () => {
  const first = Math.abs(Math.round(Math.random()*35));
  const second = Math.abs(Math.round(Math.random()*35));
  const question = `${first} ${second}`;
  const play = nod(first, second);
  return [question, `${play}`];
};
export const text = 'Find the greatest common divisor of given numbers.';