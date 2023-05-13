#!/usr/bin/env node
import { playnewgame } from '../src/index.js';
import {text, gameGcd} from '../src/games/brain-gcd-definition.js';

playnewgame(text, gameGcd);