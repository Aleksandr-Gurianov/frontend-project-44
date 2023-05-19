import playNewGame from '../index.js';
import getProgression from '../utilsCalcProgress.js';

const text = 'What number is missing in the progression?';

const createProgression = (firstNum, maxWidth, numPlus) => {
  const arr = []; let countNum = 0; let i = firstNum;
  while (countNum < maxWidth) {
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

const randomNumb = () => {
  const maxWidth = getProgression(5, 10);
  const firstNum = getProgression(3, 30);
  const numPlus = getProgression(2, 10);
  const result = createProgression(firstNum, maxWidth, numPlus);
  return result;
};
const progressiongame = playNewGame(text, randomNumb);
export default progressiongame;
