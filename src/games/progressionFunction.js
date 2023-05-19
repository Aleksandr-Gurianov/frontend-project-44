import playNewGame from '../index.js';
import getProgression from '../utilsCalcProgress.js';

const text = 'What number is missing in the progression?';

const randomNumb = () => {
  const x = getProgression(5, 10);
  const firstNum = getProgression(3, 30);
  const numPlus = getProgression(2, 10);
  const arr = []; let countNum = 0; let i = firstNum;
  while (countNum < x) {
    i += numPlus;
    arr.push(i);
    countNum += 1;
  }
  const dot = '..';
  const l = arr.length;
  const addDot = getProgression(0, l);
  const rightanswer = arr[addDot];
  arr[addDot] = dot;
  return [arr.join(' '), `${rightanswer}`];
};
const progressiongame = playNewGame(text, randomNumb);
export default progressiongame;
