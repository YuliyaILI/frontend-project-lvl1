#!/usr/bin/env node
import playGcdGame from '../src/index.js';
import { getQuestion, getAnswer, getResult } from '../src/games/gcd.js';

playGcdGame(getQuestion, getAnswer, getResult);
