import readlineSync from 'readline-sync';
import { greeting } from './cli.js';

const username = greeting();

export const playnewgame = (text, gamevariant) => {
  console.log(text);
  let finalgame = '';	
  const numberOfround = 3;
  for (let i = 0; i < numberOfround ; i += 1) {
    const [question, programanswer] = gamevariant();
    console.log(`Question: ${question}`);
    const youranswer = readlineSync.question('Your answer: ');
    if (youranswer === programanswer) {
      console.log('Correct!');
      finalgame = `Congratulations, ${username}!`;
    } else { console.log(`'${youranswer}' is wrong answer ;(. Correct answer was '${programanswer}'`);
      finalgame = `Let's try again, ${username}!`;
      return console.log(finalgame);
    }
  }
  return console.log(finalgame);
};
