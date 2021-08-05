#!/usr/bin/env node
import playEvenGame from '../src/index.js';
import { getQuestion, getAnswer, getResult } from '../src/games/even.js';

playEvenGame(getQuestion, getAnswer, getResult);
