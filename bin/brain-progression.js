#!/usr/bin/env node
import { playnewgame } from '../src/index.js';
import { text,randomNumb} from '../src/games/brain-progression-definition.js';

playnewgame(text, randomNumb);
