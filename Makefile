install: # установить зависимости
	npm ci

brain-games: # запуск приветствия
	node bin/brain-games.js

brain-even: # запуск игры even
	node bin/brain-even.js

brain-calc: # запуск игры calc
	node bin/brain-calc.js

brain-gcd: #
	node bin/brain-gcd.js

brain-progression: #
	node bin/brain-progression.js

publish: # публичность
	npm publish --dry-run

lint: # проверка линтером
	npx eslint .


