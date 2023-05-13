#!/usr/bin/env node
import { playnewgame } from '../src/index.js';
import { textofEven, gameEven} from '../src/games/brain-even.js';

playnewgame(textofEven, gameEven);
