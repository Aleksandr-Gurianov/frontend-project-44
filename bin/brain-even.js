#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';

console.log(`Hello, ${name}!`);

const evenOrodd = () => {
	  console.log ( 'Answer "yes" if the number is even, otherwise answer "no".');
	  let result = '';
	  let typeofnumber = '';
	  let i = 0;
while (i < 3) {
	  const number = ( Math.round(Math.random()*35) );
	  console.log(`Question: ${number}`);
	  if (number % 2 === 0){typeofnumber ='yes';}
	  else {typeofnumber = 'no'; }
	 const youranswer = readlineSync.question('Your answer: ');
if ( youranswer === typeofnumber){
	console.log('Correct!');
	result = `Congratulations, ${name}!`;
	i+=1;
	
}
else {result =`${youranswer} is wrong answer ;(. Correct answer was ${typeofnumber}.\nLet's try again, ${name}! ` ; i=3}

}

return result;

};
console.log(evenOrodd());
