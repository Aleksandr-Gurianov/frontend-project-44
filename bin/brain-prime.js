#!/usr/bin/env node
import { playnewgame } from '../src/index.js';
import { text, primegame} from '../src/games/brain-prime-definition.js';

playnewgame(text, primegame);
