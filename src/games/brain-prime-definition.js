#!/usr/bin/env node
export const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const randNum = (min, max) => {
	  const x=Math.floor(Math.random()*(max-min)+min);
	  return x;
};


export const primegame = () =>{
	let result = 'yes';
	const y = randNum(2,35);
	for ( let i = 2; i < y ; i += 1){
		if(y % i === 0) 
		{result = 'no';}
	}
	return [y, result];
}; 
