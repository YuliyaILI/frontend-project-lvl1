#!/usr/bin/env node
import playCalcGame from '../src/index.js';
import { getQuestion, getAnswer, getResult } from '../src/games/calc.js';

playCalcGame(getQuestion, getAnswer, getResult);
