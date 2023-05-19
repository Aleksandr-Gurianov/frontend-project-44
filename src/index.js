import readlineSync from 'readline-sync';
import greeting from './cli.js';

const username = greeting();

const playNewGame = (sendGameDescription, insertRulesOfGame) => {
  console.log(sendGameDescription);
  let finalGame = '';
  const countOfRound = 3;
  for (let i = 0; i < countOfRound; i += 1) {
    const [question, programanswer] = insertRulesOfGame();
    console.log(`Question: ${question}`);
    const youranswer = readlineSync.question('Your answer: ');
    if (youranswer === programanswer) {
      console.log('Correct!');
      finalGame = `Congratulations, ${username}!`;
    } else {
      console.log(`'${youranswer}' is wrong answer ;(. Correct answer was '${programanswer}'`);
      finalGame = `Let's try again, ${username}!`;
      return console.log(finalGame);
    }
  }
  return console.log(finalGame);
};

export default playNewGame;
