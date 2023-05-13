#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { name } from './cli.js';

export const playnewgame = (text, gamevariant) => {
  console.log(text);
  let finalgame = '';	
  let i = 0;
  while (i < 3) {
    const [question, programanswer] = gamevariant();
    console.log(`Question: ${question}`);
    const youranswer = readlineSync.question('Your answer: ');
    if (youranswer === programanswer) {
      console.log('Correct!');
      i += 1;
      finalgame = `Congratulations, ${name}!`;
    } else { console.log(`'${youranswer}' is wrong answer ;(. Correct answer was '${programanswer}'`); i = 3; 
      finalgame = `Let's try again, ${name}!`;
      return console.log(finalgame);
    }
  }
  return console.log(finalgame);
};
