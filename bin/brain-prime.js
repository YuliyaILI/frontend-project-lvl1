#!/usr/bin/env node
import playPrimeGame from '../src/index.js';
import { getQuestion, getAnswer, getResult } from '../src/games/prime.js';

playPrimeGame(getQuestion, getAnswer, getResult);
