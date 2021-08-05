#!/usr/bin/env node
import playProgressionGame from '../src/index.js';
import { getQuestion, getAnswer, getResult } from '../src/games/progression.js';

playProgressionGame(getQuestion, getAnswer, getResult);
