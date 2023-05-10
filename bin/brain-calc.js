#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { name } from '../src/cli.js';
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

let symbol = ['-', '+', '*' ];  


const ExpressionResultHidden = () => {
let result ='';
let i = 0;	  
let res = '';
	while (i<3){	
	  
	  let l = symbol.length;
	  let rand = Math.floor(Math.random()*l);
	  let  randSymbol = symbol[rand];
	  let randomNumOne = Math.round(Math.random()*35);
          let randomNumTwo = Math.round(Math.random()*5);
	  	
	 if ( randSymbol === '-' ){
		 res = randomNumOne - randomNumTwo;
		 console.log(`Question: ${randomNumOne} - ${randomNumTwo}`);
		  }
	 else if ( randSymbol === '+' ) {
		 res = randomNumOne + randomNumTwo;
		 console.log(`Question: ${randomNumOne} + ${randomNumTwo}`);
		  }
	 else {
		   res = randomNumOne * randomNumTwo;
		   console.log(`Question: ${randomNumOne} * ${randomNumTwo}`);
		  }


const youranswer = readlineSync.question('Your answer: ');
if (Math.abs(youranswer) === Math.abs(res)) {
console.log( 'Correct!');
i+=1;
result= `Congratulations, ${name}!`;
}
else { 
	result =`'${youranswer}' is wrong answer ;(. Correct answer was '${res}'\nLet's try again, ${name}!`;
	i=3 ;
}
}	
return result;
};


console.log(ExpressionResultHidden());




