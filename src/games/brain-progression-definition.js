#!/usr/bin/env node
const randomRange = (min, max) => {
  const r = Math.random() * (max - min) + min; return Math.floor(r);};  

export const text = 'What number is missing in the progression?';
export const randomNumb = () =>{
  const x = randomRange(5, 10);
  const firstNum = randomRange(3, 30);
  const numPlus = randomRange(2, 10);
  const arr = []; let countNum = 0; let i = firstNum;
  while (countNum < x) {
    i += numPlus;
    arr.push(i);
    countNum += 1;}
  const dot = '..' ;
  const l = arr.length; 
  const addDot=randomRange(0,l);
  const rightanswer = arr[addDot];
  arr[addDot] = dot;  
  return [arr.join(' '), `${rightanswer}`]; };
