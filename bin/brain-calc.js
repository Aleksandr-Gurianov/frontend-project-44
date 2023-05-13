#!/usr/bin/env node
import {textCalc, ExpressionResult} from '../src/games/brain-calc-definition.js';
import {playnewgame} from '../src/index.js';

playnewgame(textCalc, ExpressionResult);
